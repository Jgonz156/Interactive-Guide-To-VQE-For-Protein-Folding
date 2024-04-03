import Module from "../components/Module"
import DescriptionIcon from "@mui/icons-material/Description"
import { CV } from "./allTogetherSubModules/cv"
import { QPF } from "./allTogetherSubModules/qpf"
import { VFP } from "./allTogetherSubModules/vfp"

export default function AllTogether() {
  return (
    <>
      <Module
        title="Putting it All Together"
        subModules={[
          {
            text: "VQE for PF",
            icon: <DescriptionIcon />,
            component: <VFP />,
          },
          {
            text: "CVaR VQE",
            icon: <DescriptionIcon />,
            component: <CV />,
          },
        ]}
        activities={[
          {
            text: "Qiskit: Protein Folding",
            icon: <DescriptionIcon />,
            component: <QPF />,
          },
        ]}
      />
    </>
  )
}
