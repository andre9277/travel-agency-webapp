import React from "react";
import HotelCard from "./Helper/HotelCard";

const Hotels = () => {
  return (
    <div className="pt-[5rem] bg-gray-300 pb-[4rem]">
      <h1 className="heading"> Best Hotel</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center w-[80%] mx-auto mt-[4rem]">
        <div>
          {/* HotelCard */}
          <HotelCard
            name=" Hotel Nextus"
            city="Rajshahi"
            price="$123"
            reviewNum="21"
            image="/images/h1.jpeg"
          />
        </div>
        <div>
          {" "}
          <HotelCard
            name=" Hotel Reactive"
            city="Dhaka"
            price="$223"
            reviewNum="31"
            image="/images/h2.jpg"
          />
        </div>
        <div>
          {" "}
          <HotelCard
            name=" Hotel TypeScrip"
            city="Japan"
            price="$473"
            reviewNum="51"
            image="/images/h3.jpeg"
          />
        </div>
        <div>
          {" "}
          <HotelCard
            name=" Hotel Mongohouse"
            city="England"
            price="$521"
            reviewNum="81"
            image="/images/h4.jpg"
          />
        </div>
        <div>
          {" "}
          <HotelCard
            name=" Hotel Tailwind"
            city="India"
            price="$412"
            reviewNum="34"
            image="/images/h5.jpg"
          />
        </div>
        <div>
          {" "}
          <HotelCard
            name=" Hotel Webdev"
            city="USA"
            price="$723"
            reviewNum="213"
            image="/images/h6.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hotels;
