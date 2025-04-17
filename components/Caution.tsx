const Caution = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="relative px-4 mt-6 mb-2 py-4 border border-red-500 rounded bg-red-50 text-red-700">
      <span className="absolute -top-3 left-2 rounded bg-red-800 text-red-100 px-2 text-sm">
        Caution:
      </span>
      {children}
    </div>
  );
};

export default Caution;
