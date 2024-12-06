import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface PaginationProps {
  total: number; // Jami elementlar soni
  page: number; // Joriy sahifa
  pageSize: number; // Har sahifadagi elementlar soni
  onPageChange: (page: number) => void; // Sahifa o'zgarganda ishlaydigan funksiya
}

export default function Pagination({
  total,
  page,
  pageSize,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(total / pageSize);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const delta = 2; // Joriy sahifa atrofidagi ko'rsatish kerak bo'lgan sahifalar soni

    // Sahifalar orasidagi qisqartmalarni (ellipses) boshqarish
    const left = Math.max(1, page - delta);
    const right = Math.min(totalPages, page + delta);

    // Har doim birinchi sahifani qo'shish
    if (left > 1) pages.push(1);
    if (left > 2) pages.push('...');

    // O'rta sahifalar
    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    // Har doim oxirgi sahifani qo'shish
    if (right < totalPages - 1) pages.push('...');
    if (right < totalPages) pages.push(totalPages);

    return pages;
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    onPageChange(newPage);
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        variant="secondary"
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        <ArrowLeft size={15} />
      </Button>

      <div className="flex space-x-1">
        {getPageNumbers().map((p, index) =>
          typeof p === 'number' ? (
            <Button
              key={index}
              variant={page === p ? 'default' : 'outline'}
              onClick={() => handlePageChange(p)}
            >
              {p}
            </Button>
          ) : (
            <span key={index} className="px-3 py-1 text-gray-500">
              {p}
            </span>
          ),
        )}
      </div>

      <Button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
        variant={page === totalPages ? 'default' : 'outline'}
      >
        <ArrowRight size={15} />
      </Button>
    </div>
  );
}
