import { ReactNode } from 'react';

interface ICardWrapperProps {
  children: ReactNode;
  title: string;
}

export function CardWrapper({ children, title }: ICardWrapperProps) {
  return (
    <div className="bg-white rounded-[1rem] w-[500px] p-6 mb-12 text-center">
      <h3 className="mb-5 text-black text-3xl font-bold">{title}</h3>
      {children}
    </div>
  );
}
