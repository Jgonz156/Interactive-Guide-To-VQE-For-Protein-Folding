import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material"
import Paper from "@mui/material/Paper"

export function Orator({
  title = "",
  expanding = false,
  children = "",
  sx = {},
}) {
  return title ? (
    expanding ? (
      <>
        <Accordion elevation={3}>
          <AccordionSummary>
            <Typography variant="h6">{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Divider flexItem />
            <Typography variant="body1">{children}</Typography>
          </AccordionDetails>
        </Accordion>
      </>
    ) : (
      <>
        <Paper elevation={3} sx={{ padding: 2, ...sx }}>
          <Typography variant="h6">{title}</Typography>
          <Divider flexItem />
          <Typography variant="body1">{children}</Typography>
        </Paper>
      </>
    )
  ) : expanding ? (
    <>
      <Accordion elevation={3}>
        <AccordionSummary></AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">{children}</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  ) : (
    <>
      <Paper elevation={3} sx={{ padding: 2, ...sx }}>
        <Typography variant="body1">{children}</Typography>
      </Paper>
    </>
  )
}
