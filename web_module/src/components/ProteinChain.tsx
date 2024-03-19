import {
  Paper,
  Box,
  TextField,
  Divider,
  Chip,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material"
import React, { useRef, useEffect } from "react"
import { Network } from "vis-network"

// Data from Amino Acid Guide website
// link: https://aminoacidsguide.com/
const AMINOACIDDATA: {
  [key: string]: {
    name: string
    tlc: string
    olc: string
    molecularWeight: number
    molecularFormula: string
  }
} = {
  A: {
    name: "Alanine",
    tlc: "Ala",
    olc: "A",
    molecularWeight: 89.1,
    molecularFormula: "C3H7NO2",
  },
  R: {
    name: "Arginine",
    tlc: "Arg",
    olc: "R",
    molecularWeight: 174.2,
    molecularFormula: "C6H14N4O2",
  },
  N: {
    name: "Asparagine",
    tlc: "Asn",
    olc: "N",
    molecularWeight: 132.12,
    molecularFormula: "C4H8N2O3",
  },
  D: {
    name: "Aspartic acid",
    tlc: "Asp",
    olc: "D",
    molecularWeight: 133.11,
    molecularFormula: "C4H7NO4",
  },
  C: {
    name: "Cysteine",
    tlc: "Cys",
    olc: "C",
    molecularWeight: 121.16,
    molecularFormula: "C3H7NO2S",
  },
  E: {
    name: "Glutamic acid",
    tlc: "Glu",
    olc: "E",
    molecularWeight: 147.13,
    molecularFormula: "C5H9NO4",
  },
  Q: {
    name: "Glutamine",
    tlc: "Gln",
    olc: "Q",
    molecularWeight: 146.15,
    molecularFormula: "C5H10N2O3",
  },
  G: {
    name: "Glycine",
    tlc: "Gly",
    olc: "G",
    molecularWeight: 75.07,
    molecularFormula: "C2H5NO2",
  },
  H: {
    name: "Histidine",
    tlc: "His",
    olc: "H",
    molecularWeight: 155.16,
    molecularFormula: "C6H9N3O2",
  },
  O: {
    name: "Hydroxyproline",
    tlc: "Hyp",
    olc: "O",
    molecularWeight: 131.13,
    molecularFormula: "C5H9NO3",
  },
  I: {
    name: "Isoleucine",
    tlc: "Ile",
    olc: "I",
    molecularWeight: 131.18,
    molecularFormula: "C6H13NO2",
  },
  L: {
    name: "Leucine",
    tlc: "Leu",
    olc: "L",
    molecularWeight: 131.18,
    molecularFormula: "C6H13NO2",
  },
  K: {
    name: "Lysine",
    tlc: "Lys",
    olc: "K",
    molecularWeight: 146.19,
    molecularFormula: "C6H14N2O2",
  },
  M: {
    name: "Methionine",
    tlc: "Met",
    olc: "M",
    molecularWeight: 149.21,
    molecularFormula: "C5H11NO2S",
  },
  F: {
    name: "Phenylalanine",
    tlc: "Phe",
    olc: "F",
    molecularWeight: 165.19,
    molecularFormula: "C9H11NO2",
  },
  P: {
    name: "Proline",
    tlc: "Pro",
    olc: "P",
    molecularWeight: 115.13,
    molecularFormula: "C5H9NO2",
  },
  U: {
    name: "Pyroglutamatic",
    tlc: "Glp",
    olc: "U",
    molecularWeight: 139.11,
    molecularFormula: "C5H7NO3",
  },
  S: {
    name: "Serine",
    tlc: "Ser",
    olc: "S",
    molecularWeight: 105.09,
    molecularFormula: "C3H7NO3",
  },
  T: {
    name: "Threonine",
    tlc: "Thr",
    olc: "T",
    molecularWeight: 119.12,
    molecularFormula: "C4H9NO3",
  },
  W: {
    name: "Tryptophan",
    tlc: "Trp",
    olc: "W",
    molecularWeight: 204.23,
    molecularFormula: "C11H12N2O2",
  },
  Y: {
    name: "Tyrosine",
    tlc: "Tyr",
    olc: "Y",
    molecularWeight: 181.19,
    molecularFormula: "C9H11NO3",
  },
  V: {
    name: "Valine",
    tlc: "Val",
    olc: "V",
    molecularWeight: 117.15,
    molecularFormula: "C5H11NO2",
  },
}

export function ProteinChain() {
  const [amino, setAminoAcidChain] = React.useState(
    "PIAQIHILEGRSDEQKETLIREVSEAISRSLDAPLTSVRVIITEMAKGHFGIGGELASK"
  )

  const [incorrectCode, setincorrectCode] = React.useState(false)

  const [moreDataLessData, setData] = React.useState(false)

  const handleSetData = () => {
    moreDataLessData ? setData(false) : setData(true)
  }

  const VALIDOLC = "ACDEFGHIKLMNOQRSTVWY".split("")

  const nodes = amino
    .split("")
    //.filter((olc) => {
    //  let alert = olc in VALIDOLC
    //  if (!alert) {
    //    setincorrectCode(true)
    //  }
    //  return alert
    // })
    .map((olc, i) =>
      moreDataLessData
        ? {
            id: i,
            label: `${AMINOACIDDATA[olc].name}
    ${AMINOACIDDATA[olc].molecularWeight} moles
    ${AMINOACIDDATA[olc].molecularFormula}`,
            shape: "diamond",
            color: "#7BE141",
          }
        : { id: i, label: olc, color: "#7BE141" }
    )

  const edges = nodes
    .map((n, i, a) =>
      i + 1 <= a.length ? { from: i, to: i + 1 } : { from: 1, to: 1 }
    )
    .filter((o) => (o ? true : false))

  const visJsRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const network =
      visJsRef.current &&
      new Network(
        visJsRef.current,
        { nodes, edges },
        {
          physics: {
            enabled: true,
            barnesHut: {
              theta: 0.5,
              gravitationalConstant: -2000,
              centralGravity: 0.3,
              springLength: 95,
              springConstant: 0.04,
              damping: 0.09,
              avoidOverlap: 0,
            },
            forceAtlas2Based: {
              theta: 0.5,
              gravitationalConstant: -50,
              centralGravity: 0.01,
              springConstant: 0.08,
              springLength: 100,
              damping: 0.4,
              avoidOverlap: 0,
            },
            repulsion: {
              centralGravity: 0.2,
              springLength: 200,
              springConstant: 0.05,
              nodeDistance: 100,
              damping: 0.09,
            },
            hierarchicalRepulsion: {
              centralGravity: 0.0,
              springLength: 100,
              springConstant: 0.01,
              nodeDistance: 120,
              damping: 0.09,
              avoidOverlap: 0,
            },
            maxVelocity: 50,
            minVelocity: 0.1,
            solver: "barnesHut",
            stabilization: {
              enabled: true,
              iterations: 1000,
              updateInterval: 100,
              onlyDynamicEdges: false,
              fit: true,
            },
            timestep: 0.5,
            adaptiveTimestep: true,
            wind: { x: 0, y: 0 },
          },
        }
      )
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
            error={true}
            id="outlined-basic"
            label="Amino Acid Sequence (One Letter Code)"
            variant="outlined"
            fullWidth
            onChange={(e) => setAminoAcidChain(e.target.value)}
            //helperText="Please only enter valid OLC's"
          />
          <ToggleButtonGroup
            value={moreDataLessData}
            exclusive
            onChange={handleSetData}
            aria-label="text alignment"
          >
            <ToggleButton value={true} aria-label="left aligned">
              MoreData
            </ToggleButton>
            <ToggleButton value={false} aria-label="left aligned">
              LessData
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Divider
          textAlign="left"
          flexItem
          sx={{ position: "relative", zIndex: 2 }}
        >
          <Chip
            label="Amino Acid Chain"
            sx={{
              position: "relative",
              zIndex: 2,
              backgroundColor: "#E0E0E0",
            }}
          />
        </Divider>
        <Box
          ref={visJsRef}
          sx={{
            height: 300,
            marginTop: "-15px",
            position: "relative",
            zIndex: 1,
          }}
        />
      </Box>
    </Paper>
  )
}
