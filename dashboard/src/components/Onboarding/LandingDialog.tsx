import ClosableDialogTitle from "../Skills/ClosableDialogTitle";
import { storage } from "@nucleoidjs/webstorage";
import { useState } from "react";

import {
  Avatar,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

const LandingDialog = () => {
  const [open, setOpen] = useState(true);

  const NumberOne = "/media/number-one.png";
  const NumberTwo = "/media/number-two.png";
  const NumberThree = "/media/number-three.png";
  const CodeImage = "/media/image.png";

  const handleClose = () => {
    storage.set("landingLevel", 1);
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth={"sm"}
      onClose={(event: React.KeyboardEvent) =>
        event.key === "Escape" ? handleClose() : null
      }
    >
      <ClosableDialogTitle handleClose={handleClose} />
      <DialogContent>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ mt: 1 }}>
            Greycollar AI Agent
          </Typography>
          <Box sx={{ mt: 3 }}>
            GreyCollar is a Supervised AI Agent for your organization
          </Box>
        </Box>

        <Divider sx={{ mt: 3 }} />
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <h2>How it works?</h2>
        </Box>
        <Box sx={styles.listRoot}>
          <List sx={styles.list}>
            <ListItem>
              <ListItemAvatar>
                <Avatar src={NumberOne}></Avatar>
              </ListItemAvatar>
              <ListItemText primary="Create your team" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar src={NumberTwo}></Avatar>
              </ListItemAvatar>
              <ListItemText primary="Build your AI Colleague" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar src={NumberThree}></Avatar>
              </ListItemAvatar>
              <ListItemText primary="Supervise them!" />
            </ListItem>
          </List>
        </Box>
        <Divider sx={{ mt: 3, mb: 3 }} />

        <Box sx={styles.footer}>
          <img
            src={CodeImage}
            alt={"Code"}
            width={100}
            style={{ marginBottom: "1rem" }}
          />
          <br />
          Happy Supervising!
        </Box>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

const styles = {
  dialog: {
    bgcolor: "custom.darkDialogBg",
    zIndex: 2147483647,
  },
  welcome: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    pb: 1,
  },
  content: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  howItWorks: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  listRoot: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    textAlign: "center",
  },
};

export default LandingDialog;
