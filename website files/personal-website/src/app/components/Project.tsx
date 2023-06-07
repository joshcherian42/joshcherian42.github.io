import { Image } from '@mantine/core';
import parse from "html-react-parser";

interface ProjectInterface {
  project: {
    title: string;
    type: string;
    role: string;
    content: string;
    images: string[];
    widths: number[];
  };
}
export default function Project({ project }: ProjectInterface) {
  return (
    <div>
      <div className="my-4 border-grey border-b-2 py-4 mr-8 w-11/12">
        <div className="text-3xl font-extralight">{project.title}</div>
        <div className="text-lg font-thin">{project.type}</div>
        <div className="text-lg font-thin">
          <span className="text-base">Role:</span> {project.role}
        </div>
        <div className="text-xl my-4 font-light text-justify">
          {parse(project.content)}
        </div>
        <div className="flex items-center justify-center">
          {project.images.map((img, i) => {
            return (
              <Image
                src={img}
                alt={img}
                key={i}
                fit="contain"
                width={project.widths[i]}
                height={400}
                className="m-auto drop-shadow-md"
              ></Image>
            );
          })}
        </div>
      </div>
    </div>
  );
}
