import { Box, Link, Typography } from "@mui/material"
import { Orator } from "../../components/Orator"
import { Presenter } from "../../components/Presenter"

export function EPF() {
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
          The previous techniques are powerful tools used to fold proteins to
          their final conformation, but what are they based on? These methods
          themselves rely on some searchable space to go through or computation
          to compute in the first place. How are we solving these problems?
        </Orator>
        <Orator>
          As many computer scientists are aware, just as important as the
          algorithm that solves a problem is the formulation of the underlying
          representation of your data in the first place. Certain problems can
          organize their data in such a way as to represent a problem more
          efficiently, which in turn means the computations made are more
          valuable toward approaching a solution. This is one of the main
          premises of choosing useful data structures as they have certain
          guarantees that lend themselves toward being paired with specific
          algorithms. To give a familiar example we find that pre-sorting data
          can be a great boon to solving problems or using hash tables for near
          constant random access data storage.
        </Orator>
        <Orator>
          In the same way, how we choose to encode the actual computations that
          make up “folding” a protein are very important. There are many
          different approaches to do this but here we will mention just four of
          them. To reiterate in a more concise manner a point from before, this
          is how we are representing our solution space so each of the classical
          methods mentioned before can reformatted to “search” or “solve” these
          problem encodings.
        </Orator>
        <Orator>
          How about computing protein folding by determining each amino acid as
          a single node and side chain that connects to other nodes with their
          own unique sidechains. With our now singly linked list of nodes and
          edges, we can keep track of rotating each node into some angle which
          then consequently repositions the location of its sidechain connecting
          the other nodes. Imaging bending a pipe cleaner at pre-designated
          spots. We get the approach of continuously bending each part of the
          pipe cleaner into a new conformation. This new bent shape the pipe
          cleaner takes on is a visual representation of a partial folded amino
          acid chain. By recalculating the interaction of the molecular forces
          at each node, or bend in the pipe cleaner, to see what new energy
          state has been reached, we can determine which rotations, or bends,
          are leading toward a lower energy state. Eventually continuing in this
          manner should lead to the ability to represent enough of a search
          space of conformations as to include the true lowest ground state.
          This encoding is referred to as the turn-based encoding of protein
          folding. Typically, this encoding refers to the previously discussed
          rotations as the “turns” of the amino acids, or residues, of the
          protein.
        </Orator>
        <Orator>
          This encoding is straightforward and intuitive as our computations
          take the literal shape of the protein folding process and allows for
          directly modeling the folding as part of the computations. However,
          this granularity means our solution space is quite large for longer
          proteins as the number of possible turns to keep track of increases.
          {/* (TRY TO MAKE MENTION OF THE COMPLEXITY OF HOW THIS SCALES O(N^4)). */}
          Another issue is that research has shown that proteins do not just use
          information from node to node to fold in this way, and instead can
          involve long range interactions from non-neighboring nodes which this
          encoding is incapable of leveraging without modification.
        </Orator>
        <Orator>
          If the intuition behind ensuring the computations directly map to the
          geometric structure of the folds, but the degrees of freedom of the
          turn-based encoding led to an intractable search space, then the
          lattice-based encoding can help. The lattice encoding sets a 3D grid
          of positions in the shape of a lattice that mimics the tetrahedral
          bonding angles found in molecules. Since there is a finite set of
          predefined positions in the lattice that the amino acid nodes can “sit
          on”, the computations for placing the nodes are significantly
          simplified, increasing speed greatly. This is because, not only are
          there far less possible conformations to worry about but, now the way
          to calculate the conformation’s energy is based strictly on the spots
          on the lattice that the nodes occupy, allowing for simpler graph-based
          algorithms to be used for the calculations. As mentioned above, the
          lattice can also be laid out in different orientations that more
          readily represent the protein being folded, which can give your
          algorithms a great “head start”.
        </Orator>
        <Orator>
          However, this encoding gains many of its benefits by making
          concessions on accuracy. If the lattice chosen does not have enough
          finite positions to place nodes on, the final ground state energy
          conformation might lie outside the space of possible conformations
          representable. As a result, the best conformation on the lattice might
          still be multiple local interactions away. This “rigidity” means the
          granularity of your point space is a crucial consideration. Equally as
          important, if your lattice’s initial layout has a poor similarity to
          the protein being folded, you could potentially make it impossible to
          get close to the true ground state conformation.
        </Orator>
        <Orator>
          By sacrificing the need to track the positions of the amino acid nodes
          we can move away from the limitations of the previous encodings. What
          about basing an encoding off the distance between each of the nodes?
          This way we can allow for long-range/non-neighboring node interactions
          whilst maintaining local interaction accuracy by modulating edge
          strength. We also regain fold modeling granularity, but instead of
          getting the fold via the positions of the nodes, we can determine it
          from just the inter-node edge distances.
        </Orator>
        <Orator>
          This intuition describes the logic behind the distance-based encoding.
          Altering these distances by pulling, and pushing, nodes toward, and
          away, from each other, we can find the ground state conformation.
          While this may seem to return to the same large search space issue as
          the turn-based encoding, efficient geometric distance algorithms can
          be used to improve the method of testing node distances.
        </Orator>
        <Orator>
          With this said the distance-based encoding also has its own drawbacks.
          Understanding how to determine the strength of non-neighboring
          interactions is very difficult and even if you could this encoding
          makes it tricky to represent more “positional” node interactions like
          hydrogen bonding and the subsequent hydrophobic collapse.
        </Orator>
        {/* <Orator>(Talk about contact-based encoding)</Orator> */}
      </Box>
    </>
  )
}
