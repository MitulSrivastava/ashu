// Navbar Scroll Effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Portfolio Filter
const portfolioItems = [
  {
    id: 1,
    category: "shorts",
    title: "Vertical Video 1",
    videoSrc: "videos/6767035-hd_720_1280_25fps.mp4",
    isVertical: true,
    description:
      "A dynamic short-form video showcasing product highlights with smooth transitions and engaging effects.",
    client: "ashu prajapati",
    duration: "30 seconds",
    software: "Adobe Premiere Pro",
    views: "1.2M",
  },
  {
    id: 2,
    category: "shorts",
    title: "Vertical Video 2",
    videoSrc: "videos/6767035-hd_720_1280_25fps.mp4",
    isVertical: true,
  },
  {
    id: 4,
    category: "commercials",
    title: "Commercial 1",
    videoSrc: "videos/6767035-hd_720_1280_25fps.mp4",
    isVertical: true,
  },
  {
    id: 5,
    category: "commercials",
    title: "Commercial 2",
    videoSrc: "videos/6767035-hd_720_1280_25fps.mp4",
    isVertical: true,
  },
  {
    id: 7,
    category: "youtube",
    title: "YouTube 1",
    videoSrc: "videos/6767035-hd_720_1280_25fps.mp4",
    isVertical: true,
  },
  {
    id: 8,
    category: "youtube",
    title: "YouTube 2",
    videoSrc: "videos/6767035-hd_720_1280_25fps.mp4",
    isVertical: true,
  },
];

function createProjectOverlay(item) {
  const overlay = document.createElement("div");
  overlay.className = "project-overlay";
  overlay.innerHTML = `
    <div class="project-content">
      <button class="project-close">&times;</button>
      <h3 class="project-title">${item.title}</h3>
      <div class="project-details">
        <p>${item.description}</p>
      </div>
      <div class="project-stats">
        <div class="project-stat">
          <h4>CLIENT</h4>
          <p>${item.client}</p>
        </div>
        <div class="project-stat">
          <h4>DURATION</h4>
          <p>${item.duration}</p>
        </div>
        <div class="project-stat">
          <h4>SOFTWARE</h4>
          <p>${item.software}</p>
        </div>
        <div class="project-stat">
          <h4>VIEWS</h4>
          <p>${item.views}</p>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // Add animation delay
  setTimeout(() => overlay.classList.add("active"), 10);

  // Close button functionality
  const closeBtn = overlay.querySelector(".project-close");
  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
    setTimeout(() => overlay.remove(), 300);
  });

  // Close on overlay click
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
      setTimeout(() => overlay.remove(), 300);
    }
  });
}

// Initialize portfolio
document.addEventListener("DOMContentLoaded", () => {
  // Add click handlers for project overlays
  document.querySelectorAll(".phone-overlay").forEach((overlay) => {
    overlay.addEventListener("click", () => {
      const projectIndex = overlay.getAttribute("data-project");
      createProjectOverlay(portfolioItems[projectIndex]);
    });
  });

  // Portfolio filter functionality
  const filterButtons = document.querySelectorAll(
    ".portfolio-filters button[data-filter]"
  );
  const portfolioSections = document.querySelectorAll("[data-category]");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      // Show/hide sections based on filter
      portfolioSections.forEach((section) => {
        if (section.getAttribute("data-category") === filter) {
          section.classList.remove("hidden");
        } else {
          section.classList.add("hidden");
        }
      });
    });
  });

  // Show Reels section by default
  portfolioSections.forEach((section) => {
    if (section.getAttribute("data-category") === "reels") {
      section.classList.remove("hidden");
    } else {
      section.classList.add("hidden");
    }
  });
});

// Contact Form Handler
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Add your form submission logic here
    alert("Thank you for your message! I will get back to you soon.");
    contactForm.reset();
  });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll Animation
function handleScrollAnimation() {
  const elements = document.querySelectorAll(".animate-on-scroll");
  const timeline = document.querySelector(".timeline");
  const timelineItems = document.querySelectorAll(".timeline-item");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight * 0.85) {
      element.classList.add("visible");
    }
  });

  if (timeline) {
    const timelineTop = timeline.getBoundingClientRect().top;
    if (timelineTop < window.innerHeight * 0.85) {
      timeline.classList.add("visible");
      timelineItems.forEach((item, index) => {
        item.style.setProperty("--item-index", index);
        item.classList.add("visible");
      });
    }
  }
}

// Add scroll animation class to elements
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("animate-on-scroll");
  });

  handleScrollAnimation();
  window.addEventListener("scroll", handleScrollAnimation);
});

// If you want nav links to be highlighted immediately on click,
// you can add this snippet. Note that Bootstrap's Scrollspy will
// update the active state based on scroll position as well.
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove active class from all nav links
      navLinks.forEach((item) => item.classList.remove("active"));
      // Add active class to the clicked nav link
      this.classList.add("active");
    });
  });
});
