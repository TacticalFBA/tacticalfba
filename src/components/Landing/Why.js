import React from "react";
import styled from "styled-components";

export default function Why() {
  return (
    <WhyWrapper>
      <div className="container">
        <div className="row">
          <div className="col-xl-2 col-md-4 col-sm-12">
            <h4>What are product inserts?</h4>
          </div>
          <div className="col-xl-4 col-md-8 col-sm-12">
            <p>
              Product inserts are printed marketing materials that sellers can
              add to their Amazon packages prior to sending to customers.
              <br />
              Usually the size of a business card, product inserts are essential
              in creating a stand-out customer experience, leading to higher
              customer satisfaction and frequency of Amazon reviews.
            </p>
            {/* <p>
              Packaging inserts have the potential to be an essential part of
              creating a stand-out customer experience, achieve different
              marketing goals, and directly communicate with your Amazon
              community.
            </p> */}
          </div>
          <div className="col-xl-2 col-md-4 col-sm-12">
            <h4>Why do I need product inserts?</h4>
          </div>
          <div className="col-xl-4 col-md-8 col-sm-12">
            <p>
              Each product sold has massive potential for upselling,
              incentivizing repeat purchases and encouraging feedback. And
              that’s what product inserts can help to promote.
              <br />
              Adding a personal touch and directly communicating with your
              Amazon customer base is an invaluable asset from a marketing
              perspective.
            </p>
            {/* <p>
              However, to protect customers from spam, Amazon has enforced
              strict limitations on what kind of marketing materials you can add
              to your packages. That means you have to be very careful and exact
              when creating packaging inserts in order not to violate Amazon’s
              TOS.
            </p> */}
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
  padding-left: 30px;
    padding-right: 30px;
    border-right: 3px solid var(--mainOrange);
    color: var(--mainOrange);
}

@media (max-width: 768px) { 
    h4{
      padding-left: 0;
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
