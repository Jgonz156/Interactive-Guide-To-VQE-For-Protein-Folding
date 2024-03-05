import { Paper, Box, TextField, Divider, Chip } from "@mui/material"
import React, { useRef, useEffect } from "react"
import { Network } from "vis-network"

export function ProteinChain() {
  const [amino, setAminoAcidChain] = React.useState(
    "PIAQIHILEGRSDEQKETLIREVSEAISRSLDAPLTSVRVIITEMAKGHFGIGGELASK"
  )

  const nodes = amino.split("").map((olc, i) => ({ id: i, label: olc }))

  const edges = nodes
    .map((n, i, a) =>
      i + 1 <= a.length ? { from: i, to: i + 1 } : { from: 1, to: 1 }
    )
    .filter((o) => (o ? true : false))

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
            onChange={(e) => setAminoAcidChain(e.target.value)}
          />
        </Box>
        <Divider textAlign="left" flexItem sx={{}}>
          <Chip label="Amino Acid Chain" />
        </Divider>
        <Box ref={visJsRef} sx={{ height: 300, marginTop: "-15px" }} />
      </Box>
    </Paper>
  )
}
