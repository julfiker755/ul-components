import { cn } from '@/lib/utils';
import React from 'react';

interface SkeletonProps {
  className?: string;
}

export const Skeleton:React.FC<SkeletonProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-slate-200", className)}
      {...props}
    />
  );
};

