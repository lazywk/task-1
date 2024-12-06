import { get } from '@/services/base-service';
import { useAppSelector } from '@/store';

import { useCustomQuery } from '@/hooks/useCustomQuery';

import UsersHeader from './UsersHeader';
import UsersTable from './UsersTable';

export function UsersMain() {
  const { queryParams } = useAppSelector(state => state.users);
  const { data, isLoading, isError } = useCustomQuery({
    queryKey: ['users'],
    queryFn: () => get('/users', queryParams),
  });

  return (
    <div className="w-full">
      <div className="py-2">
        <UsersHeader />
        <UsersTable isError={isError} data={data} loading={isLoading} />
      </div>
    </div>
  );
}
