// This script uses the Intersection Observer API to reveal elements on scroll.
const revealElements = document.querySelectorAll(".reveal");
const observerOptions = {
  root: null,
  threshold: 0.1,
};

const revealOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(revealOnScroll, observerOptions);
revealElements.forEach((element) => {
  observer.observe(element);
});

// Get all the necessary elements from the DOM
const projectBoxes = document.querySelectorAll(".project-box");
const modal = document.getElementById("projectModal");
const modalCloseButton = document.querySelector(".modal-close");

// Get the elements inside the modal that we need to update
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalTechStackLogos = document.getElementById("modal-tech-stack-logos");
const modalCompanyLogos = document.getElementById("modal-company-logos");
// Removed: const modalLocationText = document.getElementById("modal-location-text");
const modalDescription = document.getElementById("modal-description");

// Function to open the modal and populate it with data
const openModal = (projectData) => {
  // Populate the modal with the data from the clicked project box
  modalImg.src = projectData.imgSrc;
  modalImg.alt = projectData.title; // Set alt text for accessibility
  modalTitle.textContent = projectData.title;

  // Clear previous logos
  modalTechStackLogos.innerHTML = "";
  modalCompanyLogos.innerHTML = "";

  // Populate tech stack with logos
  if (projectData.stack) {
    const technologies = projectData.stack.split(",").map((tech) => tech.trim());
    technologies.forEach((tech) => {
      const techImg = document.createElement("img");
      techImg.src = `images/logos/${tech}`; // Assuming logos are in images/logos/
      techImg.alt = tech.replace(".png", ""); // Set alt text
      techImg.classList.add("tech-logo"); // Add a class for styling
      modalTechStackLogos.appendChild(techImg);
    });
  }

  // Populate company logos
  if (projectData.companyLogo) {
    const companyLogos = projectData.companyLogo.split(",").map((logo) => logo.trim());
    companyLogos.forEach((logo) => {
      const companyImg = document.createElement("img");
      companyImg.src = `images/logos/${logo}`; // Assuming logos are in images/logos/
      companyImg.alt = logo.replace(".png", ""); // Set alt text
      companyImg.classList.add("company-logo"); // Add a class for styling
      modalCompanyLogos.appendChild(companyImg);
    });
  }

  // Removed: modalLocationText.textContent = `Location: ${projectData.location}`;

  modalDescription.innerHTML = projectData.description;

  // Show the modal by adding the 'active' class
  modal.classList.add("active");
};

// Function to close the modal
const closeModal = () => {
  modal.classList.remove("active");
  // Clear the dynamically added images when closing the modal
  modalTechStackLogos.innerHTML = "";
  modalCompanyLogos.innerHTML = "";
};

// Add a click event listener to each project box
projectBoxes.forEach((box) => {
  box.addEventListener("click", (event) => {
    // Prevent the default link behavior
    event.preventDefault();

    // Create an object to hold the data from the 'data-*' attributes
    const projectData = {
      imgSrc: box.dataset.imgSrc,
      title: box.dataset.title,
      description: box.dataset.description,
      stack: box.dataset.stack,
      location: box.dataset.location,
      companyLogo: box.dataset.companyLogo, // Get the company logo data
    };

    // Call the openModal function with the project's data
    openModal(projectData);
  });
});

// Add a click event listener to the close button
modalCloseButton.addEventListener("click", closeModal);

// Add a click event listener to the modal overlay (the background)
// This allows the user to close the modal by clicking outside the content box
modal.addEventListener("click", (event) => {
  // If the clicked element is the modal container itself (the overlay)
  if (event.target === modal) {
    closeModal();
  }
});

// Add a keyboard event listener to close the modal with the 'Escape' key for accessibility
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});