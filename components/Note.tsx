const Note = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="-z-10 relative bg-cyan-50 dark:bg-slate-700 mt-6 mb-2 px-4 py-4 border border-cyan-500 rounded text-cyan-700 dark:text-slate-100">
      <span className="-top-3 left-2 absolute bg-cyan-800 px-2 rounded text-slate-100 text-sm">
        Note:
      </span>
      {children}
    </div>
  );
};

export default Note;
