import { marked } from "marked";
import React from "react";
import * as Icon from "react-feather";
import { humanize } from "@/lib/utils/textConverter";

const Features = ({ features: { title, feature_list, button } }) => {
  const customizeFeatureList = feature_list.reduce((acc, cur, i) => {
    if (i % 2 === 0) acc.push([cur, feature_list[i + 1]]);
    return acc;
  }, []);

  return (
    <section className="features section-bordered">
      <div className="container">
        <div className="row relative justify-center">
          <div className="grained-bg absolute left-0 top-0 h-full w-full opacity-[0.16]">
            <img src="/images/common-bg.png" alt="" />
          </div>
          <div className="lg:col-11 xl:col-10">
            <h2
              className="section-title text-center"
              dangerouslySetInnerHTML={{ __html: marked.parseInline(title) }}
            />
          </div>
          <div className="features-grid relative mb-3 lg:col-10">
            {customizeFeatureList.map((row, i) => (
              <div className="row" key={`row-${i}`}>
                {row.map((feature_item, i) => {
                  const FeatherIcon = Icon[humanize(feature_item.icon)];
                  return (
                    <div
                      className="px-6 py-10 transition-all duration-300 md:col-6 hover:bg-white lg:px-14"
                      key={`feature_item-${i}`}
                    >
                      <div className="relative pl-10">
                        <span className="icon absolute -top-2 left-0 text-primary">
                          <FeatherIcon size={32} />
                        </span>
                        <h5
                          className="mb-2"
                          dangerouslySetInnerHTML={{
                            __html: marked.parseInline(feature_item.title),
                          }}
                        />
                        <p>{feature_item.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="relative z-10 text-center lg:col-10">
            {button.enable && (
              <a className="btn btn-primary" href={button.link}>
                {button.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
