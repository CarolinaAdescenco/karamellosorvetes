import React from "react";

export const Gallery = (props) => {
  return (
    <div id="produtos">
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Produtos</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              {props.data
                ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4 portfolio-item-image"
                    style={{
                      backgroundImage: `url(${d.largeImage})`,
                    }}
                  >
                    <div className="portfolio-item-title">
                      <h3>{d.title}</h3>
                    </div>
                  </div>
                ))
                : "Loading..."}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
