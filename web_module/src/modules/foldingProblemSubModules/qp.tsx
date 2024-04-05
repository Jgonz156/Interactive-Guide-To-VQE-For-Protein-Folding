import { Box, Link, Typography } from "@mui/material"
import { Orator } from "../../components/Orator"
import { Presenter } from "../../components/Presenter"

export function QP() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Orator>
          <Link
            href="https://arxiv.org/ftp/arxiv/papers/1811/1811.11538.pdf"
            underline="hover"
          >
            Fantatsic Paper on Explaining QUBO's
          </Link>
        </Orator>
      </Box>
    </>
  )
}
