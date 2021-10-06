import React from "react";

import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";

import Premier from "../components/Premier/Premier.component";

const HomePage = () => {
    return (
        <>
          <div className="gap-10">
          <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-gray-800">
                    The best of Entertainment
                </h1>
                <EntertainmentCardSlider />

                <div className="bg-gray-700   py-16 ">
                    <div className="container  mx-auto px-4">
                        <div className="hidden  md:flex  ">
                            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="hhd" className="w-full h-full py-3" />
                        </div>
                        <Premier />
                    </div>
                </div>
            </div>
          </div>
        </>
    );
}
export default HomePage;
