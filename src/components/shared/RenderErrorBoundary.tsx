import { Component, ReactNode } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface RenderErrorBoundaryProps {
  children: ReactNode;
  language: 'es' | 'en';
  label: string;
}

interface RenderErrorBoundaryState {
  hasError: boolean;
}

export class RenderErrorBoundary extends Component<RenderErrorBoundaryProps, RenderErrorBoundaryState> {
  state: RenderErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): RenderErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error(`[EduTwin] ${(this as any).props.label} render error`, error);
  }

  handleRetry = () => {
    (this as any).setState({ hasError: false });
  };

  render() {
    const props = (this as any).props as RenderErrorBoundaryProps;
    if (!this.state.hasError) return props.children;

    const isSpanish = props.language === 'es';
    return (
      <section className="min-h-[220px] border border-rose-900/60 bg-[#111827]/80 rounded-xl p-6 flex items-center justify-center">
        <div className="max-w-md text-center">
          <div className="mx-auto w-11 h-11 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <h3 className="mt-3 text-sm font-bold text-slate-100">
            {isSpanish ? 'No se pudo cargar esta vista' : 'This view could not be loaded'}
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            {isSpanish ? 'El estado del sistema sigue disponible. Reintenta el módulo para reconstruir la vista.' : 'System state is still available. Retry the module to rebuild the view.'}
          </p>
          <button
            type="button"
            onClick={this.handleRetry}
            className="mt-4 inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-700 bg-slate-900/80 text-xs font-semibold text-slate-200 hover:border-cyan-500/60 hover:text-cyan-200 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            {isSpanish ? 'Reintentar' : 'Retry'}
          </button>
        </div>
      </section>
    );
  }
}
