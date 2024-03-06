import { Box, Typography } from "@mui/material"
import { Orator } from "../../components/Orator"

export function WTP() {
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
          This is an interactive web guide whose goal is to provide a light and
          exciting introduction to the world of quantum computing as it is
          applied to computational biology/bioinformatics. With pharmaceutical
          companies becoming some of the larger of prospective buyers of quantum
          systems, it would be interesting to understand why. The reason lies in
          how the many problems in the world of computational biology gain
          nontrivial speedup from quantum algorithms. The algorithm in focus for
          this web guide is a hybrid-approach (Where hybrid here refers to an
          algorithm that uses both a classical and quantum portion) called
          Variational Quantum Encoders. This technique has shown great promise
          helping the accuracy and speedup of protein folding simulations.
        </Orator>
      </Box>
    </>
  )
}
