import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  SxProps,
  Typography,
} from "@mui/material"
import Paper from "@mui/material/Paper"
import { ReactNode } from "react"

export function Orator({
  title = "",
  expanding = false,
  children,
  sx = {},
  titleTextAlign = "left",
}: {
  title?: string
  expanding?: boolean
  children?: ReactNode
  sx?: SxProps
  titleTextAlign?: "left" | "right" | "center"
}) {
  return title ? (
    expanding ? (
      <>
        <Accordion elevation={3} sx={{ ...sx }}>
          <AccordionSummary
            sx={{ display: "flex", justifyContent: titleTextAlign }}
          >
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
      <Accordion elevation={3} sx={{ ...sx }}>
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
