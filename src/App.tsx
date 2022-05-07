import { ReactComponent as Logo } from "./assets/logo.svg";
import mobileHeroBackground from "./assets/illustration-hero-mobile.png";
import "./App.css";
import scrollIcon from "./assets/icon-scroll.svg";
import { highlightsArray } from "./data";
import Subscription from "./components/Subscription";

const freeList = [
  "Unlimited products",
  "Basic analytics",
  "Limited marketplace exposure",
  "10% fee per transaction",
];

const paidList = [
  "Custom domain",
  "Advanced analytics and reports",
  "High marketplace visibility",
  "5% fee per transaction",
];

const App = () => {
  return (
    <>
      <header>
        <Logo className="mx-auto mb-16" />
      </header>
      <section id="hero">
        <img src={mobileHeroBackground} alt="hero" />
        <h1 className="text-white font-bold text-3xl text-center mt-12 mb-6">
          Get paid for the work you <span className="text-cyan">love </span>to
          do.
        </h1>
        <p className="text-sm text-gray text-center max-w-xl mx-auto">
          The 9-5 grind is so last century. We believe in living life on your
          own terms. Whether you’re looking to escape the rat race or set up a
          side hustle, we’ve got you covered.
        </p>
        <img className="mx-auto mt-8" src={scrollIcon} alt="desktop mouse" />
      </section>

      <section id="highlights" className="mt-36 flex flex-col gap-14">
        {highlightsArray.map(
          (highlight: { text: string; paragraph: string; img: string }) => (
            <div
              key={highlight.text}
              className="flex flex-col gap-8 items-center "
            >
              <div className="w-[120px] h-[124px] flex items-center justify-center bg-blue rounded-[45px]">
                <img src={highlight.img} className="h-2/4" alt="" />
              </div>
              <div className="text-center flex flex-col gap-4">
                <h3 className="text-white text-lg font-bold">
                  {highlight.text}
                </h3>
                <p className="text-gray">{highlight.paragraph}</p>
              </div>
            </div>
          )
        )}
      </section>

      <section id="pricing" className="mt-36">
        <h2 className="text-2xl font-bold text-white text-center">
          Our pricing plans
        </h2>
        <p className="text-gray text-center mt-7">
          We only make money when our creators make money. Our plans are always
          affordable, and it’s completely free to get started.
        </p>
        <div className="flex flex-col items-center mt-20 gap-16">
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

      <section id="contact-us" className="my-36">
        <h2 className="text-2xl font-bold text-white text-center mb-8 bg-[url(./assets/bg-footer-squiggle.svg)]">
          Get notified when we launch
        </h2>
        <div className="flex flex-col gap-6 justify-center items-center">
          <input
            type="text"
            placeholder="Email address"
            className="rounded-3xl bg-blue h-12 w-full max-w-xs font-medium px-4 py-2"
          />
          <button className="rounded-3xl border-2 border-cyan bg-cyan w-full font-[15px] font-bold h-12 max-w-xs text-blue hover:bg-black hover:text-white">
            Get notified
          </button>
        </div>
      </section>
    </>
  );
};

export default App;
