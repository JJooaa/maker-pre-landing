import Subscription from "./Subscription";
import { freeList, paidList } from "../data";

const Pricing = () => {
  return (
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
  );
};

export default Pricing;
