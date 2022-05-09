const Footer = () => {
  return (
    <footer className="h-[500px] flex flex-col justify-center bg-[url(./assets/bg-footer-squiggle.svg)] bg-contain bg-center bg-no-repeat">
      <h2 className="text-2xl font-bold text-white text-center mb-8 lg:text-[32px]">
        Get notified when we launch
      </h2>
      <div className="flex flex-col gap-6 justify-center items-center md:flex-row">
        <input
          type="text"
          placeholder="Email address"
          className="rounded-3xl bg-blue h-12 w-full max-w-xs font-medium px-4 py-2 outline-none text-white"
        />
        <button className="rounded-3xl border-2 border-cyan bg-cyan w-full font-[15px] font-bold h-12 max-w-xs text-blue hover:bg-black hover:text-white md:w-36">
          Get notified
        </button>
      </div>
    </footer>
  );
};

export default Footer;
