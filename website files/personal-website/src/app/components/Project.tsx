import Image from "next/image";
import parse from 'html-react-parser';

interface ProjectInterface {
  project: {
    title: string;
    type: string;
    role: string;
    content: string;
    image: string;
    width: number
  };
}
export default function Project({ project }: ProjectInterface) {
  return (
    <div>
      <div className="my-4 border-grey border-b-2 py-4 mr-8 w-10/12">
        <div className="text-3xl font-extralight">{project.title}</div>
        <div className="text-lg font-thin">{project.type}</div>
        <div className="text-lg font-thin">
          <span className="text-base">Role:</span> {project.role}
        </div>
        <div className="text-xl mt-4 font-light">
          {parse(project.content)}
        </div>
        <Image
          src={project.image}
          alt={project.title + "_visualization"}
          width={project.width}
          height={400}
          className="m-auto mt-4 drop-shadow-md"
        ></Image>
      </div>
    </div>
  );
}
