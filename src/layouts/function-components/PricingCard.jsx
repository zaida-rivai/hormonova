
import React from "react";
import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

const PricingCard = ({ tab, pricing_card, features }) => {
  const [toggle, setToggle] = useState("month");

  return (
    <div className="row -mt-10">
      <div className="col-12">
        <div className="row mb-14 justify-center">
          <div className="text-center lg:col-7">
            <ul className="inline-flex items-center justify-center rounded-[40px] bg-white px-1.5 py-1.5">
              {tab.map((item, i) => (
                <li
                  key={i}
                  className={`price-tab-btn ${
                    toggle === item.type ? "active" : undefined
                  } cursor-pointer rounded-[40px] px-[30px] py-[11px] text-dark`}
                  onClick={() => setToggle(item.type)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="price-cards row gy-4">
          {pricing_card.map((item, i) => (
            <div key={`item-${i}`} className="md:col-6 lg:col-4">
              <div className={`price-card ${item.featured && "popular"}`}>
                {item.featured && (
                  <div className="price-tag absolute right-0 top-0 inline-block text-white">
                    <svg
                      className="absolute right-0 top-0"
                      width="120"
                      height="120"
                      viewBox="0 0 120 120"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0H120V120L0 0Z" fill="#D62221" />
                    </svg>
                    <span className="relative inline-block rotate-45 pl-3.5 pt-6 text-lg text-white">
                      Popular
                    </span>
                  </div>
                )}
                <div className="price-card-head">
                  <span className="btn btn-sm h-8 rounded-[40px] bg-[#D5EBFF] px-4 py-[5px] text-sm text-dark">
                    {item.name}
                  </span>
                  <div className="price">
                    <h2
                      className={`mb-2.5 mt-6 ${
                        item.featured ? "text-white" : undefined
                      }`}
                    >
                      {item.currency}
                      {toggle === "month"
                        ? item.monthly_price
                        : item.yearly_price}{" "}
                      <span className="text-lg">
                        / {toggle === "month" ? "Month" : "Year"}
                      </span>
                    </h2>
                  </div>
                  <span>Get 7 Days Free Trial</span>
                </div>
                <div className="mx-auto max-w-[250px]">
                  <ul className="checklist-circle mb-10">
                    {features.sort((a,b)=>item.services.indexOf(a)-item.services.indexOf(b)).map((feature, i) => (
                      <li
                        className={
                          item.services.includes(feature)
                            ? "line-through order-1"
                            : undefined
                        }
                        key={i}
                      >
                        <AiFillCheckCircle className="mr-2 inline  text-primary" />

                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    {item.button.enable && (
                      <a
                        className="btn btn-primary btn-sm"
                        href={item.button.link}
                      >
                        {item.button.label}{" "}
                        <FiChevronRight className="inline text-[24px]" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
