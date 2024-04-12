import { Box, Link, Typography } from "@mui/material"
import { Orator } from "../../components/Orator"
import { Presenter } from "../../components/Presenter"

export function IP() {
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
            href="https://colab.research.google.com/drive/1q7ZKmw8xxqG3t3IWJXHtR3azliFoB55g?usp=sharing"
            underline="hover"
          >
            PyQUBO Colabratory Notebook Covering MVC!
          </Link>
        </Orator>
      </Box>
    </>
  )
}
