"use client";

import { useState } from "react";
import SideNav from "./components/SideNav";
import Project from "./components/Project";
import Publication from "./components/Publication";
import projects from "./content/projects";
import publications from "./content/publications";

export default function Home() {
  const [view, setView] = useState<string>("Home");

  return (
    <main className="h-screen flex overflow-hidden">
      <SideNav />
      <div className="w-4/5 pl-6">
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
        <div className={"h-full" + (view !== "Home" ? " pl-4" : "")}>
          {view == "Home" && (
            <div
              className="text-2xl flex flex-col w-7/12 fixed"
              style={{ top: "35%" }}
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
                I&apos;ve also worked on and published in other areas including
                gesture recognition, sketch recognition, eye tracking, and
                intelligent tutoring systems.
              </div>
              <div className="font-extralight">jcherian92@gmail.com</div>
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
                return <Publication publication={p} key={p.title} />;
              })}
            </div>
          )}
          {view == "CV" && (
            <div className="mt-4 flex items-center justify-center">
              <iframe
                src="https://drive.google.com/file/d/1a8ODk1gU15M_LZBCNfH8IiCl04DraDB0/preview"
                width="1000"
                height="900"
                allow="autoplay"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
