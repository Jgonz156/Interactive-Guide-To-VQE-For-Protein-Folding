import * as React from "react"
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles"
import Box from "@mui/material/Box"
import MuiDrawer from "@mui/material/Drawer"
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import CssBaseline from "@mui/material/CssBaseline"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"

import InfoIcon from "@mui/icons-material/Info"
import BiotechIcon from "@mui/icons-material/Biotech"
import CoronavirusIcon from "@mui/icons-material/Coronavirus"
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import TerminalIcon from "@mui/icons-material/Terminal"

import { WTP } from "./overviewSubModules/wtp"
import { WPF } from "./overviewSubModules/wpf"
import { WLAPF } from "./overviewSubModules/wlapf"
import { AF2 } from "./overviewSubModules/af2"
import { WAQIC } from "./overviewSubModules/waqic"
import { WQC } from "./overviewSubModules/wqc"
import Module from "../components/Module"

export default function Overview() {
  return (
    <>
      <Module
        title="Guide Overview"
        subModules={[
          {
            text: "What is This Project?",
            icon: <InfoIcon />,
            component: <WTP />,
          },
          {
            text: `What is Protein Folding?`,
            icon: <CoronavirusIcon />,
            component: <WPF />,
          },
          {
            text: "Why Learn About Protein Folding?",
            icon: <BiotechIcon />,
            component: <WLAPF />,
          },
          {
            text: "What is Quantum Computing?",
            icon: <DeveloperBoardIcon />,
            component: <WQC />,
          },
          //{
          //  text: "Why Apply Quantum Instead of Classical?",
          //  icon: <LocalShippingIcon />,
          //  component: <WAQIC />,
          //},
        ]}
        activities={[
          { text: "Alpha Fold 2", icon: <TerminalIcon />, component: <AF2 /> },
        ]}
      />
    </>
  )
}
