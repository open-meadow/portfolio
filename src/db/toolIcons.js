import { BsFillBootstrapFill } from "react-icons/bs";
import {GrNode} from "react-icons/gr";
import {FaReact, FaSass, FaLinkedin, FaYoutube, FaPython, FaJava, FaGitAlt, FaHtml5, FaCss3Alt, FaBlogger } from "react-icons/fa";
import {DiJqueryLogo, DiPostgresql, DiRubyRough} from "react-icons/di";
import {MdEmail} from "react-icons/md";
import {SiCypress, SiFfmpeg, SiRubyonrails, SiCplusplus} from "react-icons/si";
import { BsGithub } from "react-icons/bs";


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
  "Cypress": <SiCypress/>,
  "GitHub": <BsGithub/>,
  "LinkedIn": <FaLinkedin/>,
  "YouTube": <FaYoutube/>,
  "Python": <FaPython/>,
  "Java": <FaJava/>,
  "Git": <FaGitAlt/>,
  "HTML": <FaHtml5/>,
  "CSS": <FaCss3Alt/>,
  "C++": <SiCplusplus/>,
  "E-mail": <MdEmail/>,
  "Blogger": <FaBlogger/>
}

export default toolIcons;