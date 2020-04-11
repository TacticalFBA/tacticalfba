import React from "react";
import styled from "styled-components";

export default function Why() {
  return (
    <WhyWrapper>
      <div className="container">
        <div className="row">
          <div className="col-xl-2 col-md-4 col-sm-12">
            <h4>What are packaging inserts?</h4>
          </div>
          <div className="col-xl-4 col-md-8 col-sm-12">
            <p>
              Packaging inserts are printed marketing materials that sellers can
              add to their Amazon packages before sending them to customers.
              They are usually the size of a business card or postcard and carry
              a marketing message.
            </p>
            <p>
              Packaging inserts have the potential to be an essential part of
              creating a stand-out customer experience, achieve different
              marketing goals, and directly communicate with your Amazon
              community.
            </p>
          </div>
          <div className="col-xl-2 col-md-4 col-sm-12">
            <h4>Why do I need packaging inserts?</h4>
          </div>
          <div className="col-xl-4 col-md-8 col-sm-12">
            <p>
              Amazon doesn’t provide sellers with the personal contact
              information of their customers. But from a marketing perspective,
              each package sent has massive potential for upselling,
              incentivizing repeat purchases and encouraging feedback. And
              that’s what packaging inserts can do.
            </p>
            <p>
              However, to protect customers from spam, Amazon has enforced
              strict limitations on what kind of marketing materials you can add
              to your packages. That means you have to be very careful and exact
              when creating packaging inserts in order not to violate Amazon’s
              TOS.
            </p>
          </div>
        </div>
      </div>
    </WhyWrapper>
  );
}

const WhyWrapper = styled.div`
padding-top: 5rem;
padding-bottom: 5rem;
h4{
    padding-right: 30px;
    border-right: 3px solid var(--mainOrange);
    color: var(--mainOrange);
}

@media (max-width: 768px) { 
    h4{
        border-right: none;
        &::after{
            content: '';
            display: block;
            margin-bottom: 20px;
            width: 50px;
            height: 20px;
            border-bottom: 2.5px solid var(--mainOrange);
        }    
    }
    .row div:nth-child(3),
    .features .row div:nth-child(n+2){
        margin-top: 50px;
    }
}
}
`;
