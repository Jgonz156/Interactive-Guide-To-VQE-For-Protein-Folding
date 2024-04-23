import Module from "../components/Module"
import EmojiNatureIcon from "@mui/icons-material/EmojiNature"
import AirlineSeatFlatAngledIcon from "@mui/icons-material/AirlineSeatFlatAngled"
import TerminalIcon from "@mui/icons-material/Terminal"
import { CV } from "./allTogetherSubModules/cv"
import { QPF } from "./allTogetherSubModules/qpf"
import { VFP } from "./allTogetherSubModules/vfp"

export default function AllTogether() {
  return (
    <Module
      title="Putting it All Together"
      subModules={[
        {
          text: "VQE for PF",
          icon: <EmojiNatureIcon />,
          component: <VFP />,
        },
        {
          text: "CVaR VQE",
          icon: <AirlineSeatFlatAngledIcon />,
          component: <CV />,
        },
      ]}
      activities={[
        {
          text: "Qiskit: Protein Folding",
          icon: <TerminalIcon />,
          component: <QPF />,
        },
      ]}
    />
  )
}
