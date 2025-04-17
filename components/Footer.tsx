const Footer = () => {
  return (
    <div className="w-screen h-12 bg-slate-800 border-t-2 border-slate-100/50">
      &copy; {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
