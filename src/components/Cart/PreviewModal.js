import React from 'react'
import styled from "styled-components";

export default function PreviewModal({ iName, frontPre, backPre }) {

    return (
        <ModalContainer>>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{iName}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <img src={frontPre} alt="front side preview" />
                        <img src={backPre} alt="rear side preview" />
                    </div>
                </div>
            </div>
        </ModalContainer>
    )
}


const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  z-index:9999;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`