import { Link } from "react-router-dom"

import { IconButton, SxProps } from "@mui/material"
import NavigationIcon from "@mui/icons-material/Navigation"

import * as React from "react"
import Button from "@mui/material/Button"
import Avatar from "@mui/material/Avatar"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import DialogTitle from "@mui/material/DialogTitle"
import Dialog from "@mui/material/Dialog"
import PersonIcon from "@mui/icons-material/Person"
import AddIcon from "@mui/icons-material/Add"
import Typography from "@mui/material/Typography"
import { blue } from "@mui/material/colors"
import HomeIcon from "@mui/icons-material/Home"
import ListAltIcon from "@mui/icons-material/ListAlt"
import AutoStoriesIcon from "@mui/icons-material/AutoStories"
import DashboardIcon from "@mui/icons-material/Dashboard"
import AltRouteIcon from "@mui/icons-material/AltRoute"
import CompressIcon from "@mui/icons-material/Compress"

const modules = [
  { title: "Home Page", slug: "/", icon: <HomeIcon /> },
  { title: "1. Guide Overview", slug: "/overview", icon: <ListAltIcon /> },
  {
    title: "2. The Folding Problem",
    slug: "/folding-problem",
    icon: <AutoStoriesIcon />,
  },
  {
    title: "3. Quantum Circuitry",
    slug: "/quantum-circuitry",
    icon: <DashboardIcon />,
  },
  {
    title: "4. Variational Methods",
    slug: "/variational-methods",
    icon: <AltRouteIcon />,
  },
  { title: "5. All Together", slug: "/all-together", icon: <CompressIcon /> },
]

export interface SimpleDialogProps {
  open: boolean
  onClose: () => void
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open } = props

  const handleClose = () => {
    onClose()
  }

  const handleListItemClick = (value: string) => {
    onClose()
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Please Select a Module</DialogTitle>
      <List sx={{ pt: 0 }}>
        {modules.map(({ title, slug, icon }) => (
          <ListItem disableGutters key={title}>
            <ListItemButton
              component={Link}
              to={slug}
              onClick={() => handleListItemClick(slug)}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  {icon}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}

export default function NavigationButton({ sx }: { sx?: SxProps }) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <NavigationIcon sx={{ color: "white", ...sx }} />
      </IconButton>
      <SimpleDialog open={open} onClose={handleClose} />
    </>
  )
}
