import InfoIcon from "@mui/icons-material/Info"
import BiotechIcon from "@mui/icons-material/Biotech"
import CoronavirusIcon from "@mui/icons-material/Coronavirus"
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard"
import TerminalIcon from "@mui/icons-material/Terminal"

import { WTP } from "./overviewSubModules/wtp"
import { WPF } from "./overviewSubModules/wpf"
import { WLAPF } from "./overviewSubModules/wlapf"
import { AF2 } from "./overviewSubModules/af2"
import { WAQIC } from "./overviewSubModules/waqic"
import { WQC } from "./overviewSubModules/wqc"
import Module from "../components/Module"

export default function Overview() {
  return (
    <Module
      title="Guide Overview"
      subModules={[
        {
          text: "What is This Project?",
          icon: <InfoIcon />,
          component: <WTP />,
        },
        {
          text: `What is Protein Folding?`,
          icon: <CoronavirusIcon />,
          component: <WPF />,
        },
        {
          text: "Why Learn About Protein Folding?",
          icon: <BiotechIcon />,
          component: <WLAPF />,
        },
        {
          text: "What is Quantum Computing?",
          icon: <DeveloperBoardIcon />,
          component: <WQC />,
        },
      ]}
      activities={[
        { text: "Alpha Fold 2", icon: <TerminalIcon />, component: <AF2 /> },
      ]}
    />
  )
}
