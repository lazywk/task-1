import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function UsersHeader() {
  return (
    <div className="mb-2 flex items-center justify-between">
      <Input placeholder="Search users..." className="max-w-xs" />
      <Button>
        <Plus size={16} className='mr-2' />
        New
      </Button>
    </div>
  );
}
