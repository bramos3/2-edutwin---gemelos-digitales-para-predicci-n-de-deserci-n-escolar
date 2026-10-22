const fs = require('node:fs');
const path = require('node:path');
const {spawnSync} = require('node:child_process');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'C:/Users/USUARIO/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

(async () => {
  const seed = spawnSync('python', ['-c', 'import json; from backend.data import get_seed_data; s,t,f=get_seed_data(); print(json.dumps({"schools":s,"students":t}))'], {encoding:'utf8'});
  if(seed.status !== 0) throw new Error(seed.stderr);
  const data = JSON.parse(seed.stdout);
  const schools = Array.from({length:30}, (_,i) => ({...data.schools[i%6], id:'school-'+i, name:'AULA-'+(i+1), code:'AULA-'+(i+1)}));
  const students = Array.from({length:1000}, (_,i) => ({...data.students[i%6], idHash:'hash-'+i, anonymousId:'#STD-'+i, schoolId:schools[i%30].id}));
  const payload = {schools,students,level:'macro',language:'es',simulation:{mealProgramBoost:0,transportSubsidy:0,psychosocialMentoring:0,remedialClasses:0,familyCashTransfer:0,connectivityAid:0}};
  const css=fs.readFileSync('backend/assets/twin.css','utf8');
  const js=fs.readFileSync('backend/assets/twin.bundle.js','utf8').replaceAll('</script','<\\/script');
  const html=`<!doctype html><style>${css}</style><div id="root"></div><script type="application/json" id="twin-data">${JSON.stringify(payload)}</script><script>${js}</script>`;
  const browser=await chromium.launch({channel:'chrome',headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-webgl']});
  fs.mkdirSync('artifacts/twin-qa',{recursive:true});
  try {
    for(const viewport of [{width:1280,height:650},{width:390,height:650}]){
      const page=await browser.newPage({viewport}); const errors=[];
      page.on('pageerror',e=>errors.push(e.message));
      await page.setContent(html); await page.waitForSelector('canvas'); await page.waitForTimeout(1500);
      for(const level of ['macro','meso','micro']){
        await page.locator('#btn-'+level+'-level').click(); await page.waitForTimeout(600);
        const pixels=await page.evaluate(async()=>{
          const canvas=document.querySelector('canvas');
          const image=new Image(); image.src=canvas.toDataURL(); await image.decode();
          const check=document.createElement('canvas');check.width=canvas.width;check.height=canvas.height;
          const ctx=check.getContext('2d');ctx.drawImage(image,0,0);const p=ctx.getImageData(0,0,check.width,check.height).data;
          let bright=0;for(let i=0;i<p.length;i+=4)if(p[i]>45||p[i+1]>45||p[i+2]>45)bright++;
          return {bright,total:p.length/4,width:canvas.width,height:canvas.height};
        });
        if(pixels.bright<500)throw new Error('Blank scene '+level+' '+JSON.stringify(pixels));
        await page.screenshot({path:path.join('artifacts/twin-qa',`${viewport.width}-${level}.png`)});
        console.log(viewport.width,level,JSON.stringify(pixels));
      }
      await page.locator('#btn-camera-zoom-in').click();await page.locator('#btn-camera-rotate-toggle').click();
      if(errors.length)throw new Error(errors.join('\n'));
      await page.close();
    }
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
