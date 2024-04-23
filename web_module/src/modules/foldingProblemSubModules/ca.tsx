import { Box, Link, Typography } from "@mui/material"
import { Orator } from "../../components/Orator"
import { Presenter } from "../../components/Presenter"

export function CA() {
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
          Do all our previous insights hold a valuable approach within for
          solving the protein folding problem? The short answer is yes, but what
          do they lead to?
        </Orator>
        <Orator>
          Given the naïve insight of attempting to directly search the
          conformation search space we get Conformational Search Algorithm. As
          the name and previous insight suggest, these approaches attempt to
          optimally search the conformations for a solution. While Levinthal’s
          Paradox flatly denies this approach as broadly applicable for even
          moderately sized proteins, with a sufficiently small protein and a
          sufficiently powerful device, the search space could be exhausted.
          This approach does entail a very important advantage that many of the
          other approaches have difficulty with, being able to definitively find
          the best energy state. Some methods for making this approach
          stomach-able are dead-end elimination and fragment assembly.
        </Orator>
        <Orator>
          Dead-end elimination is a form of search space pruning that takes
          insights from molecular biology. Given that molecules have bond angle
          restrictions from the atomic forces that make them up, there are a
          discrete number of potential bonding positions for an amino acid to
          bond with another. Within the vast search space of conformations lies
          many “illegal” or impossible conformations that violate these bonding
          constraints. By outlining your search space conformations along
          related bond orientations, we can prune these impossible branches of
          our search space. By nature of removing these orientations on a
          bond-by-bond basis, it also has the advantage of pruning many local
          minima, making it better at guaranteeing that it finds the global
          minima or true ground state conformation.
        </Orator>
        <Orator>
          Fragment assembly in an approach that works in “the other way” so to
          speak. Rather than pruning the search space, we can assemble known
          good partial folds together to potentially find the true conformation.
          Put another way, since molecular forces act the same for the same
          molecules, similar peptide chains ideally fold in nearly the same way
          on the local scale. Only when introduced to many other parts of the
          chain do they begin to form more emergent behavior. Thus, by taking a
          large library of known folds for small strands, we can assemble them
          with other known good partial folds to get closer to the true fold
          faster for large proteins. This method also has the unique advantage
          of being able to directly incorporate insights from “wet” testing,
          where observing large proteins fold experimentally can give insights
          on how to tweak your “building block” library.
        </Orator>
        <Orator>
          Both these ideas have limitations, however. Dead end elimination only
          works as well as its ability to identify dead ends early. Without
          pruning the search space enough, you still rest in a nearly
          intractable amount of time to find the final conformation. Fragment
          assembly is also only as good as the amount known good partial folds
          you have and their accuracy. If you do not have a large enough library
          of folds and the number of proteins, you can “assemble” drops to
          insignificant levels and if the folds you do have are not as accurate
          as they could be, and you end up still having to check more
          conformations. What about the other insights we had, such as directly
          focusing on those local interactions rather than huge Levinthal search
          spaces?
        </Orator>
        <Orator>
          Physics simulations has been around for awhile and are used to
          simulate and predict future results, why would such an approach not
          work here? This is the approach that Molecular Dynamics simulations
          take. By using extensive physics libraries to simulate the movement of
          atoms, if it holds that the molecular forces are where proteins
          spontaneously fold from, then simulating all these forces directly
          should produce the same results. This provides a method for folding
          proteins that can more easily guarantee that it will function on
          unknown proteins. To expand on this, fragment assembly has exactly
          this issue, where it trades the ability to accurately fold unknown
          proteins for known ones. Ideally, MD simulations are not subject to
          such a limitation and instead rely on our knowledge on molecular
          forces.
        </Orator>
        {/* <Orator>(Talk about Force Fields methods)</Orator> */}
        <Orator>
          This approach, however, is computationally expensive for other reasons
          than search spaces. Many small forces acting many times per second
          creates a different kind of issue where we need to ask ourselves what
          fidelity do these calculations need to be performed before losing
          accuracy on the larger scale? There is also the issue that it is not
          necessarily known ahead of time how long to run the simulation for
          before it begins to “calm down” when it finds a lower energy state.
          Due to the deep look into the local scale, there is also an issue of
          getting caught in local minima energy states that don’t allow for the
          full conformation to be realized.
        </Orator>
        {/*<Orator>(Talk about Monte Carlo Methods)</Orator>
        <Orator>(Talk about Statical Mechanics models)</Orator>
      <Orator>(Mention the best classical methods work in tandem)</Orator>*/}
      </Box>
    </>
  )
}
