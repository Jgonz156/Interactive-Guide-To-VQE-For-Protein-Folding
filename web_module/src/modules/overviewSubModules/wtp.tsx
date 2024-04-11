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
          Variational Quantum Eigensolver. This technique has shown great
          promise helping the accuracy and speedup of protein folding
          simulations.
        </Orator>
        <Orator>
          This guide will start by giving a brief introduction to each of the
          topics that will be covered and give justification for why to learn
          about this guide’s contents. This introduction ends with a Google
          Collaboratory notebook about AlphaFold 2, from DeepMind, to interact
          with protein folding.
        </Orator>
        <Orator>
          After, the guide will jump into learning about the protein folding
          problem itself. It discusses Levinthal’s paradox, classical folding
          approaches, the different problem encodings, and the formulation of a
          specific class of optimization problems referred to as QUBO problems.
          This portion of the guide ends with another Collab notebook on the
          QUBO solving python library, PyQUBO.
        </Orator>
        <Orator>
          Then, the guide will introduce quantum circuitry. It will cover a
          review of classical circuits, what quantum superpositions are, qubit
          entanglement, and quantum advantage. This portion ends with a small
          walkthrough on making quantum circuits with the online, browser-based
          simulator Quirk.
        </Orator>
        <Orator>
          Following that, the guide will cover quantum variational methods. By
          walking through what they are, VQE in depth, what the CVaR
          optimization is, and how to choose a circuit ansatz, the guide gives a
          good breath investigation into the topic. This section ends with
          another Collab, this time on a way to create and run quantum
          algorithms on real quantum computers using IBM’s python library
          Qiskit.
        </Orator>
        <Orator>
          The final module the guide contains is a small one that brings all the
          previous topics together to walkthrough setting up VQE with CVaR and
          implementing it for real quantum hardware using Qiskit in a final
          Collab.
        </Orator>
      </Box>
    </>
  )
}
