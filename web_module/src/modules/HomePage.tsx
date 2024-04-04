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
          alignItems: "center",
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
        <Box>
          <NavigationButton sx={{ width: "50vw", height: "50vh" }} />
        </Box>
        <Orator sx={{ width: "40%" }}>
          <Typography textAlign="center">
            Above is the navigation icon. Use it to navigate to any of the pages
            of this app. Click it now to begin!
          </Typography>
        </Orator>
      </Box>
    </>
  )
}
