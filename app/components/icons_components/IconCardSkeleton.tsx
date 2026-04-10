export default function IconCardSkeleton() {
  return (
    <div className="bg-card-bg rounded-xl border border-border-main overflow-hidden p-6">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-border-main rounded-xl animate-pulse" />
        <div className="w-32 h-5 bg-border-main rounded animate-pulse" />
        <div className="w-24 h-8 bg-border-main rounded-lg animate-pulse" />
      </div>
    </div>
  );
}
