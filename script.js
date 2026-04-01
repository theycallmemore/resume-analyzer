function analyzeResume() {
  let text = document.getElementById("resume").value.toLowerCase();

  let skillsList = ["html", "css", "javascript", "python", "java", "c++"];
  let detectedSkills = [];

  skillsList.forEach(skill => {
    if (text.includes(skill)) {
      detectedSkills.push(skill);
    }
  });

  // Score calculation
  let score = detectedSkills.length * 20;

  document.getElementById("score").innerText = "Score: " + score + "/100";

  // Show skills
  let skillsUl = document.getElementById("skills");
  skillsUl.innerHTML = "";
  detectedSkills.forEach(skill => {
    let li = document.createElement("li");
    li.innerText = skill;
    skillsUl.appendChild(li);
  });

  // Job suggestions
  let jobsUl = document.getElementById("jobs");
  jobsUl.innerHTML = "";

  if (detectedSkills.includes("javascript")) {
    addJob("Web Developer");
  }
  if (detectedSkills.includes("python")) {
    addJob("Data Analyst");
  }
  if (detectedSkills.includes("java")) {
    addJob("Software Engineer");
  }

  function addJob(job) {
    let li = document.createElement("li");
    li.innerText = job;
    jobsUl.appendChild(li);
  }
}