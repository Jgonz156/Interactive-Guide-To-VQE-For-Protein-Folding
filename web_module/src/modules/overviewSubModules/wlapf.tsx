import { Box, Typography } from "@mui/material"
import { Orator } from "../../components/Orator"

export function WLAPF() {
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
          Since proteins provide such integral functionality within a cell,
          understanding why they interact the way they do is key to
          understanding, and simulating, their functionality within our bodies.
          This understanding leads to more accurate cell simulation which is a
          great boon for drug discovery research. Drug discovery research relies
          on understanding how the pharmaceuticals we put in our body will
          interact to provide a beneficial outcome. Understand the interactions
          incorrectly, and you could make a drug that is useless, or only
          marginally helpful, in the best case and potentially harmful in the
          worst one. Since a protein’s functionality comes directly because of
          its shape, accurately predicting a protein’s final conformation is
          equivalent to understanding its purpose in a cell. Additionally, many
          proteins go through additional modifications after reaching their
          final conformation. These modifications include cleavage of beads that
          were only necessary for the initial folding and even the linkage of
          carbohydrates and lipids. Thus, it stands that imagining or simulating
          a protein in the incorrect final conformation could make these further
          modification interactions seem nonsensical or even impossible.
        </Orator>
        <Orator>
          However, while we seek the correct final conformations, it would be
          incorrect to assume that the body is perfect every time it seeks the
          same. Unfortunately, it is very possible for a protein chain to reach
          an incorrect final fold state. These protein misfolds lead to a now
          jumbled mess of amino acids that lead to potentially harmful
          interactions. Some may just be useless for their intended
          functionality, but they can also get in the way of other interactions,
          damage cell structures, or even lead to a shortage of the necessary
          conformation required for some vital tasks like breaking down toxins.
          As a necessary extension of these proteins not providing useful work
          toward their prospective tasks, larger issues in the body arise. While
          research is still ongoing to figure out just what kinds of diseases
          can come about because of chronic misfolding, new studies have shown
          that Alzheimer’s, Cystic fibrosis, and Parkinson’s all have either
          some link or are the direct result of misfolding.
        </Orator>
        <Orator>
          This new link between misfolding and larger diseases provides insight
          into new treatment techniques for what before seemed like untreatable
          genetic conditions. As an extension of drug development, new research
          into making pharmaceuticals that stabilize, or help provide a more
          suitable environment for proteins to fold in, could be potential
          avenues for creating therapeutic treatments for these genetic
          conditions.
        </Orator>
      </Box>
    </>
  )
}
