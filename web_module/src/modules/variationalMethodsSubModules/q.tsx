import { Box, Link, Typography } from "@mui/material"
import { Orator } from "../../components/Orator"
import { Presenter } from "../../components/Presenter"

export function Q() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Orator>
        <Link href="https://learning.quantum.ibm.com/tutorial/variational-quantum-eigensolver#step-3-execute-using-qiskit-primitives">
          IBM Provided IPYNB On Using VQE With Qiskit!
        </Link>
      </Orator>
    </Box>
  )
}
