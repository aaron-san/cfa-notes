const PageFooter = () => {
  return (
    <div className="bg-slate-400 dark:bg-slate-900 border-slate-100/50 border-t-2 w-screen h-12">
      <div className="flex justify-center items-center py-1 h-full">
        &copy; {new Date().getFullYear()} Free Analyst Notes. All rights
        reserved.
      </div>
    </div>
  );
};

export default PageFooter;
