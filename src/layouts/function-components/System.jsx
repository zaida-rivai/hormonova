import { marked } from "marked";
import React from "react";
import * as Icon from "react-feather";
import { humanize } from "@/lib/utils/textConverter";

const System = ({ system: { title, system_list } }) => {
  return (
    <section className="systems section-bordered">
      <div className="container">
        <div className="row relative justify-center">
          <div className="grained-bg absolute left-0 top-0 h-full w-full opacity-[0.16]">
            <img src="/images/common-bg.png" alt="" />
          </div>
          <div className="mb-14 text-center lg:col-6">
            <h2
              className="section-title mb-0"
              dangerouslySetInnerHTML={{ __html: marked.parseInline(title) }}
            />
          </div>
          <div className="lg:col-11 xl:col-10">
            <div className="row gy-4">
              {system_list.map((item, i) => {
                const FeatherIcon = Icon[humanize(item.icon)];

                return (
                  <div className="md:col-6 lg:col-4" key={`item-${i}`}>
                    <div className="h-full rounded-xl border border-border px-8 py-10 text-center transition-all duration-300 hover:bg-white hover:shadow">
                      <span className="mb-6 inline-block text-primary">
                        <FeatherIcon size={32} />
                      </span>
                      <h5 className="mb-6 capitalize">{item.title}</h5>
                      <p className="text-lg">{item.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default System;
