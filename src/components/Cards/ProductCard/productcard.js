import React from "react";

function Productcard(item) {
  const { title, icon } = item;
  return (
    <div style={{ width: "100%" }} className="card col-lg-3 mt-3">
      <img
        className="card-img-top bg-secondary"
        src="..."
        height="100px"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <div className="card-text">$18.50</div>
        <div className="text-secondary">Time left</div>
        <div className="text-danger">6d 13h 52 sec</div>
        <div className="text-secondary">5 bids</div>
        <div className="text-secondary">+$11.60 shidping</div>
      </div>
    </div>
  );
}

export default Productcard;
