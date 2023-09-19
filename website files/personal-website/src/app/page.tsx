"use client";

import { useState, useEffect } from "react";
import SideNav from "./components/SideNav";
import Project from "./components/Project";
import Publication from "./components/Publication";
import projects from "./content/projects";
import publications from "./content/publications";
import { MantineProvider, Select } from "@mantine/core";

export default function Home() {
  const [view, setView] = useState<string | null>("Home");
  const [pubFilters, setPubFilters] = useState<string[]>([]);
  const [width, setWidth] = useState<number>(1000);

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleResizeWindowWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindowWidth);

    return () => {
      window.removeEventListener("resize", handleResizeWindowWidth);
    };
  }, []);

  return (
    <MantineProvider>
      <main className="h-screen flex overflow-hidden">
        <SideNav
          view={view}
          pubFilters={pubFilters}
          setPubFilters={setPubFilters}
        />
        <div className="w-4/5 pl-6">
          {width != undefined && width < 640 && (
            <Select
              placeholder="Pick one"
              value={view}
              onChange={setView}
              defaultValue={"Home"}
              className="p-2"
              data={[
                { value: "Home", label: "HOME" },
                { value: "Projects", label: "EXPERIENCE" },
                { value: "Publications", label: "PUBLICATIONS" },
                { value: "CV", label: "CV" },
              ]}
            />
          )}
          {width != undefined && width >= 640 && (
            <div className="flex h-10 text-xl font-light mr-4 items-center">
              <div
                className={
                  "pr-4 pl-4 leading-10 cursor-pointer" +
                  (view === "Home"
                    ? " border-b-2 border-text-color border-solid"
                    : "")
                }
                style={{ marginBottom: "-2px" }}
                onClick={() => {
                  setView("Home");
                }}
              >
                HOME
              </div>
              <div
                className={
                  "pr-4 pl-4 leading-10 cursor-pointer" +
                  (view === "Projects"
                    ? " border-b-2 border-text-color border-solid"
                    : "")
                }
                onClick={() => {
                  setView("Projects");
                }}
              >
                EXPERIENCE
              </div>
              <div
                className={
                  "pr-4 pl-4 leading-10 cursor-pointer" +
                  (view === "Publications"
                    ? " border-b-2 border-text-color border-solid"
                    : "")
                }
                onClick={() => {
                  setView("Publications");
                }}
              >
                PUBLICATIONS
              </div>
              <div
                className={
                  "pr-4 pl-4 leading-10 cursor-pointer" +
                  (view === "CV"
                    ? " border-b-2 border-text-color border-solid"
                    : "")
                }
                onClick={() => {
                  setView("CV");
                }}
              >
                CV
              </div>
            </div>
          )}
          <div
            className={
              "h-[90%] flex items-center" + (view !== "Home" ? " pl-4" : "")
            }
          >
            {view == "Home" && (
              <div
                className="text-2xl flex flex-col pr-5 md:pr-0 md:w-7/12 overflow-y-auto fixed md:justify-center"
                style={{ height: "inherit" }}
              >
                <div className="text-3xl">
                  Hi I&apos;m <span className="text-text-color">Josh</span>.
                </div>
                <div className="font-extralight mt-4 mb-4">
                  I just graduated with my Ph.D. in computer science from the
                  Sketch Recognition Lab at Texas A&M University where I focused
                  on{" "}
                  <span className="text-text-color font-light">
                    applied machine learning
                  </span>
                  . My main area of research was in the area of activity
                  recognition, seeking to develop novel machine learning
                  techniques designed to recognize Activities of Daily Living.
                  I&apos;ve also worked on and published in other areas
                  including gesture recognition, sketch recognition, eye
                  tracking, and intelligent tutoring systems.
                </div>
              </div>
            )}
            {view == "Projects" && (
              <div className="h-full overflow-y-scroll pb-10">
                {projects.map((p) => {
                  return <Project project={p} key={p.title} />;
                })}
              </div>
            )}
            {view == "Publications" && (
              <div className="h-full overflow-y-scroll pb-10">
                {publications.map((p) => {
                  if (
                    pubFilters.length === 0 ||
                    pubFilters.every((f) => p.keywords.indexOf(f) !== -1)
                  ) {
                    return (
                      <Publication
                        publication={p}
                        pubFilters={pubFilters}
                        setPubFilters={setPubFilters}
                        key={p.title}
                      />
                    );
                  }
                })}
              </div>
            )}
            {view == "CV" && (
              <div className="mt-4 flex items-center justify-center">
                <iframe
                  src="https://drive.google.com/file/d/1a8ODk1gU15M_LZBCNfH8IiCl04DraDB0/preview"
                  style={{
                    height: "90vh",
                    width: width != undefined && width > 1300 ? "1000px" : "75vw",
                    paddingRight: width != undefined && width > 1300 ? 0 : "3rem",
                  }}
                  allow="autoplay"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </main>
    </MantineProvider>
  );
}
