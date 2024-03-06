import { Link } from "react-router-dom"

import { IconButton } from "@mui/material"
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

const modules = [
  { title: "AllTogether", slug: "/all-together" },
  { title: "FoldingProblem", slug: "/folding-problem" },
  { title: "HomePage", slug: "/" },
  { title: "Overview", slug: "/overview" },
  { title: "QuantumCircuitry", slug: "/quantum-circuitry" },
  { title: "VariationalMethods", slug: "/variational-methods" },
]

export interface SimpleDialogProps {
  open: boolean
  selectedValue: string
  onClose: (value: string) => void
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props

  const handleClose = () => {
    onClose(selectedValue)
  }

  const handleListItemClick = (value: string) => {
    onClose(value)
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Please Select a Module</DialogTitle>
      <List sx={{ pt: 0 }}>
        {modules.map(({ title, slug }) => (
          <ListItem disableGutters key={title}>
            <ListItemButton
              component={Link}
              to={slug}
              onClick={() => handleListItemClick(slug)}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
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

export default function NavigationButton() {
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState(modules[1])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = (value: string) => {
    setOpen(false)
    console.log(value)
    setSelectedValue(value)
  }

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <NavigationIcon />
      </IconButton>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  )
}
