import React from "react";
import Banner from "./Banner";
import Jobs from "../Jobs/Jobs";

const Home = () => {
  return (
    <div>
      {/* banner section */}
      <Banner />
      {/* jobs section */}
      <Jobs/>
    </div>
  );
};

export default Home;
