import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class Template extends Component {
  render() {
    const { pid, type, name, img } = this.props.template;
    return (
      <TemplateWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-3">
            <Link to={`/edit-template/${pid}`}>
              <img src={img} alt="template" className="card-img-top" />
            </Link>
          </div>

          {/* card footer */}
          <div className="card-footer">
            <p className="mb-0">
              {type} with <strong>{name}</strong>
            </p>
          </div>
        </div>
      </TemplateWrapper>
    );
  }
}

const TemplateWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.5s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgb(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }
`;
