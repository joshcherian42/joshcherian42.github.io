const projects = [
  {
    title: "Active Living Austin",
    type: "Research Project",
    role: "Machine Learning Researcher, Full-Stack Developer",
    content:
      "This study aimed to understand how activity-friendly communities can impact the level of physical activity among residents. As a computer science researcher on this project, I developed a machine learning pipeline capable of identifying the physical activity of study participants from their accelerometer and GPS data. I also designed and developed a website that allowed the non-computer science researchers on the project to upload newly collected sensor data and obtain the classification results.",
    image: "/images/ALA_Website_home.png",
    width: 400
  },
  {
    title: "FDAnalyzer",
    type: "Class Project",
    role: "Front-End Developer",
    content:
      "Adverse Drug Events (ADEs), i.e., unintended pharmacologic effects, are a major source of concern when determining what medicine a patient needs. To aid in the detection, understanding, and prevention of ADEs, we explored how best to clean and visualize the FDA Adverse Event Reporting System (FAERS) dataset, a large publicly available dataset comprised of ADEs. <br /><br />We focused specifically on visualizing drug interactions, allowing users to search for drugs they are familiar with, have been perscribed, or are doing research on and see all related adverse events and the drugs involved. To visualize the data we used a <a href=&quot;https:\\www.d3-graph-gallery.com/graph/circularpacking_template.html&quot;>Circular Packing </a> diagram, where the size of the shown circles represents the number of events the drug has in common with the selected drug(s).",
    image: "/images/FDAnalyzer.gif",
    width: 800
  },
  {
    title: "Startups Visualization",
    type: "Class Project",
    role: "Front-End Developer",
    content:
      "This was a data visualization tool developed to visualize startup information from a variety of sources. You can interact with the website here: <a href=&quot;https://joshcherian42.github.io/startups-visualization/&quot;>Visualization</a>",
    image: "/images/startupvisualization.gif",
    width: 800
  },
];

export default projects;
