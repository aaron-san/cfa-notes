const Note = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="dark:bg-slate-600 dark:text-slate-100 -z-10 px-4 mb-2 mt-6 py-4 border border-cyan-500 rounded bg-cyan-50 text-cyan-700 relative">
      <span className="absolute -top-3 left-2 rounded bg-cyan-800 text-slate-100 px-2 text-sm">
        Note:
      </span>
      {children}
    </div>
  );
};

export default Note;
