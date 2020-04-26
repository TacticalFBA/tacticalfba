export const styles = (theme) => ({
  root: {
    position: "relative",
    width: "100%",
  },
  cropContainer: {
    position: "relative",
    width: "100%",
    height: 250,
  },
  controls: {
    padding: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
  sliderContainer: {
    display: "flex",
    flex: "1",
    alignItems: "center",
  },
  sliderLabel: {
    // [theme.breakpoints.down("xs")]: {
    minWidth: 65,
    // },
  },
  slider: {
    padding: "30px 0px",
    marginLeft: 16,
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      alignItems: "center",
      margin: "0 16px",
    },
  },
});
