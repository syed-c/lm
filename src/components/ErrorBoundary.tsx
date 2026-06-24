import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  public static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ errorInfo });
    
    // Log to console with full stack trace and component structure
    console.error("%c🚨 REACT RENDERING ERROR CAUGHT BY BOUNDARY:", "color: white; background: #e11d48; font-weight: bold; padding: 4px 8px; border-radius: 4px;");
    console.error("Error Object:", error);
    console.error("Component Stack Trace:\n", errorInfo.componentStack);

    // Send error telemetry to server logs
    const errorData = {
      type: 'react-boundary-error',
      message: error.message || String(error),
      stack: error.stack || null,
      componentStack: errorInfo.componentStack || null
    };

    fetch('/api/log-client-error', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(errorData)
    }).catch((e) => {
      console.warn('[ErrorBoundary Telemetry]: Failed to report render error:', e);
    });
  }

  public override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-brand-white p-6 font-sans" id="error-boundary-screen">
          <div className="max-w-2xl w-full bg-rose-50 border border-rose-200 rounded-2xl p-8 space-y-6 text-left">
            <div className="flex items-center space-x-3 text-rose-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="err-icon">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h2 className="text-xl font-bold font-display text-brand-charcoal">Interface Render Pipeline Suspended</h2>
            </div>
            
            <p className="text-sm text-slate-600 leading-relaxed">
              An error occurred during UI compilation or mounting. Full diagnostics have been logged to the console and backend logger.
            </p>

            <div className="bg-slate-900 text-rose-200 rounded-xl p-4 overflow-auto max-h-60 text-xs font-mono space-y-2">
              <p className="font-semibold text-rose-400 border-b border-rose-900/50 pb-1">
                {this.state.error?.name || 'Error'}: {this.state.error?.message}
              </p>
              {this.state.errorInfo && (
                <pre className="whitespace-pre-wrap opacity-85 text-[11px] leading-normal font-mono select-text">
                  {this.state.errorInfo.componentStack}
                </pre>
              )}
            </div>

            <div className="pt-2 flex gap-4">
              <button
                onClick={() => window.location.reload()}
                className="px-5 py-2.5 bg-brand-charcoal hover:bg-brand-bronze text-brand-white text-xs font-semibold rounded-lg transition-all cursor-pointer shadow-xs"
                id="reload-workspace-btn"
              >
                Reload Page
              </button>
              <button
                onClick={() => {
                  this.setState({ hasError: false, error: null, errorInfo: null });
                  window.location.hash = '/';
                  window.location.reload();
                }}
                className="px-5 py-2.5 border border-brand-stone hover:border-brand-bronze text-brand-charcoal text-xs font-semibold rounded-lg transition-all cursor-pointer"
                id="reset-routing-btn"
              >
                Reset Route and Retry
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
