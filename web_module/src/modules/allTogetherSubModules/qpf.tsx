import { Box, Link, Typography } from "@mui/material"
import { Orator } from "../../components/Orator"
import { Presenter } from "../../components/Presenter"

export function QPF() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Orator>
        <Link
          href="https://colab.research.google.com/drive/1lbGyMrvNzWOac7KQdPGww4X9ZdT5sBhT?usp=sharing"
          underline="hover"
        >
          Collab on CVaR VQE using Quiskit!
        </Link>
      </Orator>
    </Box>
  )
}
