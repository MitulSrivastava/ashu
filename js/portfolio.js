const projectData = {
  // Instagram Reels Projects
  project1: {
    title: "Fashion Brand Campaign",
    description:
      "A dynamic reel showcasing the latest fashion collection with trendy transitions and engaging visuals.",
    contribution:
      "Led the entire post-production process, including color grading, motion graphics, and sound design. Created custom transitions to enhance the visual flow and maintain brand consistency.",
    software: [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "Audition",
    ],
    client: "Style Co.",
    category: "Instagram Reels",
    date: "March 2024",
    views: "1.2M",
    likes: "250K",
    shares: "45K",
    projectLink: "https://www.instagram.com/reel/xyz123",
    videoSrc: "videos/6767035-hd_720_1280_25fps.mp4",
  },
  project2: {
    title: "Food Review Series",
    description:
      "Mouth-watering food content with creative transitions and professional color grading.",
    contribution:
      "Handled video editing, color correction, and audio mixing. Created custom motion graphics for branding and implemented dynamic text animations.",
    software: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    client: "Foodie Express",
    category: "Instagram Reels",
    date: "February 2024",
    views: "800K",
    likes: "150K",
    shares: "30K",
    projectLink: "https://www.instagram.com/reel/abc456",
    videoSrc: "videos/food_review_series.mp4",
  },

  // Commercial Projects
  project3: {
    title: "Tech Product Launch",
    description:
      "High-end commercial showcasing new smartphone features with stunning visual effects and dynamic transitions.",
    contribution:
      "Managed the entire post-production workflow, created 3D product animations, and developed custom motion graphics for product features.",
    software: [
      "Adobe Premiere Pro",
      "After Effects",
      "Cinema 4D",
      "DaVinci Resolve",
    ],
    client: "TechGear Pro",
    category: "Commercial",
    date: "January 2024",
    views: "500K",
    likes: "100K",
    shares: "25K",
    projectLink: "https://youtube.com/watch?v=xyz789",
    videoSrc: "videos/product_launch_campaign.mp4",
  },
  project4: {
    title: "Restaurant Brand Commercial",
    description:
      "Cinematic commercial highlighting the ambiance and signature dishes of a high-end restaurant.",
    contribution:
      "Directed the editing process, performed advanced color grading, and created custom lower thirds and text animations.",
    software: ["Adobe Premiere Pro", "DaVinci Resolve", "After Effects"],
    client: "Gourmet Dining Co.",
    category: "Commercial",
    date: "December 2023",
    views: "300K",
    likes: "80K",
    shares: "15K",
    projectLink: "https://youtube.com/watch?v=abc123",
  },

  // YouTube Projects
  project5: {
    title: "Tech Review Series",
    description:
      "In-depth product review videos with detailed b-roll and professional transitions.",
    contribution:
      "Edited long-form content, created custom thumbnails, and developed branded intro/outro sequences.",
    software: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    client: "TechReviewer",
    category: "YouTube",
    date: "February 2024",
    views: "250K",
    likes: "45K",
    shares: "12K",
    projectLink: "https://youtube.com/watch?v=tech123",
  },
  project6: {
    title: "Travel Vlog Series",
    description:
      "Adventure travel content featuring stunning locations and storytelling.",
    contribution:
      "Handled complete post-production, including color grading, sound design, and map animations.",
    software: ["Adobe Premiere Pro", "After Effects", "Audition"],
    client: "Wanderlust Adventures",
    category: "YouTube",
    date: "January 2024",
    views: "180K",
    likes: "35K",
    shares: "8K",
    projectLink: "https://youtube.com/watch?v=travel456",
  },

  // Music Video Projects
  project7: {
    title: "Artist Music Video",
    description:
      "Creative music video featuring unique visual effects and synchronized animations.",
    contribution:
      "Led video editing, created visual effects, and developed custom transitions synchronized with the beat.",
    software: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
    client: "The Dreamers Band",
    category: "Music Video",
    date: "March 2024",
    views: "750K",
    likes: "120K",
    shares: "40K",
    projectLink: "https://youtube.com/watch?v=music789",
  },
  project8: {
    title: "Lyric Video Animation",
    description:
      "Dynamic lyric video with creative typography and motion graphics.",
    contribution:
      "Created animated typography, developed visual themes, and synchronized lyrics with music.",
    software: ["After Effects", "Illustrator", "Premiere Pro"],
    client: "Luna",
    category: "Music Video",
    date: "February 2024",
    views: "450K",
    likes: "95K",
    shares: "25K",
    projectLink: "https://youtube.com/watch?v=lyric101",
  },

  // Short Film Projects
  project9: {
    title: 'Short Film - "The Journey"',
    description:
      "Award-winning short film about personal transformation and growth.",
    contribution:
      "Managed complete post-production, including narrative editing, color grading, and sound design.",
    software: [
      "Adobe Premiere Pro",
      "DaVinci Resolve",
      "Audition",
      "After Effects",
    ],
    client: "Independent Production",
    category: "Short Film",
    date: "January 2024",
    views: "200K",
    likes: "40K",
    shares: "15K",
    projectLink: "https://vimeo.com/journey123",
  },
  project10: {
    title: 'Documentary - "Urban Stories"',
    description:
      "Documentary short exploring urban culture and community stories.",
    contribution:
      "Edited interview footage, created motion graphics for statistics, and developed the narrative structure.",
    software: ["Adobe Premiere Pro", "After Effects", "Audition"],
    client: "City Arts Foundation",
    category: "Short Film",
    date: "December 2023",
    views: "150K",
    likes: "30K",
    shares: "10K",
    projectLink: "https://vimeo.com/urban456",
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const projectModal = document.getElementById("projectModal");
  const modal = new bootstrap.Modal(projectModal);

  document.querySelectorAll(".phone-overlay").forEach((overlay, index) => {
    overlay.setAttribute("data-project", `project${index + 1}`);

    overlay.addEventListener("click", function () {
      const projectId = this.getAttribute("data-project");
      const data = projectData[projectId] || projectData["project1"];

      // Get the video source from the clicked video
      const clickedVideo =
        this.closest(".phone-inner").querySelector("video source");
      const videoSrc = clickedVideo.getAttribute("src");

      // Update modal video with the same source
      const modalVideo = document.getElementById("modalVideo");
      modalVideo.querySelector("source").src = videoSrc;
      modalVideo.load();
      modalVideo.play();

      // Update other modal content
      document.getElementById("modalTitle").textContent = data.title;
      document.getElementById("modalDescription").textContent =
        data.description;
      document.getElementById("modalContribution").textContent =
        data.contribution;
      document.getElementById("modalClient").textContent = data.client;
      document.getElementById("modalCategory").textContent = data.category;
      document.getElementById("modalDate").textContent = data.date;

      // Update software tags
      const softwareContainer = document.getElementById("modalSoftware");
      softwareContainer.innerHTML = data.software
        .map((sw) => `<span class="software-tag">${sw}</span>`)
        .join("");

      // Animate stats
      animateNumber("modalViews", data.views);
      animateNumber("modalLikes", data.likes);
      animateNumber("modalShares", data.shares);

      // Inside your click event listener, after getting the video source
      const isVertical = this.closest(".vertical") !== null;
      const modalVideoContainer = document.querySelector(
        ".modal-video-container"
      );
      modalVideoContainer.classList.toggle("vertical", isVertical);
      modalVideoContainer.classList.toggle("horizontal", !isVertical);

      // Update project link
      const projectLink = document.getElementById("modalProjectLink");
      if (data.projectLink) {
        projectLink.href = data.projectLink;
        projectLink.style.display = "inline-block";
      } else {
        projectLink.style.display = "none";
      }

      modal.show();
    });
  });
});

function animateNumber(elementId, finalValue) {
  const element = document.getElementById(elementId);
  const start = 0;
  const end = parseInt(finalValue.replace(/[^0-9]/g, ""));
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const current = Math.floor(progress * (end - start) + start);
    element.textContent = current.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = finalValue;
    }
  }

  requestAnimationFrame(update);
}
