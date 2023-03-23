const drawerWidth = 240;

const styles = {
  btnSX: {
    fontSize: 20,
    backgroundColor: "secondary",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  titleSX: {
    textDecoration: "underline",
    mb: "40px",
  },
  field: {
    mt: "20px",
    mb: "20px",
    display: "block",
  },
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
  },
  appBar: {
    position: "fixed",
    backgroundColor: "black",
    width: { sm: `calc(100% - ${drawerWidth}px)` },
    ml: { sm: `${drawerWidth}px` },
  },
  container: {
    pt: "75px",
  },
  containerCreate: {
    pt: "45px",
    width: "100%",
    background: "green",
    height: "100vh",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alighItems: "center",
  },
};

export default styles;
