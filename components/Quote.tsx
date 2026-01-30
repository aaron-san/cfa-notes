const Quote = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="relative my-8 mr-4 ml-12 px-12 border-slate-400/50 border-l-[2rem] text-slate-500 dark:text-slate-300 text-xl italic leading-relaxed">
      <span className="top-[36px] left-2 absolute text-[4rem] -translate-y-1/2 transform">
        "
      </span>
      <p className="indent-4">
      {children}
      </p>
      {/* <span className="right-24 -bottom-16 absolute text-[4rem] -translate-y-1/2 transform">
        "
      </span> */}
    </div>
  );
};

export default Quote;
