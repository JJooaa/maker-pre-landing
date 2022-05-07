import { ReactComponent as CheckIcon } from "../assets/icon-check.svg";
import { ReactComponent as FreeIcon } from "../assets/icon-free.svg";
import { ReactComponent as PaidIcon } from "../assets/icon-paid.svg";

interface Props {
  header: string;
  text: string;
  price: string;
  bgColor: string;
  textColor: string;
  array: Array<string>;
}

const Subscription = ({
  header,
  text,
  price,
  array,
  bgColor,
  textColor,
}: Props) => {
  return (
    <div
      className={`w-full max-w-md h-auto relative bg-${bgColor} rounded-lg text-${textColor}  px-7 pt-12 pb-8`}
    >
      {price === "Free" ? (
        <FreeIcon className="absolute -top-6" />
      ) : (
        <PaidIcon className="absolute -top-8" />
      )}

      <h3 className="text-lg font-bold">{header} </h3>
      <p className="text-[15px] mt-5 opacity-70">{text}</p>
      <h1 className="text-[40px] mt-6 font-bold">
        {price}
        {price !== "Free" && (
          <span className="text-black text-sm opacity-60"> / month</span>
        )}
      </h1>
      <ul className="flex flex-col gap-3 mt-5">
        {array.map((text) => (
          <li className="flex items-center gap-3">
            <CheckIcon fill={price === "Free" ? "cyan" : "black"} />
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subscription;
