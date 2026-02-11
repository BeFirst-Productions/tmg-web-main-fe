export const Container = ({ children, className = '' }) => {
  return (
    <div className={`w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[6rem] ${className}`}>
      {children}
    </div>
  );
};