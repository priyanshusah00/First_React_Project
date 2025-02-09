import React from "react";
const func = () => {
  alert("no function is added :(");
};
const body = () => {
  return (
    <div className="body">
      <div className="left">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <button className="button" onClick={func}>
          Shop now
        </button>
        <button className="button2" onClick={func}>
          Category
        </button>
        <div className="shop">
            <img src="/images/shop.png" alt="" />
        </div>
      </div>
      <div className="right">
        <img src="\images\shoe_image.png" alt="shoe" />
      </div>
    </div>
  );
};

export default body;
