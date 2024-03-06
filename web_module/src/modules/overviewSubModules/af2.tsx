import { Box, Typography } from "@mui/material"
import { Orator } from "../../components/Orator"
import { Presenter } from "../../components/Presenter"

export function AF2() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Orator>AF2</Orator>
        <Presenter link="https://algassert.com/quirk" />
      </Box>
    </>
  )
}
