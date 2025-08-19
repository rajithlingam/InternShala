import Skeleton from '../ui/Skeleton'

export default function CartItemSkeleton() {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-100 p-3">
      <div className="h-16 w-16 overflow-hidden rounded-lg">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="flex-1 space-y-2">
        <Skeleton className="h-5 w-1/2" />
        <Skeleton className="h-4 w-1/3" />
      </div>
      <div className="flex w-36 items-center justify-end gap-3">
        <Skeleton className="h-9 w-24 rounded-lg" />
        <Skeleton className="h-9 w-9 rounded-lg" />
      </div>
    </div>
  )
}
