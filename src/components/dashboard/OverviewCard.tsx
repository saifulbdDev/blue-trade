
import Image from "next/image"



type SingleOverviewProps = {
  svgColor: string;
  price: string;
  valueColor: string;
  url: string;
  title: string;
};

const SingleOverview = ({
  svgColor = "#F0C98C",
  valueColor,
  price,
  url,
  title
}: SingleOverviewProps) => {
  return (
    <div
      className="bg-[#ffffff] rounded-2xl py-4  px-4"
      style={{ boxShadow: "0px 4px 8px 0px rgba(11, 180, 159, 0.10)" }}>
      <div className="flex items-center justify-between ">
        <div>
          <Image src={url} alt="" width={44} height={43} />
        </div>
        <h2 className="text-base text-black">{title}</h2>
      </div>
      <h2 className="text-3xl font-semibold text-black">{price}</h2>
      {/* <header className="flex items-center justify-between mb-[20px] p-5">
        <svg
          width="138"
          height="126"
          viewBox="0 0 138 126"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M123.703 18.2568C119.194 22.0179 106.926 25.6447 102.62 26.5939C94.8454 28.3079 82.4532 22.2776 80.1985 24.1582C77.9438 26.0387 85.2327 42.4174 82.2264 44.9248C80.7233 46.1785 75.8694 44.9427 75.0161 46.9755C73.3094 51.0411 90.6506 74.8882 86.1413 78.6493C80.1288 83.6641 65.7313 67.9302 60.0241 68.7272C54.3169 69.5242 51.2089 73.4375 48.9542 75.3181C46.6995 77.1986 41.8456 75.9628 40.3425 77.2165C39.2796 78.103 42.9401 86.5796 40.28 87.8372C36.6239 89.5655 23.9724 78.9807 21.0679 80.0821C18.8132 81.9627 22.0622 85.8581 19.8075 87.7387C17.5528 89.6192 4.5335 93.8728 8.33058 99.9533"
            stroke={svgColor}
            strokeWidth="3.23972"
            strokeLinecap="round"
          />
        </svg>
      </header> */}
    </div>
  );
};

export default SingleOverview;
