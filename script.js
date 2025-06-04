function showTab(tab) {
    const content = document.getElementById("tab-content");
    const buttons = document.querySelectorAll(".tab-buttons button");
    
    buttons.forEach(btn => btn.classList.remove("active"));
    // buttons[0].classList.add("active");
    event.target.classList.add("active");
  
    if (tab === "skills") {
      content.innerHTML = `<ul class="custom-bullets">
  <li>Strong communication and interpersonal skills</li>
  <li>Proven ability to meet and exceed sales targets</li>
  <li>Cold calling and lead generation</li>
  <li>Negotiation and closing deals</li>
  <li>Product presentation and demo skills</li>
  <li>Time management and territory planning</li>
  <li>Team collaboration and reporting skills</li>
</ul>

`;
    } else if (tab === "experience") {
      content.innerHTML = `<ul class="custom-bullets">
  <li>Worked as Sales Executive at XYZ Solutions – generated ₹10L+ in revenue within 12 months</li>
  <li>Onboarded 50+ new clients by cold-calling and running demo presentations</li>
  <li>Maintained a 90%+ customer retention rate through relationship-building and after-sales support</li>
  <li>Collaborated with the marketing team to align sales strategy with lead campaigns</li>
  <li>Reported sales data and KPIs weekly to management using CRM tools like Zoho</li>
</ul>

`;
    } else if (tab === "education") {
      content.innerHTML = `<ul class="custom-bullets">
  <li>Completed 12th standard with 86% in Science stream from ABC Senior Secondary School</li>
  <li>Developed strong analytical and problem-solving skills through mathematics and commerce subjects</li>
  <li>Currently pursuing Bachelor of Commerce (BCom) at XYZ College, expected graduation 2027</li>
  <li>Active participant in college seminars and workshops on finance and accounting</li>
  <li>Maintaining consistent academic performance with a current GPA of 8.5/10</li>
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
  