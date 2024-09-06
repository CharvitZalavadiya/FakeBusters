import "./pricing.css";

const PricingCard = () => {
  return (
    <div className="flex gap-16">
      <div className="cardbg-free-border relative drop-shadow-xl w-64 h-96 overflow-hidden rounded-xl">
        <span className="cardbg-free absolute items-center justify-center z-[3] opacity-90 rounded-xl inset-0.5">
          <h2 className="text-3xl mt-5 text-zinc-50 font-semibold flex justify-center">
            FREE
          </h2>
          <ul className="text-slate-300 mt-7 h-56 flex flex-col mx-3 gap-1">
            <li>10 videos per month</li>
            <li>Upto 10MB video</li>
          </ul>
          <span className="grid grid-cols-2">
            <span className="text-xl flex justify-center mx-3 font-semibold">
              0 ₹
            </span>
            <span>
              <button className="bg-green-700 rounded-md px-5 py-1 font-semibold">Purchase</button>
            </span>
          </span>
        </span>
        <span className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></span>
      </div>
      <div className="cardbg-st-border relative drop-shadow-xl w-64 h-96 overflow-hidden rounded-xl">
        <span className="cardbg-st absolute items-center justify-center z-[3] opacity-90 rounded-xl inset-0.5">
          <h2 className="text-3xl mt-5 text-zinc-50 font-semibold flex justify-center">
            STANDARD
          </h2>
          <ul className="text-slate-300 mt-7 h-56 flex flex-col mx-3 gap-1">
            <li>30 videos per month</li>
            <li>Upto 15MB video</li>
            <li>15% better accuracy model</li>
          </ul>
          <span className="grid grid-cols-2">
            <span className="text-xl flex justify-center mx-3 font-semibold">
              80 ₹
            </span>
            <span>
              <button className="bg-green-700 rounded-md px-5 py-1 font-semibold">Purchase</button>
            </span>
          </span>
        </span>
        <span className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></span>
      </div>
      <div className="cardbg-pro-border relative drop-shadow-xl w-64 h-96 overflow-hidden rounded-xl">
        <span className="cardbg-pro absolute items-center justify-center z-[3] opacity-90 rounded-xl inset-0.5">
          <h2 className="text-3xl mt-5 text-zinc-50 font-semibold flex justify-center">
            PRO
          </h2>
          <ul className="text-slate-300 mt-7 h-56 flex flex-col mx-3 gap-1">
            <li>60 videos per month</li>
            <li>Upto 30MB video</li>
            <li>20% better accuracy model</li>
            <li>30% faster output</li>
          </ul>
          <span className="grid grid-cols-2">
            <span className="text-xl flex justify-center mx-3 font-semibold">
              150 ₹
            </span>
            <span>
              <button className="bg-green-700 rounded-md px-5 py-1 font-semibold">Purchase</button>
            </span>
          </span>
        </span>
        <span className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></span>
      </div>
    </div>
  );
};

export default PricingCard;
