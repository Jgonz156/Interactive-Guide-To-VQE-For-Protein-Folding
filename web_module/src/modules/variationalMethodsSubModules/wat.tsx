import { Box, Link, Typography } from "@mui/material"
import { Orator } from "../../components/Orator"
import { Presenter } from "../../components/Presenter"

export function WAT() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Orator>
        In the same vein as classical machine learning, variational methods are
        hybrid techniques that use a quantum computer to perform the work of
        producing an answer for our problem where a classical computer will then
        take the result and optimize over it. The classical computer running the
        optimizer will then produce new parameters for the quantum circuit and
        have the process repeat until an acceptable answer is produced.
      </Orator>
      <Orator>
        With this comparison made, a rudimentary explanation of what is
        happening is that the portion of a classical machine learning method
        responsible for producing an answer, such as forward propagation in a
        neural net, is replaced by a quantum circuit. The process of optimizing
        over some loss function to produce new parameters to our model, such as
        the backpropagation step of adjusting weights and biases in a neural
        net, is replaced with simply setting new parameters directly on the
        quantum circuit. Then, just like a classical ML method, you iterate this
        process until you produce a sufficient answer.
      </Orator>
      <Orator>
        With this comparison and high-level overview discussed, let’s look at
        the process required to implement one of these variational methods.
      </Orator>
      <Orator>
        To start with a variational method, you need to encode your problem into
        an optimization problem. Referring to some of the methods we discussed
        for protein folding specifically, this means reformatting your problem
        into having some “search” space of answers that can either be
        iteratively adjusted between or tested directly to determine some kind
        of score. The encodings for the protein folding problem discussed in
        previous are examples of this.
      </Orator>
      <Orator>
        Since the quantum circuit is performing the work of producing a valid
        answer, your encoding plays a crucial role in determining the structure
        of the quantum circuit that will be iteratively run. The turn-based
        encoding for instance requires a specific number of qubits to represent
        the rotations happening on the amino acids that are also in turn
        represented by their own set of qubits. This means that the circuit you
        choose must have a useful structure for solving your problem encoding.
        This circuit design often takes the form of an educated guess based on
        insights from your problem, such as entangling specific qubits together
        because they represent related rotation information on the proteins we
        are folding. This educated guess on the circuit’s structure is called
        the circuit ansatz (a German word that means approach).
      </Orator>
      <Orator>
        Once the problem encoding and ansatz have been determined, we need only
        now iteratively run the typical ML process we are familiar with: measure
        the output’s values, determine its value against some cost function, and
        produce new learned parameters to put back in.
      </Orator>
    </Box>
  )
}
