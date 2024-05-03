import { Box, Link, Typography } from "@mui/material"
import { Orator } from "../../components/Orator"
import { Presenter } from "../../components/Presenter"

export function CV() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Orator>
        By this point in the guide, you are now fully equipped to venture forth
        into reading research papers for conditional value at risk optimized
        variational quantum eigen solver for protein folding! Test yourself out
        by reading these papers below!
      </Orator>
      <Orator>
        <Link
          href="https://doi.org/10.1038/s41534-021-00368-4"
          underline="hover"
        >
          Anton Robert et al., “Resource-Efficient Quantum Algorithm for Protein
          Folding,” Npj Quantum Information 7, no. 1 (February 17, 2021): 1–5,
          https://doi.org/10.1038/s41534-021-00368-4;
        </Link>
      </Orator>
      <Orator>
        <Link href="http://arxiv.org/abs/2311.14141" underline="hover">
          Jaya Vasavi P et al., “An Approach to Solve the Coarse-Grained Protein
          Folding Problem in a Quantum Computer” (arXiv, November 23, 2023),
          http://arxiv.org/abs/2311.14141;
        </Link>
      </Orator>
      <Orator>
        <Link
          href="https://doi.org/10.1007/s11128-024-04261-9"
          underline="hover"
        >
          Akshay Uttarkar and Vidya Niranjan, “A Comparative Insight into
          Peptide Folding with Quantum CVaR-VQE Algorithm, MD Simulations and
          Structural Alphabet Analysis,” Quantum Information Processing 23, no.
          2 (February 6, 2024): 48, https://doi.org/10.1007/s11128-024-04261-9
        </Link>
      </Orator>
    </Box>
  )
}
