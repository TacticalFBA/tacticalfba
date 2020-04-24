import React from "react";
import { UserConsumer } from "../../../contexts/UserContext";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  InsertProvider,
  InsertConsumer,
} from "../../../contexts/InsertContext";

// import components
import Preview from "../previewTemplate/Preview";
import InsertName from "./InsertName";
import ThemeColor from "./ThemeColor";
import Editor from "./Editor";
import ImageUploader from "./ImageUploader";
import Spinner from "../../Spinner";
import SaveAlerts from "./SaveAlerts";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: "2rem",
    marginTop: "2.5rem",
  },
}));

export default function EditTemplate({ location, history, stepForward }) {
  const classes = useStyles();
  // get template id
  const pid = parseInt(localStorage.getItem("pid"));

  const iid = location.pathname.split("/")[3]
    ? location.pathname.split("/")[3]
    : null;

  return (
    <div className="container">
      <Paper className={classes.root}>
        <UserConsumer>
          {({ user, inserts }) => (
            <InsertProvider
              user={user}
              pid={pid}
              iid={iid}
              history={history}
              inserts={inserts}
              stepForward={stepForward}
            >
              <InsertConsumer>
                {(value) => {
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
                            <InsertName
                              iName={value.content.iName}
                              handleInsertName={value.handleInsertName}
                            />
                          </div>
                        </div>

                        {/* theme color */}
                        {pid === 0 ? null : (
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
                        )}
                        {/* set image */}
                        <div className="row">
                          <div className="col-3">
                            <h6>Set Images: </h6>
                            <small className="text-muted">
                              <ul style={{ paddingLeft: "1rem" }}>
                                <li>File format: JPG</li>
                                {pid === 0 && (
                                  <li>Upload dimensions: 96*60 (mm)</li>
                                )}
                              </ul>
                            </small>
                          </div>
                          <div className="col-9">
                            <span
                              style={{
                                display: "block",
                                paddingBottom: "10px",
                              }}
                            >
                              Front image:{" "}
                            </span>
                            <ImageUploader
                              side={"frontImg"}
                              onSelectImg={value.onSelectImg}
                            />
                            <span
                              style={{
                                display: "block",
                                paddingBottom: "10px",
                              }}
                            >
                              Rear image:{" "}
                            </span>
                            <ImageUploader
                              side={"rearImg"}
                              onSelectImg={value.onSelectImg}
                            />
                          </div>
                        </div>

                        {/* text editor */}
                        {pid === 0 ? null : (
                          <h6 className="text-orange mb-3">
                            -- Hover over to edit text --
                          </h6>
                        )}
                        <div>
                          {value.editorShow === true && (
                            <div className="row">
                              <div className="col-3">
                                <h6>Edit Selected Part: </h6>
                              </div>
                              <div className="col-9">
                                <Editor
                                  editorState={value.editorState}
                                  updateEditorState={value.updateEditorState}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      {/* editting end */}

                      {/* preview area */}
                      <div className="pb-3">
                        <Preview
                          pid={pid}
                          history={history}
                          content={value.content}
                          onSelect={value.onSelect}
                          frontRef={value.frontRef}
                          backRef={value.backRef}
                        />
                      </div>

                      {/* validator */}
                      <SaveAlerts show={value.show} error={value.error} />

                      {/* submit button */}

                      {!iid && (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() =>
                            value.saveTemp(user, [
                              {
                                img: value.frontImage,
                                item: "frontImg",
                              },
                              {
                                img: value.rearImage,
                                item: "rearImg",
                              },
                            ])
                          }
                        >
                          Save
                        </Button>
                      )}
                      <Spinner spin={value.spin} />
                    </React.Fragment>
                  );
                }}
              </InsertConsumer>
            </InsertProvider>
          )}
        </UserConsumer>
      </Paper>
    </div>
  );
}
