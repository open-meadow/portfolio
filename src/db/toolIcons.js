import { BsFillBootstrapFill } from "react-icons/bs"
import {GrNode} from "react-icons/gr"
import {FaReact, FaSass} from "react-icons/fa"
import {DiJqueryLogo, DiPostgresql, DiRubyRough} from "react-icons/di"
import {SiCypress, SiFfmpeg, SiRubyonrails} from "react-icons/si"


const toolIcons = {
  "Node.js": <GrNode/>,
  "Bootstrap CSS": <BsFillBootstrapFill/>,
  "Sass": <FaSass/>,
  "jQuery": <DiJqueryLogo/>,
  "React": <FaReact/>,
  "PostgreSQL": <DiPostgresql/>,
  "FFmpeg": <SiFfmpeg/>,
  "Ruby": <DiRubyRough/>,
  "on Rails": <SiRubyonrails/>,
  "Cypress": <SiCypress/>
}

export default toolIcons;