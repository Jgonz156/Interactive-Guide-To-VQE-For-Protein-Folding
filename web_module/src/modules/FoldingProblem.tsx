import Module from "../components/Module"
import { CA } from "./foldingProblemSubModules/ca"
import { EPF } from "./foldingProblemSubModules/epf"
import { LP } from "./foldingProblemSubModules/lp"
import { QP } from "./foldingProblemSubModules/qp"
import { IP } from "./foldingProblemSubModules/ip"
import DescriptionIcon from "@mui/icons-material/Description"

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
            icon: <DescriptionIcon />,
            component: <CA />,
          },
          {
            text: "Encoding Protein Folding",
            icon: <DescriptionIcon />,
            component: <EPF />,
          },
          {
            text: "QUBO Problems",
            icon: <DescriptionIcon />,
            component: <QP />,
          },
        ]}
        activities={[
          {
            text: "PyQUBO",
            icon: <DescriptionIcon />,
            component: <IP />,
          },
        ]}
      />
    </>
  )
}
