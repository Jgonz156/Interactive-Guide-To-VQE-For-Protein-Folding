import { Box, Paper, Typography } from "@mui/material"
import { ProteinChain } from "../../components/ProteinChain"
import { Padding } from "@mui/icons-material"

export function WPF() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Paper elevation={3}>
        Before attempting to dive right into algorithms and analysis of the
        protein folding problem it is best to get a brief understanding of what
        proteins are and what they do to motivate a solution. It begins in the
        humble cell nucleus which contains the DNA. Via the process of
        transcription, the RNA polymerase makes a copy of the section of DNA
        that gives the instructions for some task. The mRNA that is generated is
        allowed outside the nucleus and is used as the instructions for protein
        synthesis to occur. This synthesis occurs at an organelle called the
        ribosome, where mRNA guides the linking together of amnio acids into
        long chains. This multi-node linkage is called a polypeptide chain or as
        we know them a protein.{" "}
      </Paper>
      <ProteinChain />
      <Paper elevation={3}>
        Proteins are best understood to be molecular machines. They are
        constructed in our cells to perform varying tasks. There are only 20
        different amino acids that these chains are constructed with and yet
        even with such an innocent amount, the combinatorics of proteins make
        themselves apparent quickly. Even when restricting a polypeptide chain
        to just 7 total beads (amino acid nodes), we get 20^7 possible
        combinations. They take the appearance of a singly linked list data
        structure. These chains then fold into a three-dimensional structure
        that allows them to accomplish some task(s) within a cell.
      </Paper>
    </Box>
  )
}
