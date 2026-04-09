export default function IconCardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden p-6">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-gray-200 rounded-xl animate-pulse" />
        <div className="w-32 h-5 bg-gray-200 rounded animate-pulse" />
        <div className="w-24 h-8 bg-gray-200 rounded-lg animate-pulse" />
      </div>
    </div>
  );
}
