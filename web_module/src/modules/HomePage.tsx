import { Box, Button, CssBaseline, Grid, Typography } from "@mui/material"
import NavigationButton from "../components/NavigationButton"

export default function HomePage() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          flexGrow: 1,
          m: 0,
          p: 0,
          width: "100vw",
          minHeight: "100vh",
          //position: "sticky",
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/VQE-site-background.jpg"
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <NavigationButton />
      </Box>
    </>
  )
}
