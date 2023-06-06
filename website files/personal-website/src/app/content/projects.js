const projects = [

  {
    title: "Recognizing Taking Medication",
    type: "Research Project",
    role: "Machine Learning Researcher",
    content:
      "Medication nonadherence is a significant and widespread issue that has been shown to lead to worsening clinical symptoms and outcomes, increased hospitalization readmision rates, and increased mortality rates. In this work, we envision a paradigm in which smartwatches can be taught to recognize the action of taking medication and thereby inform personalized interventions designed to improve the rates of medication adherence. We specifically focused on recognizing the activity of taking medication in real-world conditions, requiring us to address the significant class imbalance issue. We proposed a novel machine learning piepline that takes in accelerometer data collected from wrist worn smartwatches and uses a modified version of the Bagging ensemble model to recognize when a user took medication over the course of an entire day. This work was published at IUI, you can read the full paper <a href=https://dl.acm.org/doi/10.1145/3397481.3450673>here</a>.",
    images: ["/images/taking_meds_data_collection.png", "/images/taking_meds_t_sne.png"],
    widths: [400, 600],

  },
  {
    title: "Ocular Data Systems",
    type: "Industry Position",
    role: "Data Science Consultant",
    content: "Psychmotor impairment through the use of alcohol and drugs can be seen involuntary movements of the eyes. As a data science consultant at Ocular Data Systems, I refined, developed, and implemented machine learning algorithms designed to classify identify individuals under the influence of drugs or alcohol from their eye movements captured from a FOVE VR headset.",
    images: [],
    widths: []
  },
  {
    title: "FossilSketch",
    type: "Research Project",
    role: "Full-Stack Developer, HCI Researcher",
    content:
      "FossilSketch is a web-based interactive learning tool for teaching micropaleontology that's been used extensively in undergraduate geology classrooms. As a developer on this project, I rebuilt the entire website in Next.js and TypeScript, modernizing and increasing the modularity of the codebase. I also assisted in facilitating classroom deployments and conducted focus groups/interviews with students and instructors.",
    images: ["/images/fossilsketch.gif"],
    widths: [600],
  },
  {
    title: "Active Living Austin",
    type: "Research Project",
    role: "Machine Learning Researcher, Full-Stack Developer",
    content:
      "This study aimed to understand how activity-friendly communities can impact the level of physical activity among residents. As a computer science researcher on this project, I developed a machine learning pipeline capable of identifying the physical activity of study participants from their accelerometer and GPS data. I also designed and developed a website that allowed the non-computer science researchers on the project to upload newly collected sensor data and obtain the classification results.",
    images: ["/images/ALA_Website_home.png"],
    widths: [400],
  },
  {
    title: "FDAnalyzer",
    type: "Class Project",
    role: "Front-End Developer",
    content:
      "Adverse Drug Events (ADEs), i.e., unintended pharmacologic effects, are a major source of concern when determining what medicine a patient needs. To aid in the detection, understanding, and prevention of ADEs, we explored how best to clean and visualize the <a href=https://open.fda.gov/data/faers>FDA Adverse Event Reporting System (FAERS)</a> dataset, a large publicly available dataset comprised of ADEs. <br /><br />We focused specifically on visualizing drug interactions, allowing users to search for drugs they are familiar with, have been perscribed, or are doing research on and see all related adverse events and the drugs involved. To visualize the data we used a <a href=https:\\www.d3-graph-gallery.com/graph/circularpacking_template.html>Circular Packing diagram</a>, where the size of the shown circles represents the number of events the drug has in common with the selected drug(s).",
    images: ["/images/FDAnalyzer.gif"],
    widths: [800],
  },
  {
    title: "Startups Visualization",
    type: "Class Project",
    role: "Front-End Developer",
    content:
      "This was a data visualization tool developed to visualize startup information from a variety of sources. You can interact with the website <a href=&quot;https://joshcherian42.github.io/startups-visualization/&quot;>here</a>.",
    images: ["/images/startupvisualization.gif"],
    widths: [800],
  },
];

export default projects;
