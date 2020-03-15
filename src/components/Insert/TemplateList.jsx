import React from "react";
import Template from "./Template";
import { ProductConsumer } from "../../context/productContext";

export default function TemplateList() {
  return (
    <React.Fragment>
      <h4>Choose a Template</h4>
      {/* to be changed to a link */}
      <span> or upload your own artwork</span>
      <div className="row mt-5">
        <ProductConsumer>
          {({ products }) => {
            return products.map(product => {
              return <Template key={product.pid} product={product} />;
            });
          }}
        </ProductConsumer>
      </div>
    </React.Fragment>
  );
}
