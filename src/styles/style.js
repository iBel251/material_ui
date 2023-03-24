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
    mb: "15px",
    textAlign: "center",
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
    background: "gray",
    padding: 0,
    height: "100%",
  },
  appBar: {
    position: "fixed",
    backgroundColor: "#fefefe",
    width: { sm: `calc(100% - ${drawerWidth}px)` },
    ml: { sm: `${drawerWidth}px` },
  },
  container: {
    pt: "75px",
    background: "purple",
  },
  containerCreate: {
    pt: "45px",
    width: "100%",
    height: "100%",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alighItems: "center",
  },
  form: {
    background: "black",
  },
  layoutChildren: {
    pt: "45px",
    width: "100%",
    height: "100%",
  },
  sidebarBigScreen: {
    display: { xs: "none", sm: "block" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
    },
  },
  sidebarSmallScreen: {
    display: { xs: "block", sm: "none" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
    },
  },
};

export default styles;
