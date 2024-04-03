import { Box, Link, Typography } from "@mui/material"
import { Orator } from "../../components/Orator"
import { Presenter } from "../../components/Presenter"

export function LP() {
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
          To tackle the problem of representing protein folding as a set of
          computations, we must break down the problem into some representation
          that we have an efficient algorithm for computing. In the case of
          using a search approach to the problem, we could simply define our
          search space to be every possible conformation. We could then save the
          conformation of lowest energy state as we go and then return the best
          conformation!
        </Orator>
        <Orator>
          This approach sounds great until we try to represent that search
          space. A chain of 100 amino acids has somewhere around 10^47 possible
          conformations to check through. This is clearly intractable to search
          even with an extremely powerful computer.
        </Orator>
        <Orator>
          What’s unique about this rather intuitive problem formulation is that
          it reveals something quite interesting. In the real world, it takes no
          more than a few seconds for a protein to find its lowest conformation.
          This would bring us to the absurd conclusion that if a protein was
          following our search approach it would be able to calculate and decide
          between every single one of its conformations in nearly an instant.
        </Orator>
        <Orator>
          This seemingly paradoxical conclusion on the absurd computation
          ability of a small chain of molecules is called Levinthal’s Paradox.
          This thought experiment by Cyrus Levinthal in 1969 may seem odd, but
          it led to a desire to search for a different intuition for simulating
          how proteins fold. If search is infeasible then what could possibly be
          next? Levinthal himself suggested that by thinking of protein folding
          as a series of small-local interactions along the peptide chain, that
          it would seem feasible that the protein is moving quickly through a
          series of incomplete intermediate states until these local
          interactions end in the form of reaching the lowest ground state
          energy conformation.
        </Orator>
        <Orator>
          With this new formulation in mind, we could imagine that if each
          molecule is exerting some kind of force across the chain of amino
          acids, by simulating each of these small movements we could slowly but
          surely fold the proteins given to us.
        </Orator>
        <Orator>
          To imagine this problem in another way, since proteins are not folded
          in a vacuum, there could also be an intuition to imagine the problem
          as our string of acids being interacted on by the environment around
          it. Like many small exertions from the surrounding area onto the chain
          which would naturally shape it into its final conformation.
        </Orator>
        <Orator>
          If we imagine a series of parallel operations acting to create small
          movements in local regions of the protein, we can avoid our
          computational approach of choice from running into Levinthal’s
          Paradox.
        </Orator>
      </Box>
    </>
  )
}
