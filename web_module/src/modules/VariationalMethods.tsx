import Module from "../components/Module"
import DescriptionIcon from "@mui/icons-material/Description"
import { Q } from "./variationalMethodsSubModules/q"
import { CA } from "./variationalMethodsSubModules/ca"
import { C } from "./variationalMethodsSubModules/c"
import { V } from "./variationalMethodsSubModules/v"
import { WTC } from "./variationalMethodsSubModules/wtc"

export default function VariationalMethods() {
  return (
    <>
      <Module
        title="Variational Methods"
        subModules={[
          {
            text: "Which to Choose?",
            icon: <DescriptionIcon />,
            component: <WTC />,
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
