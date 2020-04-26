import React from "react";
import { UserConsumer } from "../../../contexts/UserContext";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {
  InsertProvider,
  InsertConsumer,
} from "../../../contexts/InsertContext";

// import components
import Preview from "../previewTemplate/Preview";
import InsertName from "./InsertName";
import ThemeColor from "./ThemeColor";
import Editor from "./Editor";
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
                    <div>
                      <div>
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

                        {/* theme color */}
                        {pid === 0 ? null : (
                          <ThemeColor
                            // className="handler"
                            color={value.content.themeColor}
                            handleThemeColor={value.handleThemeColor}
                          />
                        )}

                        {/* text editor */}

                        <div>
                          <Editor
                            editorState={value.editorState}
                            updateEditorState={value.updateEditorState}
                            open={value.editorShow}
                            setEditorShow={value.setEditorShow}
                          />
                        </div>
                      </div>

                      {/* validator */}
                      <SaveAlerts show={value.show} error={value.error} />

                      <Box>
                        {/* insert name */}

                        <InsertName
                          iName={value.content.iName}
                          handleInsertName={value.handleInsertName}
                        />

                        {/* submit button */}
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
                      </Box>

                      <Spinner spin={value.spin} />
                    </div>
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
