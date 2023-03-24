import styles from "../styles/style";
import Drawer from "@mui/material/Drawer";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ResponsiveDrawer from "./SideNav";

export default function Layout({ children }) {
  return (
    <Box sx={styles.root}>
      {/* app bar */}
      {/* side drawer */}
      {/* <Drawer
        sx={styles.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: styles.drawerPaper }}
      >
        <div>
          <Typography variant="h5">Ninja Notes</Typography>
        </div>
      </Drawer> */}
      <ResponsiveDrawer />
      <Box sx={styles.layoutChildren}>{children}</Box>;
    </Box>
  );
}
