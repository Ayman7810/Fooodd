/** @format */

import React from "react";

const Card = ({DataMeals}) => {
  return (
    DataMeals.length >= 1 ? (
        DataMeals.map((item) =>{
            return (
                <div className="row  mt-1" key={item.id}>
                <div className="col p-0">
                  <div className="card h-100 d-flex flex-row ">
                    <img src={item.img} className="card-img-top img-item" alt="..." />
                    <div className="card-body" style={{ backgroundColor: "#F8F8F8" }}>
                      <h5 className="card-title">
                        <div className=" mb-4 pt-2 d-flex justify-content-between">
                          <h5 className="item-title">{item.titel}</h5>
                          <h5 className="item-price">{item.price}</h5>
                        </div>
                      </h5>
                      <p className="card-text item-description">
                       {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
           })
    ) : (<h2>not data found</h2>)
  );
};

export default Card;
