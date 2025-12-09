import { ReactNode } from 'react';
import { cn } from '@/lib/utils'; // если используешь clsx/tailwind-merge

interface Props {
  className?: string;
  children?: ReactNode; // ✅ правильный тип
}

export const Container: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={cn(className, 'max-w-[1320px] mx-auto px-4')}>
      {children}
    </div>
  );
};
