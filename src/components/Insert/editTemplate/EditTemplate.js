import React from "react";
import { InsertProvider, InsertConsumer } from "../../../contexts/InsertContext"

// import components
import Title from "../../Styled/Title";
import Preview from "../previewTemplate/Preview";
import InsertName from "./InsertName"
import ThemeColor from "./ThemeColor";
import Editor from "./Editor";
import ImageUploader from "./ImageUploader"
import Spinner from "../../Spinner"
import Alert from "./Alert"

export default function EditTemplate({ user, history, match }) {

  // get template id
  const pid = parseInt(match.params.pid);

  return (
    <div className="container">

      {/* page title */}
      <Title title={"Edit template"} />

      <InsertProvider pid={pid} history={history}>
        <InsertConsumer>
          {value => {
            return (
              <React.Fragment>
                {/* editting start */}
                <div className="mb-5">

                  {/* insert name */}
                  {/* TODO: check if insert name is duplicate */}
                  <div className="row mb-3">
                    <div className="col-3">
                      <h6>Name Your Insert: </h6>
                    </div>
                    <div className="col-9">
                      <InsertName handleInsertName={value.handleInsertName} />
                    </div>
                  </div>

                  {/* theme color */}
                  <div className="row mb-3">
                    <div className="col-3">
                      <h6>Theme Color: </h6>
                    </div>
                    <div className="col-9">
                      <ThemeColor
                        className="handler"
                        color={value.content.themeColor}
                        handleThemeColor={value.handleThemeColor}
                      />
                    </div>
                  </div>

                  {/* set image */}
                  <div className="row">
                    <div className="col-3">
                      <h6>Set Images: </h6>
                    </div>
                    <div className="col-9">
                      <span>Front image: </span><ImageUploader side={"frontImg"} onSelectImg={value.onSelectImg} />
                      <span>Rear image: </span><ImageUploader side={"rearImg"} onSelectImg={value.onSelectImg} />
                    </div>
                  </div>

                  {/* text editor */}
                  <div>
                    {value.editorShow === true &&
                      (
                        <div className="row">
                          <div className="col-3">
                            <h6>Edit Selected Part: </h6>
                            <p className="text-muted">Hover over to select</p>
                          </div>
                          <div className="col-9">
                            <Editor
                              editorState={value.editorState}
                              updateEditorState={value.updateEditorState} />
                          </div>
                        </div>
                      )
                    }
                  </div >
                </div>
                {/* editting end */}

                {/* validator */}
                <Alert show={value.show} error={value.error} />

                {/* submit button */}

                <button
                  className="btn btn-sm btn-dark"
                  type="button"
                  onClick={() => value.saveTemp(user,
                    [{
                      img: value.frontImage,
                      item: "frontImg"
                    },
                    {
                      img: value.rearImage,
                      item: "rearImg"
                    }]
                  )}
                >
                  Save
                  </button>

                {/* Reset Button */}
                {/* <button className="btn btn-sm btn-secondary ml-3">Reset</button> */}

                {/* preview area */}
                <div className="py-5">
                  <Preview pid={pid} history={history} content={value.content} onSelect={value.onSelect} />
                </div>

                {/* spin when uploading images and save insert to the db */}
                < Spinner spin={value.spin} />
              </React.Fragment>
            )
          }}
        </InsertConsumer>
      </InsertProvider>

    </div >
  );
}
