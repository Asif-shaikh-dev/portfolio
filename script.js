function showTab(tab) {
    const content = document.getElementById("tab-content");
    const buttons = document.querySelectorAll(".tab-buttons button");
    
    buttons.forEach(btn => btn.classList.remove("active"));
    // buttons[0].classList.add("active");
    event.target.classList.add("active");
  
    if (tab === "skills") {
      content.innerHTML = `<ul class="custom-bullets">
  <li>Proficient in HTML, CSS, and JavaScript (ES6+)</li>
  <li>Experienced in building RESTful APIs using Node.js and Express</li>
  <li>Hands-on with React.js for building dynamic frontends</li>
  <li>Version control with Git and GitHub</li>
  <li>Familiar with MongoDB and MySQL databases</li>

</ul>
`;
    } else if (tab === "experience") {
      content.innerHTML = `<ul class="custom-bullets">
  <li>Freelanced for 4+ clients building custom web apps</li>
  <li>Built an internal exam portal for college (login, form, ticket system)</li>
  <li>Worked on a food delivery website clone using MERN stack</li>
  <li>Interned at a local startup as a Junior Frontend Developer</li>
  <li>Contributed to open-source projects on GitHub</li>
</ul>
`;
    } else if (tab === "education") {
      content.innerHTML = `<ul class="custom-bullets">
  <li>BSc in Computer Science – XYZ University (2022–2025)</li>
  <li>Completed 6-month web development bootcamp online</li>
  <li>Intermediate Schooling from ABC Junior College, 85% (2020–2022)</li>
  <li>High School – ICSE Board, 87% aggregate (2018–2020)</li>
  <li>Completed online certification in React.js from Coursera</li>
</ul>
`;
    }
  }
  
  // Smooth scrolling (for older browsers or to override default behavior)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
  