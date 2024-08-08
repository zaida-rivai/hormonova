import { marked } from "marked";
import { useState } from "react";

const Faq = ({ faq }) => {
  const { title, faq_list} =faq.data
  const [isActive, setIsActive] = useState([]);
  const leftAccordion = faq_list.slice(0, Math.ceil(faq_list.length / 2));
  const rightAccordion = faq_list.slice(
    Math.ceil(faq_list.length / 2),
    Math.ceil(faq_list.length)
  );
  // accordion handler
  const accordionHandler = (index) => {
    if (isActive.includes(index)) {
      setIsActive(isActive.filter((item) => item !== index));
    } else {
      setIsActive((prev) => [...prev, index]);
    }
  };

  return (
    <section className="section-bordered faqs">
      <div className="container">
        <div className="row justify-center">
          <div className="col-12 text-center lg:col-6">
            <h2
              className="section-title"
              dangerouslySetInnerHTML={{ __html: marked.parseInline(title) }}
            />
          </div>
          <div className="lg:col-11 xl:col-10">
            <div className="gap grid md:grid-cols-2">
              <div className="faqs-col">
                {leftAccordion.map((item, i) => (
                  <div
                    className={`accordion ${
                      isActive.includes(`item-${i}`) ? "active" : undefined
                    }`}
                    key={`item-${i}`}
                  >
                    <div
                      className="accordion-header"
                      onClick={() => accordionHandler(`item-${i}`)}
                    >
                      {item.title}
                      <svg
                        className="accordion-icon"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                      >
                        <path
                          fill="currentColor"
                          d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"
                        ></path>
                      </svg>
                    </div>
                    <div className="accordion-content">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: marked.parseInline(item.content),
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="faqs-col">
                {rightAccordion.map((data, i) => (
                  <div
                    className={`accordion ${
                      isActive.includes(`data-${i}`) ? "active" : undefined
                    }`}
                    key={`data-${i}`}
                  >
                    <div
                      className="accordion-header"
                      onClick={() => accordionHandler(`data-${i}`)}
                    >
                      {data.title}
                      <svg
                        className="accordion-icon"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                      >
                        <path
                          fill="currentColor"
                          d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"
                        ></path>
                      </svg>
                    </div>
                    <div className="accordion-content">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: marked.parseInline(data.content),
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
