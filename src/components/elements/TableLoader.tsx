import { Skeleton } from '../ui/skeleton';

export default function TableLoader() {
  return (
    <div className="flex flex-col gap-3">
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <div key={index}>
            <Skeleton className="h-[40px] w-full rounded-sm" />
          </div>
        ))}
    </div>
  );
}
