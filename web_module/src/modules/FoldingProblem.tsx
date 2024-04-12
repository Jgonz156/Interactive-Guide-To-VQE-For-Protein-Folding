import Module from "../components/Module"
import { CA } from "./foldingProblemSubModules/ca"
import { EPF } from "./foldingProblemSubModules/epf"
import { LP } from "./foldingProblemSubModules/lp"
import { QP } from "./foldingProblemSubModules/qp"
import { IP } from "./foldingProblemSubModules/ip"
import DescriptionIcon from "@mui/icons-material/Description"
import ShapeLineIcon from "@mui/icons-material/ShapeLine"
import CodeIcon from "@mui/icons-material/Code"
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart"
import TerminalIcon from "@mui/icons-material/Terminal"

export default function FoldingProblem() {
  return (
    <>
      <Module
        title="The Protein Folding Problem"
        subModules={[
          {
            text: "Levinthal's Paradox",
            icon: <DescriptionIcon />,
            component: <LP />,
          },
          {
            text: "Classical Approaches",
            icon: <ShapeLineIcon />,
            component: <CA />,
          },
          {
            text: "Encoding Protein Folding",
            icon: <CodeIcon />,
            component: <EPF />,
          },
          {
            text: "QUBO Problems",
            icon: <WaterfallChartIcon />,
            component: <QP />,
          },
        ]}
        activities={[
          {
            text: "PyQUBO",
            icon: <TerminalIcon />,
            component: <IP />,
          },
        ]}
      />
    </>
  )
}
