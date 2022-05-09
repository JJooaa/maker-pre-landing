import { highlightsArray } from "../data";

const Beneftis = () => {
  return (
    <section
      id="benfits"
      className="mt-36 flex flex-col gap-14 items-center md:w-[650px] mx-auto lg:w-auto lg:max-w-[1100px] lg:flex-row lg:h-[383px]"
    >
      {highlightsArray.map(
        (
          highlight: { text: string; paragraph: string; img: string },
          index: number
        ) => {
          // for uneven indexes -> add the property self-align: flex-start
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
  );
};

export default Beneftis;
