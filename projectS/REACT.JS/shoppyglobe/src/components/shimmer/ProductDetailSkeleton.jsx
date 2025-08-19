import Skeleton from '../ui/Skeleton'

export default function ProductDetailSkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-2xl">
          <Skeleton className="h-full w-full" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-7 w-3/4" />
          <div className="flex gap-3">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-24" />
          </div>
          <Skeleton className="h-5 w-1/3" />
          <Skeleton className="h-24 w-full" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-10 w-28 rounded-xl" />
            <Skeleton className="h-10 w-28 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}
