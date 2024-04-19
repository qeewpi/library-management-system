import React from 'react';

const BookSelected = () => {
  return (
    <div className="flex w-[45%] flex-col gap-[26px] bg-white pb-[27px] md:w-full md:p-5 sm:pb-5 rounded-[20px]">
      <div className="relative h-[471px] md:h-auto">
        <img
          src="images/cardItemPlaceholder.png"
          alt="book_placeholder"
          className="h-[471px] w-[471px] object-cover"
        />
        <img
          src="images/cardItemPlaceholder.png"
          alt="book_placeholder"
          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[340px] w-[53%] rounded-[20px] object-cover"
        />
      </div>
      <div className="flex flex-col items-start gap-[21px] px-10 sm:px-5">
        <div className="flex items-center justify-between gap-5 self-stretch bg-white-A700">
          <div className="min-w-[160px] rounded-[20px] sm:px-5 bg-[#005792] text-white px-3 py-3 text-xs font-bold flex justify-center items-center">Currently Borrowed</div>
          <p className={`${sizesText.xs} w-[21%] self-end text-right italic !text-[#005792]`}>XX days left before the due date</p>
        </div>
        <div className="flex flex-col items-start gap-0.5">
          <h2 className={`${sizesHeading["3xl"]} !text-black`}>Beyond Diversity</h2>
          <p className={`${sizesText["2xl"]}`}>Lorem Ipsum</p>
        </div>
        <div className="flex w-[91%] items-center justify-between gap-5 pr-[5px] md:w-full">
          <div className="flex flex-col items-start">
            <p className={`${sizesText.s}`}>Rating</p>
            <h3 className={`${sizesHeading.s} !text-black`}>4.6</h3>
          </div>
          <div className="flex flex-col items-start">
            <p className={`${sizesText.s}`}>Number of Pages</p>
            <h4 className={`${sizesHeading.s} !text-black`}>160</h4>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className={`${sizesText.s}`}>Language</p>
            <h5 className={`${sizesHeading.s} !text-black`}>English</h5>
          </div>
          <div className="flex flex-col items-start gap-0.5">
            <p className={`${sizesText.s}`}>Deadline</p>
            <h6 className={`${sizesHeading.s} !text-black`}>MM/DD/YYYY</h6>
          </div>
        </div>
        <div className="flex flex-col items-start self-stretch">
          <p className={`${sizesHeading.s} !text-black`}>Summary</p>
          <p className="text-[13px] font-light !text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac venenatis elit. Fusce gravida,
            ante vel egestas lacinia, velit urna lobortis mauris, quis euismod sapien ex in ante. In posuere
            blandit mauris et fermentum. Quisque semper sem vitae viverra consectetur. Phasellus diam dolor,
            maximus sit amet nisl non, lacinia facilisis nibh. In posuere, leo id sollicitudin pellentesque,
            massa augue rhoncus lorem, volutpat luctus orci lectus sed sapien. Duis quis dui non justo sodales
            finibus. Vivamus auctor, sapien a varius laoreet, eros neque molestie diam, ac placerat quam magna
            ac tellus. Curabitur convallis id risus eu lacinia. Ut at nisi enim.{" "}
          </p>
        </div>
        <div className="flex w-full">
          <button className="min-w-[99px] !rounded-br-[12px] !rounded-bl-[12px] !rounded-tr-[12px] !rounded-tl-[12px] pr-[30px] pl-[30px] h-[40px] flex items-center justify-center !bg-orange-300 text-center text-xs font-semibold !text-white sm:px-5 sm:pl-5 sm:pr-5">
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

// nilagyan ko ng ganito kasi medj nalilito pa ako paano yung styles HWHAHAHHAHHAHA sori sori
const sizesText = {
    xs: "text-[8px] font-normal",
    lg: "text-[13px] font-normal",
    s: "text-[10px] font-medium",
    "2xl": "text-[15px] font-medium",
    "3xl": "text-base font-medium",
    xl: "text-sm font-medium",
  };
  
  const sizesHeading = {
    "3xl": "text-[32px] font-bold md:text-3xl sm:text-[28px]",
    "2xl": "text-2xl font-semibold md:text-[22px]",
    "4xl": "text-4xl font-semibold md:text-[34px] sm:text-[32px]",
    s: "text-[13px] font-bold",
    xs: "text-xs font-semibold",
    lg: "text-base font-semibold",
  };

export default BookSelected;