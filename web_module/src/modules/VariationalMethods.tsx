import Module from "../components/Module"
import QuestionMarkIcon from "@mui/icons-material/QuestionMark"
import ScienceIcon from "@mui/icons-material/Science"
import NetworkPingIcon from "@mui/icons-material/NetworkPing"
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard"
import TerminalIcon from "@mui/icons-material/Terminal"
import { Q } from "./variationalMethodsSubModules/q"
import { CA } from "./variationalMethodsSubModules/ca"
import { C } from "./variationalMethodsSubModules/c"
import { V } from "./variationalMethodsSubModules/v"
import { WAT } from "./variationalMethodsSubModules/wat"

export default function VariationalMethods() {
  return (
    <>
      <Module
        title="Variational Methods"
        subModules={[
          {
            text: "What are they?",
            icon: <QuestionMarkIcon />,
            component: <WAT />,
          },
          {
            text: `VQE`,
            icon: <ScienceIcon />,
            component: <V />,
          },
          {
            text: "CVaR",
            icon: <NetworkPingIcon />,
            component: <C />,
          },
          {
            text: "Circuit Ansatz",
            icon: <DeveloperBoardIcon />,
            component: <CA />,
          },
        ]}
        activities={[
          {
            text: "Qiskit",
            icon: <TerminalIcon />,
            component: <Q />,
          },
        ]}
      />
    </>
  )
}
