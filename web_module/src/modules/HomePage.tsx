import { IconButton, Typography } from "@mui/material"
import NavigationButton from "../components/NavigationButton"

export default function HomePage() {
  return (
    <>
      <Typography>
        Please use the following Icon on each page to navigate.
      </Typography>
      <NavigationButton />
      <Typography>
        It brings up the navigation dialog which is responsible for bringing you
        to each of the modules in this app!
      </Typography>
    </>
  )
}
