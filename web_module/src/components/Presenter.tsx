import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/material"
import Paper from "@mui/material/Paper"

export function Presenter({ sx = {}, height = "800px", link = "" }) {
  return (
    <>
      <Box sx={sx}>
        <iframe src={link} width="100%" height={height}></iframe>
      </Box>
    </>
  )
}
