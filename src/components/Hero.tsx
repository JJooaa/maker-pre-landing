import { useWindowSize } from "usehooks-ts";
import scrollIcon from "../assets/icon-scroll.svg";
import mobileHeroBackground from "../assets/illustration-hero-mobile.png";
import heroLeft from "../assets/illustration-hero-left.svg";
import heroRight from "../assets/illustration-hero-right.svg";

const Hero = () => {
  const { width } = useWindowSize();
  let bg = width > 768 && "hero-bg";

  return (
    <section
      id="hero"
      className={`lg:mt-0 lg:h-auto md:min-h-[400px] ${bg} md:flex md:flex-col md:justify-center relative`}
    >
      {width < 768 ? (
        <img
          src={mobileHeroBackground}
          alt="hero"
          className="md:absolute -z-10"
        />
      ) : (
        <>
          <img className="absolute right-[80%] top-10" src={heroLeft} alt="" />
          <img className="absolute left-[80%] top-10" src={heroRight} alt="" />
        </>
      )}
      <h1 className="text-white font-bold text-3xl text-center mt-12 mb-6 mx-auto lg:text-5xl">
        Get paid for the work <br /> you{" "}
        <span className="text-cyan">love </span>to do.
      </h1>
      <p className="text-[15px] text-gray text-center md:max-w-[440px] lg:max-w-[540px] mx-auto">
        The 9-5 grind is so last century. We believe in living life on your own
        terms. Whether you’re looking to escape the rat race or set up a side
        hustle, we’ve got you covered.
      </p>
      <img className="mx-auto mt-8" src={scrollIcon} alt="desktop mouse" />
    </section>
  );
};

export default Hero;
