import Module from "../components/Module"
import DescriptionIcon from "@mui/icons-material/Description"
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
            icon: <DescriptionIcon />,
            component: <WAT />,
          },
          {
            text: `VQE`,
            icon: <DescriptionIcon />,
            component: <V />,
          },
          {
            text: "CVaR",
            icon: <DescriptionIcon />,
            component: <C />,
          },
          {
            text: "Circuit Ansatz",
            icon: <DescriptionIcon />,
            component: <CA />,
          },
        ]}
        activities={[
          {
            text: "Qiskit",
            icon: <DescriptionIcon />,
            component: <Q />,
          },
        ]}
      />
    </>
  )
}
