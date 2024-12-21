


import { Accordion,useMediaQuery, AccordionSummary, Box, Button, Container, Drawer, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Typography,useTheme } from "@mui/material";
import  { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {
  SportsEsportsOutlined,
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  Close,
} from "@mui/icons-material";
import Links from "./Links";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from '@mui/material/List';
export default function Header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  

  
  return (
    <Container   sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      mt: 5,
    }}>
      <Box>
        <Button 
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 222,
            border:"2px solid ",
            color:theme.palette.text.primary

          }}
        >
          <WindowIcon/>
          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
              mx: 1,
            }}
          >
            Categories
          </Typography>
          <Box flexGrow={1} />
           <KeyboardArrowRightOutlinedIcon/>
         
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          sx={{
            ".MuiPaper-root": {
              width: 220,
              // @ts-ignore
              bgcolor: theme.palette.favColor.main
            },
          }}
        >
          <MenuItem onClick={handleClose}>
          <ListItemIcon>
          <SportsEsportsOutlined/>
          </ListItemIcon>
          <ListItemText>Games</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
          <MenuBookOutlined/>
          </ListItemIcon>
          <ListItemText>Books</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
          <ElectricBikeOutlined/>
          </ListItemIcon>
          <ListItemText>Bikes</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
          <LaptopChromebookOutlined/>
          </ListItemIcon>
          <ListItemText>Electronics</ListItemText>
        </MenuItem>
        </Menu>
      </Box>
      {useMediaQuery("(min-width:1200px)") && (
        <Stack gap={4} direction={"row"} alignItems={"center"}>
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}
  




{useMediaQuery("(max-width:1200px)") && ( 
  <IconButton onClick={toggleDrawer("left",true)}>
         <MenuIcon/>
      </IconButton> )}
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
      > <Box
      sx={{ width: 444, mx: "auto", mt: 6, position: "relative", pt: 10 }}
    >
      <IconButton
        sx={{
          ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
          position: "absolute",
          top: 0,
          right: 10,
        }}
        onClick={toggleDrawer("left", false)}
      >
        <Close />
      </IconButton>

      {[
        { mainLink: "Home", subLinks: ["Link 1", "Link 2", "Link 3"] },
        { mainLink: "Mega menu", subLinks: ["Link 1", "Link 2", "Link 3"] },
        {
          mainLink: "full screen menu",
          subLinks: ["Link 1", "Link 2", "Link 3"],
        },
        { mainLink: "pages", subLinks: ["Link 1", "Link 2", "Link 3"] },
        {
          mainLink: "user account",
          subLinks: ["Link 1", "Link 2", "Link 3"],
        },
        {
          mainLink: "vendor account",
          subLinks: ["Link 1", "Link 2", "Link 3"],
        },
      ].map((item) => {
        return (
          <Accordion
            key={item.mainLink}
            elevation={0}
            sx={{ bgcolor: "initial" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{item.mainLink}</Typography>
            </AccordionSummary>

            <List sx={{ py: 0, my: 0 }}>
              {item.subLinks.map((link) => {
                return (
                  <ListItem key={link} sx={{ py: 0, my: 0 }}>
                    <ListItemButton>
                      <ListItemText primary={link} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Accordion>
        );
      })}
    </Box></Drawer>

    </Container>
  );
}
