import React from "react";

const Card = ({img ,title,startRet, counsValue, dolerValue,openSpots  }) => {

  let badgeText 
  if(openSpots === 0 ){
    badgeText = "SOLD OUT"
  }else if(openSpots === 27){
     badgeText = "ONLINE"
  } else{
    badgeText = ""
  }
 
  return (
    <>
      <div className="w-44 text-[12px] relative py-4 lg:col-span-2 md:col-span-3 sm:col-span-4 col-span-7">
        <img  className="w-full rounded-xl h-60" src={img} alt="Main card image" />
        <div className="flex gap-1 items-center my-1">
          <img className="h-3" src="/image/card/Star 1.png" alt="Star icon." />
          <span>{startRet}</span>
          <span className="text-gray-400">({counsValue}) • </span>
          <span className="text-gray-400">USA</span>
        </div>
        <h2 className="text-[16px] font-normal py-1 leading-4">{title}</h2>
        <p><span className="font-semibold">From ${dolerValue}</span> / person</p>
        <div className=" absolute top-5 left-2 font-semibold">{ <p className={`${badgeText ? "p-1 bg-white rounded px-2" : "" }`}>{badgeText}</p>  }</div>
      </div>
    </>
  );
};

export default Card;

