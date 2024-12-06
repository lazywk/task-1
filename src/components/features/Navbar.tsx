import { navigation } from '@/routes/__root';
import { Link } from '@tanstack/react-router';

import { Button } from '../ui/button';

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-2">
        {navigation.map(el => (
          <li key={el.key}>
            <Button>
              <Link to={el.path}>{el.label}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
