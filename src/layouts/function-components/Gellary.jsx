import { marked } from "marked";
import React from "react";
import Masonry from "react-masonry-css";

const Gellary = ({ our_work: { title, content, gellary } }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <section className="section-bordered">
      <div className="container">
        <div className="row relative justify-center">
          <div className="grained-bg absolute left-0 top-0 h-full w-full opacity-[0.16]">
            <img src="/images/common-bg.png" alt="" />
          </div>
          <div className="mb-14 text-center lg:col-8">
            <h2
              className="section-title"
              dangerouslySetInnerHTML={{ __html: marked.parseInline(title) }}
            />
            <p>{content}</p>
          </div>

          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {gellary.map((item, i) => (
              <div className="px-0 md:px-3" key={i}>
                <img className="h-full w-full rounded-xl" src={item} alt="" />
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </section>
  );
};

export default Gellary;
