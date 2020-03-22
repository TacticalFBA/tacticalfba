import React from "react";

import { UserConsumer } from "../../context";
// products data
import { products } from "../../data"

// import components
import Title from "../Styled/Title";
import UserInserts from "./UserInserts";
import TemplateItem from "./TemplateItem";


export default function TemplateList({ history }) {

  // get all products that type is "Insert" as templates 
  const templates = products.filter(product => product.type === "Insert")

  return (

    <div className="container">

      {/* if user already has some inserts saved, list them for choose */}
      < UserConsumer>
        {({ inserts }) => {
          return (<div>
            {inserts.length > 0 && <UserInserts history={history} myInserts={inserts} />}
          </div>
          )
        }}
      </UserConsumer>

      {/* or choose from templates anyway */}
      <div>
        <Title title={"Choose a template"} />
        {/* Todo: allow to upload own insert file */}
        {/* <span> or upload your own artwork</span> */}
        <div className="row">
          {
            templates.map(template => <TemplateItem key={template.pid} template={template} />)
          }
        </div>
      </div>

    </div >
  );
}