const Loading = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-background">
    <div className="relative h-12 w-12">
      <div className="absolute inset-0 rounded-full border-2 border-border" />
      <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-accent" />
    </div>
    <p className="mt-4 text-sm text-muted">Loading portfolio...</p>
  </div>
);

export default Loading;
