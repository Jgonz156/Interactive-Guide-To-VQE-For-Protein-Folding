import { Height } from "@mui/icons-material"
import { Box, Chip, Divider, Paper, TextField, Typography } from "@mui/material"
import React from "react"

import { useRef, useEffect } from "react"
import { DataSet } from "vis-data"
import { Network } from "vis-network"

const ProteinChain = () => {
  const [amino, setAminoAcidChain] = React.useState(
    "PIAQIHILEGRSDEQKETLIREVSEAISRSLDAPLTSVRVIITEMAKGHFGIGGELASK"
  )

  const nodes = [
    { id: 1, label: "Node 1" },
    { id: 2, label: "Node 2" },
    { id: 3, label: "Node 3" },
    { id: 4, label: "Node 4" },
    { id: 5, label: "Node 5" },
    { id: 6, label: "Node 5" },
    { id: 7, label: "Node 5" },
    { id: 8, label: "Node 5" },
  ]

  const edges = [
    { from: 1, to: 1 },
    { from: 2, to: 1 },
    { from: 3, to: 1 },
    { from: 4, to: 1 },
    { from: 5, to: 1 },
    { from: 6, to: 1 },
    { from: 7, to: 1 },
    { from: 8, to: 1 },
  ]

  const visJsRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const network =
      visJsRef.current && new Network(visJsRef.current, { nodes, edges }, {})
    // Use `network` here to configure events, etc
  }, [visJsRef, nodes, edges])

  return (
    <Paper elevation={2}>
      <Box
        sx={{
          //display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ padding: 2, display: "flex" }}>
          <TextField
            id="outlined-basic"
            label="Amino Acid Sequence (One Letter Code)"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Divider textAlign="left" flexItem sx={{}}>
          <Chip label="Amino Acid Chain" />
        </Divider>
        <Box ref={visJsRef} sx={{ height: 300 }} />
      </Box>
    </Paper>
  )
}

export function WPF() {
  return (
    <>
      <Typography>WPF</Typography>
      <ProteinChain />
    </>
  )
}
