import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";




export default function SocialHeader(){
    return(
       <>
       <div className="flex-col text-center py-40 px-60  text-sky-300">
        <Link to="https://www.linkedin.com/in/kevin-apo-era-987411190?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="px-1"><BsLinkedin/></Link>
        <Link to="https://github.com/Jade-Alpha/Portfolio" target="_blank" className="px-1"><AiOutlineGithub/></Link>
        <Link to="https://facebook.com" target="_blank" className="px-1"><BsFacebook/></Link>
       </div>
      
       </> 
    )
}