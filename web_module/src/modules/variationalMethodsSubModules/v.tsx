import { Box, Link, Typography } from "@mui/material"
import { Orator } from "../../components/Orator"
import { Presenter } from "../../components/Presenter"

export function V() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Orator>
        How does all this apply to VQE specifically? Well, VQE follows the same
        format as all Variational methods as described before: encode the
        problem, represent it as a quantum circuit, run, measure, optimize,
        repeat.
      </Orator>
      <Orator>
        The core insight that VQE functions off is the variational principle
        from quantum mechanics: The expectation value of the energy of a
        Hamiltonian with respect to any quantum state will always be greater
        than or equal to the true ground state energy. A Hamiltonian is a
        mathematical description of a system’s energy. By setting up a
        Hamiltonian representation of our problem, VQE seeks to “solve” the
        energy system.
      </Orator>
      <Orator>
        To begin, encoding a problem into one that VQE is designed to solve can
        be tricky. If your problem can’t be easily represented as a Hamiltonian,
        use of VQE can become difficult. Here’s where the previous work pays
        off. If you can represent your problem in a QUBO formulation, as
        discussed before, VQE can solve it. This is because QUBO problems can be
        formulated into a special mechanical Hamiltonian whose ground state
        energy corresponds to the optimal solution to the QUBO problem. This
        special Hamiltonian can then be iteratively solved by VQE. So, in short,
        creating a QUBO formulation of your problem is a sure-fire way to use
        VQE as a solution technique!
      </Orator>
      <Orator>
        Now that our Hamiltonian is made, we want to create a circuit ansatz
        that will produce trial states to test against it. Creating an ansatz is
        not a straightforward or well understood process, however there a re
        some general guidelines to follow. The two main methods are to model
        your ansatz of the problem you are trying to solve. While this is a
        general explanation, often your problem can give you insights into what
        states your ansatz should be trying to generate and test, thus allowing
        you to narrow down the gate arrangements on your circuit. This allows
        VQE to approach a strong solution quickly and without wasting resources
        generating miscellaneous states. The second approach is instead inspired
        by the current state of modern quantum devices. Modern Quantum systems
        are often very noisy, error prone, and decohere after not many
        operations. These NISQ (Noisy Intermediate Scale Quantum) devices can’t
        run for very long or run circuits with too much complexity before their
        output becomes garbled and useless. Put another way, creating circuits
        with a great depth (many gates connected in series), complicated gates
        (quantum gates with many qubit inputs), or too many entanglements can
        strain these systems and make them reach an unusable state quicker. With
        this in mind, the second technique is to create hardware efficient
        ansatz. These circuits are often very simple and use the least error
        prone setups possible. While they aren’t great representations of the
        Hamiltonian being solved, they can be run for much longer and far more
        times, leading to a quantum system being able to produce trial states
        many more times than normal. The best approaches to circuit design often
        involve both considerations.
      </Orator>
      <Orator>
        Once your circuit has been designed, you need only set it up on a
        quantum system and run it for output. Needless to say, not everyone has
        a quantum system lying around and instead, the best way to gain access
        to one is through cloud services such as IBM’s Quantum Lab. To continue
        using IBM’s process as an example, you can write a python script using
        IBM’s Qiskit Quantum library to represent your circuit and your
        classical optimization process. Once this is done you can connect it to
        one of their Quantum systems through the same library and send it over
        for them to set up and run. You need an account with them to do all
        this, but they provide a dashboard of your job results and a way to
        easily manage your Quantum time (Running these systems is not cheap!).
        However, IBM - as of the creation of this app - does give you 10min for
        free each month to support quantum research.
      </Orator>
      <Orator>
        A fair question to ask by this point is that, given all the expenses and
        constraints of running any circuit multiple times on a modern NISQ
        system, why would VQA’s even be a good idea? Wouldn’t algorithms such as
        these run up the quantum time significantly causing great expense? This
        is a fair criticism and is one of the major reasons researchers have
        been investigating ways of optimizing VQE’s abilities. One such option
        is up next, conditional value-at-risk optimization.
      </Orator>
    </Box>
  )
}
