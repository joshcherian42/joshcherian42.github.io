import { useState } from "react";

interface PublicationInterface {
  publication: {
    title: string;
    venue: string;
    location: string;
    year: string;
    keywords: string[];
    paper: string;
    abstract: string;
  };
}
export default function Project({ publication }: PublicationInterface) {
  const [showAbstract, setShowAbstract] = useState<boolean>(false);
  return (
    <div>
      <div className="my-4 border-grey border-b-2 py-4 mr-8 w-10/12">
        <div className="text-3xl font-extralight">{publication.title}</div>
        <div className="text-lg font-thin">{publication.venue}</div>
        <div className="text-lg font-thin">{publication.location}</div>
        <div className="text-lg font-thin">{publication.year}</div>
        <div className="cursor-pointer text-text-color mt-4 flex">
          <div className="mr-4"
            onClick={() => {
              setShowAbstract(!showAbstract);
            }}
          >
            Show Abstract
          </div>
          <div>
            <a href={publication.paper}>Read Paper</a>
          </div>
        </div>
        <div
          className={
            "text-lg mt-4 font-extralight transition-all duration-[5000] ease-in-out" +
            (showAbstract ? " scale-y-100 block" : " scale-y-0 hidden")
          }
        >
          {publication.abstract}
        </div>
        <div className="flex mt-4 flex-wrap gap-y-3 font-light">
          {publication.keywords.map((k) => {
            return (
              <div className="mx-2 px-4 bg-badge rounded-2xl cursor-pointer">
                {k}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}