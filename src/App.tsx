import { ReactComponent as Logo } from "./assets/logo.svg";
import mobileHeroBackground from "./assets/illustration-hero-mobile.png";
import "./App.css";
import scrollIcon from "./assets/icon-scroll.svg";
import { highlightsArray, freeList, paidList } from "./data";
import Subscription from "./components/Subscription";
import { useWindowSize } from "usehooks-ts";

const App = () => {
  const { width } = useWindowSize();

  return (
    <>
      <header>
        <Logo className="mx-auto mb-16 md:mx-0" />
      </header>
      <section id="hero" className="md:mt-32 lg:mt-44">
        {width < 768 && (
          <img
            src={mobileHeroBackground}
            alt="hero"
            className="md:absolute -z-10"
          />
        )}
        <h1 className="text-white font-bold text-3xl text-center mt-12 mb-6 mx-auto lg:text-5xl">
          Get paid for the work <br /> you{" "}
          <span className="text-cyan">love </span>to do.
        </h1>
        <p className="text-[15px] text-gray text-center max-w-[540px] mx-auto">
          The 9-5 grind is so last century. We believe in living life on your
          own terms. Whether you’re looking to escape the rat race or set up a
          side hustle, we’ve got you covered.
        </p>
        <img className="mx-auto mt-8" src={scrollIcon} alt="desktop mouse" />
      </section>

      <section
        id="highlights"
        className="mt-36 flex flex-col gap-14 items-center md:w-[650px] mx-auto lg:w-auto lg:max-w-[1100px] lg:flex-row lg:h-[383px]"
      >
        {highlightsArray.map(
          (
            highlight: { text: string; paragraph: string; img: string },
            index: number
          ) => {
            const alignSelf = index % 2 !== 0 && "md:self-start";
            return (
              <div
                key={highlight.text}
                className={`flex flex-col gap-8 items-center md:w-[540px] md:flex-row ${alignSelf} lg:flex-col lg:items-start`}
              >
                <div className="w-[120px] h-[124px] flex items-center justify-center bg-blue rounded-[45px]">
                  <img src={highlight.img} className="h-2/4" alt="" />
                </div>
                <div className="text-center flex flex-col gap-4 md:text-left max-w-sm">
                  <h3 className="text-white text-lg font-bold">
                    {highlight.text}
                  </h3>
                  <p className="text-gray">{highlight.paragraph}</p>
                </div>
              </div>
            );
          }
        )}
      </section>

      <section id="pricing" className="mt-36">
        <h2 className="text-2xl font-bold text-white text-center md:text-[32px]">
          Our pricing plans
        </h2>
        <p className="text-gray text-center mt-7 max-w-xl mx-auto text-[15px]">
          We only make money when our creators make money. Our plans are always
          affordable, and it’s completely free to get started.
        </p>
        <div className="flex flex-col items-center mt-20 gap-16 lg:flex-row lg:justify-center">
          <Subscription
            header="Dip your toe"
            text="Just getting started? No problem at all! Our free plan will take you a
        long way."
            price="Free"
            bgColor="blue"
            textColor="white"
            array={freeList}
          />
          <Subscription
            header="Dive right in"
            text="Ready for the big time? Our paid plan will help you take your business to the next level."
            price="$25.00"
            bgColor="cyan"
            textColor="black"
            array={paidList}
          />
        </div>
      </section>

      <section
        id="contact-us"
        className="my-36 bg-[url(./assets/bg-footer-squiggle.svg)] bg-contain bg-no-repeat"
      >
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
      </section>
    </>
  );
};

export default App;
