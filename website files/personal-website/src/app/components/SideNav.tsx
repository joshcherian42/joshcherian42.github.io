import Image from "next/image";
import { IconContext } from "react-icons/lib";
import {
  FaRegEnvelope,
  FaGraduationCap,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function SideNav() {
  return (
    <div className="h-screen w-1/5 flex flex-col items-center justify-center bg-secondary">
      <Image
        src="/images/website_profile.png"
        alt="Profile Picture"
        width={200}
        height={200}
        className="rounded-full"
      ></Image>
      <div className="flex flew-wrap gap-3 mt-4">
        <a href="mailto:jcherian92@gmail.com">
          <IconContext.Provider
            value={{ color: "rgba(0, 0, 0, 0.7)", size: "40px" }}
          >
            <FaRegEnvelope></FaRegEnvelope>
          </IconContext.Provider>
        </a>
        <a href="https://www.linkedin.com/in/jcherian42/">
          <IconContext.Provider
            value={{ color: "rgba(0, 0, 0, 0.7)", size: "40px" }}
          >
            <FaLinkedin></FaLinkedin>
          </IconContext.Provider>
        </a>
        <a href="https://github.com/jcherian42">
          <IconContext.Provider
            value={{ color: "rgba(0, 0, 0, 0.7)", size: "40px" }}
          >
            <FaGithub></FaGithub>
          </IconContext.Provider>
        </a>
        <a href="https://scholar.google.com/citations?user=SONKHmMAAAAJ&hl=en">
          <IconContext.Provider
            value={{ color: "rgba(0, 0, 0, 0.7)", size: "40px" }}
          >
            <FaGraduationCap></FaGraduationCap>
          </IconContext.Provider>
        </a>
      </div>
      {/*<div>Projects</div>*/}
      {/*<div>CV</div>*/}
    </div>
  );
}
