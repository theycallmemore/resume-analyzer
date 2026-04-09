function analyzeResume() {
  let text = document.getElementById("resume").value.toLowerCase();

  // Extended skills list
  let skillsList = [
    "html", "css", "javascript", "react", "node", "express",
    "python", "django", "flask",
    "java", "spring",
    "c", "c++",
    "mysql", "mongodb",
    "git", "github",
    "aws", "cloud",
    "machine learning", "data analysis"
  ];

  let detectedSkills = [];

  skillsList.forEach(skill => {
    if (text.includes(skill)) {
      detectedSkills.push(skill);
    }
  });

  // Score (max 100)
  let score = Math.min(detectedSkills.length * 10, 100);

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
  jobsUl.innerHTML = [];

  let jobs = new Set();

  if (text.includes("html") || text.includes("css") || text.includes("javascript")) {
    jobs.add("Frontend Developer");
  }

  if (text.includes("react") || text.includes("node")) {
    jobs.add("Full Stack Developer");
  }

  if (text.includes("python") || text.includes("machine learning")) {
    jobs.add("Data Scientist");
  }

  if (text.includes("data analysis")) {
    jobs.add("Data Analyst");
  }

  if (text.includes("java")) {
    jobs.add("Software Engineer");
  }

  if (text.includes("c") || text.includes("c++")) {
    jobs.add("System Programmer");
  }

  if (text.includes("aws") || text.includes("cloud")) {
    jobs.add("Cloud Engineer");
  }

  if (text.includes("mongodb") || text.includes("mysql")) {
    jobs.add("Database Administrator");
  }

  if (text.includes("git")) {
    jobs.add("DevOps Engineer");
  }

  // Display jobs
  jobs.forEach(job => {
    let li = document.createElement("li");
    li.innerText = job;
    jobsUl.appendChild(li);
  });
}
