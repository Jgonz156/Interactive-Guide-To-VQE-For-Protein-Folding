import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from "@mui/material"
import NavigationButton from "../components/NavigationButton"
import { Orator } from "../components/Orator"

export default function HomePage() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          m: 0,
          p: 5,
          gap: 4,
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
        <Orator>
          <Typography variant="h2" textAlign="center">
            Variable Quantum Eigensolver with Conditional Value at Risk
            Optimization for Protein Folding
          </Typography>
        </Orator>
        <Orator sx={{ width: "20%" }}>
          <Typography variant="h4" textAlign="center">
            Julian Gonzalez
          </Typography>
        </Orator>
        <Orator
          expanding
          title="Expand To Begin"
          titleTextAlign="center"
          sx={{ width: "45%" }}
        >
          <Typography variant="body1">
            Below is the navigation icon! It will pop up a dialog box to help
            you navigate the site!
          </Typography>
          <Box sx={{ backgroundColor: "blue", width: "5.5%" }}>
            <NavigationButton />
          </Box>
          <Typography variant="body1">
            Use it to explore the modules within this app!
          </Typography>
        </Orator>
      </Box>
    </>
  )
}
