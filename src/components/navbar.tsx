'use client';

import { ThemeToggler } from '@/components/theme/toggler';
import { Button } from '@/components/ui/button';

import { useRouter } from 'next/navigation';

export function Navbar() {
  const router = useRouter();
  return (
    <header className="border-b py-1.5">
      <nav className="container flex items-center justify-between">
        <Button className="h-9" onClick={() => router.refresh()}>
          JohnC0de
        </Button>
        <ThemeToggler />
      </nav>
    </header>
  );
}
