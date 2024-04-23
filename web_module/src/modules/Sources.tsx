import { Box, Link } from "@mui/material"
import Module from "../components/Module"
import DescriptionIcon from "@mui/icons-material/Description"
import { Orator } from "../components/Orator"

export default function Sources() {
  return (
    <>
      <Module
        title="Site References"
        activities={[]}
        subModules={[
          {
            text: "Sources",
            icon: <DescriptionIcon />,
            component: (() => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                  }}
                >
                  <Orator>
                    <Link href="https://www.aminoacidsguide.com">
                      Amino Acids - structure, advantages, properties,
                      classification, pKa, pKb, pKx, pl
                    </Link>
                  </Orator>
                  <Orator>
                    <Link href="https://en.wikipedia.org/wiki/Levinthal%27s_paradox">
                      Levinthal's paradox - Wikipedia
                    </Link>
                  </Orator>
                  <Orator>
                    <Link href="https://arxiv.org/pdf/2103.01708.pdf">
                      PyQUBO: Python Library for Mapping Combinatorial
                      Optimization Problems to QUBO Form
                    </Link>
                  </Orator>
                  <Orator>
                    <Link href="https://arxiv.org/pdf/2012.09265.pdf">
                      Variational quantum algorithms
                    </Link>
                  </Orator>
                  <Orator>
                    <Link href="https://en.wikipedia.org/wiki/Variational_quantum_eigensolver">
                      Variational quantum eigensolver - Wikipedia
                    </Link>
                  </Orator>
                  <Orator>
                    <Link href="https://arxiv.org/pdf/2111.05176.pdf">
                      The Variational Quantum Eigensolver: a review of methods
                      and best practices
                    </Link>
                  </Orator>
                  <Orator>
                    <Link href="https://en.wikipedia.org/wiki/Hamiltonian_(quantum_mechanics)">
                      Hamiltonian (quantum mechanics) - Wikipedia
                    </Link>
                  </Orator>
                  <Orator>
                    <Link href="https://www.nature.com/articles/s43588-021-00024-z">
                      Towards practical applications in quantum computational
                      biology
                    </Link>
                  </Orator>
                  <Orator>
                    <Link href="https://www.nature.com/articles/s41586-021-03819-2">
                      Highly accurate protein structure prediction with
                      AlphaFold
                    </Link>
                  </Orator>
                  <Orator>
                    <Link href="https://www.nature.com/articles/s41592-021-01199-z">
                      Biology begins to tangle with quantum computing
                    </Link>
                  </Orator>
                  <Orator>
                    <Link href="https://www.nature.com/articles/s41534-021-00368-4">
                      Resource-efficient quantum algorithm for protein folding
                    </Link>
                  </Orator>
                  <Orator>
                    <Link href="https://arxiv.org/pdf/2311.14141.pdf">
                      An approach to solve the coarse-grained Protein folding
                      problem in a Quantum Computer
                    </Link>
                  </Orator>
                  <Orator>
                    <Link href="https://link.springer.com/article/10.1007/s11128-024-04261-9">
                      A comparative insight into peptide folding with quantum
                      CVaR-VQE algorithm, MD simulations and structural alphabet
                      analysis
                    </Link>
                  </Orator>
                  <Orator>
                    <Link href="https://sitn.hms.harvard.edu/flash/2010/issue65/">
                      Protein Folding: The Good, the Bad, and the Ugly
                    </Link>
                  </Orator>
                  <Orator>
                    <Link href="https://www.ncbi.nlm.nih.gov/books/NBK9843/">
                      Protein Folding and Processing - The Cell - NCBI Bookshelf
                    </Link>
                  </Orator>
                  <Orator>
                    <Link href="https://chem.libretexts.org/Bookshelves/Biological_Chemistry/Supplemental_Modules_(Biological_Chemistry)/Proteins/Protein_Structure/Protein_Folding">
                      Protein Folding - Chemistry LibreTexts
                    </Link>
                  </Orator>
                  <Orator>
                    <Link href="https://z-library.se/book/10948250/75b106/quantum-computing-for-everyone.html">
                      Quantum computing for everyone by Bernhardt, Chris
                    </Link>
                  </Orator>
                  <Orator>
                    <Link href="https://www.investopedia.com/terms/v/var.asp">
                      Understanding Value at Risk (VaR) and How It’s Computed
                    </Link>
                  </Orator>
                  <Orator>
                    <Link href="https://www.investopedia.com/terms/c/conditional_value_at_risk.asp">
                      Conditional Value at Risk (CVar): Definition, Uses,
                      Formula
                    </Link>
                  </Orator>
                </Box>
              )
            })(),
          },
        ]}
      />
    </>
  )
}
