import React from "react";
import TemplateItem from "./TemplateItem";

import { ProductConsumer } from "../../context/productContext";
import ChooseTemp from "./ChooseTemp";


export default function TemplateList({ history }) {
  return (
    <div className="container pt-5">
      {localStorage.getItem("template") !== null && <ChooseTemp history={history} />}
      <div>
        <h4 className="pt-5">Choose a Template</h4>
        {/* to be changed to a link */}
        <span> or upload your own artwork</span>
        <div className="row mt-5">
          <ProductConsumer>
            {({ products }) => {
              return products.map(product => {
                return <TemplateItem key={product.pid} product={product} />;
              });
            }}
          </ProductConsumer>
        </div>
      </div>
    </div>
  );
}
