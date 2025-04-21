const Caution = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="dark:bg-red-600 dark:text-slate-100 -z-10 relative px-4 my-8 py-4 border border-red-300 rounded bg-red-50 text-red-700">
      <span className="absolute -top-3 left-2 rounded bg-red-800 text-red-100 px-2 text-sm">
        Caution:
      </span>
      {children}
    </div>
  );
};

export default Caution;
