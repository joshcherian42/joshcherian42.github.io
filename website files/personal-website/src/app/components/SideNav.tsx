import { Image } from '@mantine/core';
import { IconContext } from "react-icons/lib";
import {
  FaRegEnvelope,
  FaGraduationCap,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

interface Props {
  view: string;
  pubFilters: string[];
  setPubFilters: Function;
}

export default function SideNav({ view, pubFilters, setPubFilters }: Props) {
  const pubTypes = [
    "Conference",
    "Journal",
    "Workshop",
    "Doctoral Consortium",
    "PhD Dissertation",
    "MS Thesis",
  ];
  const majorThemes = [
    "Machine Learning",
    "Activity Recognition",
    "Gesture Recognition",
    "Sketch Recognition",
    "Eye Tracking",
    "Intelligent Tutoring Systems",
  ];

  function updateFilterLists(keyword: string) {
    if (pubFilters.indexOf(keyword) === -1) {
      setPubFilters([...pubFilters, keyword]);
    } else {
      setPubFilters(pubFilters.filter((f) => f !== keyword));
    }
  }

  return (
    <div className="h-screen w-1/5 flex flex-col items-center justify-evenly bg-secondary">
      <div>
        <Image
          src="/images/website_profile.png"
          alt="Profile Picture"
          width={200}
          height={200}
          radius={'9999px'}
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
          <a href="https://github.com/joshcherian42">
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
      </div>
      {view === "Publications" && (
        <div className="flex flex-col mx-6 border-t-2 border-grey border-solid">
          <div className="my-2 text-lg">Publication Type</div>
          <div className="flex  flex-wrap gap-x-1 gap-y-2">
            {pubTypes.map((pub, i) => {
              return (
                <div
                  key={i}
                  className={
                    "mx-2 px-4 bg-badge rounded-2xl cursor-pointer " +
                    (pubFilters.indexOf(pub) !== -1 ? "bg-text-color" : "")
                  }
                  onClick={() => {
                    updateFilterLists(pub);
                  }}
                >
                  {pub}
                </div>
              );
            })}
          </div>

          <div className="mb-2 mt-4 text-lg">Major Theme</div>
          <div className="flex  flex-wrap gap-x-1 gap-y-2">
            {majorThemes.map((theme, i) => {
              return (
                <div
                  key={i}
                  className={
                    "mx-2 px-4 bg-badge rounded-2xl cursor-pointer " +
                    (pubFilters.indexOf(theme) !== -1 ? "bg-text-color" : "")
                  }
                  onClick={() => {
                    updateFilterLists(theme);
                  }}
                >
                  {theme}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
