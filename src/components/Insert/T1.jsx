import React from "react";
import styled from "styled-components";
import Parser from 'html-react-parser';
import { PreviewContainer } from "../Styled/PreviewContainer";
import { UserConsumer } from "../../context/userContext"

export default function T1({ content, handleInputChange, onSelectFile }) {
  let { textOne, textTwo, textThree, frontImg } = content.front;
  let { backText, backImg } = content.back;
  let themeColor = {
    background: content.themeColor
  };
  return (
    <React.Fragment>
      <div className="my-4">Front</div>
      <div className="row">
        <div className="col-10 col-lg-6">
          <h6 className="mb-4">Preview:</h6>
          <PreviewContainer className="mt-3">
            <LeftWrapper style={themeColor}>
              <div>{textTwo}</div>
              <img src={frontImg} alt="front" />
              <div>{textThree}</div>
            </LeftWrapper>
            <RightWrapper>
              {Parser(textOne)}
            </RightWrapper>
          </PreviewContainer>
        </div>
        <div className="col-10 col-lg-6">
          <h6 className="mb-4">Edit:</h6>
          <UserConsumer>
            {({ user }) => {
              return (<form>
                <div className="form-group">

                  {/* textTwo */}
                  <input
                    type="text"
                    className="form-control"
                    value={textTwo}
                    name="front.textTwo"
                    onFocus={e => e.target.select()}
                    onChange={e => handleInputChange(e)}
                  />

                  {/* textThree */}
                  <input
                    type="text"
                    className="form-control"
                    value={textThree}
                    name="front.textThree"
                    onFocus={e => e.target.select()}
                    onChange={e => handleInputChange(e)}
                  />

                  {/* frontImg */}
                  <input
                    className="form-control"
                    type="file"
                    name="front.frontImg"
                    onChange={e => onSelectFile(e)}
                  />

                  {/* mainText */}
                  <textarea
                    className="form-control"
                    rows="5"
                    value={textOne}
                    name="front.textOne"
                    onFocus={e => e.target.select()}
                    onChange={e => handleInputChange(e)}
                  />
                </div>

                {/* template name CANNOT BE DUPLICATE */}
                <label htmlFor="templateName">Set Template Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="templateName"
                  name="templateName"
                  placeholder="My Template..."
                  onChange={e => handleInputChange(e)}
                />
              </form>)
            }}
          </UserConsumer>
        </div>
      </div>
    </React.Fragment >
  );
}

const LeftWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display:flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 1.5rem;
  width: 7rem;
  height: 18rem;
  color: var(--mainWhite);
  img {
    margin: 1rem 0;
    border-radius: 50%;
    width: 100%;
  }
`;

const RightWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 1.5rem 1.75rem 1.5rem 1rem;
  width: 23rem;
  height: 18rem;
  background: var(--mainWhite);
  font-size: 0.85rem;
`;
