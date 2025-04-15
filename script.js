document.addEventListener("DOMContentLoaded", function () {
  const introModal = document.getElementById("introModal");
  const introButton = document.getElementById("introButton");
  const closeIntroButton = document.querySelector(".close-intro-btn");

  const skillsModal = document.getElementById("skillsModal");
  const skillsButton = document.getElementById("skillsButton");
  const closeSkillsButton = document.querySelector(".close-skills-btn");

  const projectsModal = document.getElementById("projectsModal");
  const projectsButton = document.getElementById("projectsButton");
  const projectsCloseButton = document.querySelector(".projects-close-btn");

  const contactModal = document.getElementById("contactModal");
  const contactButton = document.getElementById("contactButton");
  const closeContactBtn = document.querySelector(".close-contact-btn");

  // Hide both modals initially
  introModal.style.display = "none";
  skillsModal.style.display = "none";
  projectsModal.style.display = "none";

  // Function to open Intro modal
  function openIntro() {
    introModal.style.display = "flex";
    history.pushState({ modalOpen: "intro" }, "", "#intro");
  }

  // Function to close Intro modal
  function closeIntro() {
    if (introModal.style.display === "flex") {
      introModal.style.display = "none";
      if (window.location.hash === "#intro") {
        history.replaceState({}, "", window.location.pathname);
      }
    }
  }

  // Function to open Skills modal
  function openSkills() {
    skillsModal.style.display = "flex";
    history.pushState({ modalOpen: "skills" }, "", "#skills");
  }

  // Function to close Skills modal
  function closeSkills() {
    if (skillsModal.style.display === "flex") {
      skillsModal.style.display = "none";
      if (window.location.hash === "#skills") {
        history.replaceState({}, "", window.location.pathname);
      }
    }
  }

  // Function to open Projects modal
  function openProjects() {
    projectsModal.style.display = "flex";
    history.pushState({ modalOpen: "projects" }, "", "#projects");
  }

  // Function to close Projects modal
  function closeProjects() {
    projectsModal.style.display = "none";
    if (window.location.hash === "#projects") {
      history.replaceState({}, "", window.location.pathname);
    }
  }

  // Open Contact Modal
  function openContact() {
    contactModal.style.display = "flex";
    history.pushState({ modalOpen: "contact" }, "", "#contact");
  }

  // Close Contact Modal
  function closeContact() {
    contactModal.style.display = "none";
    if (window.location.hash === "#contact") {
      history.replaceState({}, "", window.location.pathname);
    }
  }

  // Event Listeners
  introButton.addEventListener("click", openIntro);
  closeIntroButton.addEventListener("click", closeIntro);
  skillsButton.addEventListener("click", openSkills);
  closeSkillsButton.addEventListener("click", closeSkills);
  projectsButton.addEventListener("click", openProjects);
  projectsCloseButton.addEventListener("click", closeProjects);
  contactButton.addEventListener("click", openContact);
  closeContactBtn.addEventListener("click", closeContact);

  // Close modal when clicking outside the content
  window.addEventListener("click", function (event) {
    if (event.target === introModal) closeIntro();
    if (event.target === skillsModal) closeSkills();
    if (event.target === projectsModal) closeProjects();
    if (event.target === contactModal) closeContact();
  });

  // Handle browser back button
  window.addEventListener("popstate", function () {
    if (window.location.hash === "#intro") {
      openIntro();
    } else if (window.location.hash === "#skills") {
      openSkills();
    } else if (window.location.hash === "#projects") {
      openProjects();
    } else if (window.location.hash === "#contact") {
      openContact();
    } else {
      closeIntro();
      closeSkills();
      closeProjects();
      closeContact();
    }
  });

  // Ensure modal opens if URL contains #intro or #skills (refresh case)
  if (window.location.hash === "#intro") openIntro();
  if (window.location.hash === "#skills") openSkills();
  if (window.location.hash === "#projects") openProjects();
  if (window.location.hash === "#contact") openContact();

  // Basic Form Validation for Contact Form
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent actual form submission

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("All fields are required!");
        return;
      }

      let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email!");
        return;
      }

      alert("Message sent successfully!");
      closeContact();
    });
});
