const PageFooter = () => {
  return (
    <div className="bg-slate-700 dark:bg-slate-900 border-slate-100/50 border-t-2 w-screen h-12 text-slate-400">
      <div className="flex justify-center items-center py-1 h-full text-sm">
        &copy; {new Date().getFullYear()} Free Analyst Notes. All rights
        reserved.
      </div>
    </div>
  );
};

export default PageFooter;
