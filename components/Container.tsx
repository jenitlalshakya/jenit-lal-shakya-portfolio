import { ReactNode } from 'react';

type ContainerProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

const Container = ({ id, className = "", children }: ContainerProps) => {
  return (
    <section id={id} className={`px-4 sm:px-6 md:px-[8%] lg:px-[10%] ${className}`}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

export default Container;
