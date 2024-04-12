import Module from "../components/Module"
import DescriptionIcon from "@mui/icons-material/Description"
import TerminalIcon from "@mui/icons-material/Terminal"
import { CC } from "./quantumCircuitSubModules/cc"
import { E } from "./quantumCircuitSubModules/e"
import { QA } from "./quantumCircuitSubModules/qa"
import { QCS } from "./quantumCircuitSubModules/qcs"
import { S } from "./quantumCircuitSubModules/s"

export default function QuantumCircuitry() {
  return (
    <>
      <Module
        title="Introduction to Quantum Circuitry"
        subModules={[
          {
            text: "Classical Circuits",
            icon: <DescriptionIcon />,
            component: <CC />,
          },
          {
            text: `Superpositions`,
            icon: <DescriptionIcon />,
            component: <S />,
          },
          {
            text: "Entanglement",
            icon: <DescriptionIcon />,
            component: <E />,
          },
          {
            text: "Quantum Advantage",
            icon: <DescriptionIcon />,
            component: <QA />,
          },
        ]}
        activities={[
          {
            text: "Quirk: Quantum Circuit Simulator",
            icon: <TerminalIcon />,
            component: <QCS />,
          },
        ]}
      />
    </>
  )
}
