const PageFooter = () => {
  return (
    <div className="w-screen h-12 bg-slate-800 dark:bg-slate-500 border-t-2 border-slate-100/50">
      <div className="flex justify-center items-center h-full py-1">
        &copy; {new Date().getFullYear()} Free Analyst Notes. All rights
        reserved.
      </div>
    </div>
  );
};

export default PageFooter;
