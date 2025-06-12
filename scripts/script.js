// script.js

// DOM Elements
const scrollToTopBtn = document.getElementById("scrollToTop");
const windowControls = document.querySelectorAll(".window-buttons span");
const browserWindow = document.querySelector(".browser-window");
const mainContent = document.querySelector("main");
const darkModeToggle = document.createElement("button");

// Initialize Dark Mode
function initDarkMode() {
  // Create dark mode toggle button
  darkModeToggle.id = "darkModeToggle";
  darkModeToggle.innerHTML = "🌙"; // Moon emoji for dark mode
  darkModeToggle.title = "Toggle Dark Mode";
  
  // Add the button to the header
  const header = document.querySelector("header");
  header.appendChild(darkModeToggle);
  
  // Add styles for the dark mode toggle
  const style = document.createElement("style");
  style.textContent = `
    #darkModeToggle {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      z-index: 100;
      color: white;
      padding: 5px;
      transition: transform 0.3s ease;
    }
    
    #darkModeToggle:hover {
      transform: scale(1.2);
    }
    
    body.dark-mode {
      background-color: #222;
    }
    
    body.dark-mode .browser-window {
      background-color: #333;
      color: #fff;
      border-color: #555;
    }
    
    body.dark-mode section {
      border-color: #555;
    }
    
    body.dark-mode section h2 {
      background-color: #111;
      color: #fff;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
    }
    
    body.dark-mode section h3 {
      color: #fff;
    }
    
    body.dark-mode #aboutme {
      background-color: #800020;
    }
    
    body.dark-mode #skillsandorganizations {
      background-color: #144714;
    }
    
    body.dark-mode #education {
      background-color: #00498c;
    }
    
    body.dark-mode #work {
      background-color: #704214;
    }
    
    body.dark-mode #volunteering {
      background-color: #8B0000;
    }
    
    body.dark-mode #service {
      background-color: #006565;
    }
    
    body.dark-mode #description {
      background-color: #4B0082;
    }
    
    body.dark-mode .browser-header {
      background-color: #444;
      border-color: #555;
    }
    
    body.dark-mode nav a:not(.active) {
      color: #ddd;
    }
    
    body.dark-mode .work-dates, 
    body.dark-mode .volunteer-dates, 
    body.dark-mode .edu-year {
      border-color: #777;
      background-color: #333;
      color: #fff;
    }
    
    body.dark-mode .project-link {
      border-color: #777;
      background-color: #333;
      color: var(--accent-yellow);
    }
    
    body.dark-mode .project-link:hover {
      background-color: var(--accent-yellow);
      color: #111;
    }
    
    body.dark-mode .company, 
    body.dark-mode .organization {
      color: #fff;
    }
    
    body.dark-mode ul li {
      color: #eee;
    }
    
    body.dark-mode p {
      color: #eee;
    }
    
    body.dark-mode #darkModeToggle {
      color: white;
    }
  `;
  document.head.appendChild(style);
  
  // Check for saved preference
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    darkModeToggle.innerHTML = "☀️"; // Sun emoji for light mode
  }
  
  // Dark mode toggle event listener
  darkModeToggle.addEventListener("click", toggleDarkMode);
}

// Toggle Dark Mode
function toggleDarkMode() {
  if (document.body.classList.contains("dark-mode")) {
    // Switch to light mode
    document.body.classList.remove("dark-mode");
    darkModeToggle.innerHTML = "🌙"; // Moon emoji for dark mode
    localStorage.setItem("darkMode", "false");
  } else {
    // Switch to dark mode
    document.body.classList.add("dark-mode");
    darkModeToggle.innerHTML = "☀️"; // Sun emoji for light mode
    localStorage.setItem("darkMode", "true");
  }
}

// Window Controls Functionality
function initWindowControls() {
  windowControls.forEach(control => {
    control.addEventListener("click", function() {
      if (this.classList.contains("close")) {
        alert("This is just a simulated browser window. You can't actually close it!");
      } else if (this.classList.contains("minimize")) {
        browserWindow.style.opacity = "0.5";
        setTimeout(() => {
          browserWindow.style.opacity = "1";
        }, 1000);
      } else if (this.classList.contains("maximize")) {
        if (browserWindow.style.maxWidth === "100%") {
          browserWindow.style.maxWidth = "1200px";
        } else {
          browserWindow.style.maxWidth = "100%";
        }
      }
    });
  });
}

// Show the button when the user scrolls down
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// When the user clicks the button, scroll to the top of the document
scrollToTopBtn.addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// Initialize all functions on page load
document.addEventListener("DOMContentLoaded", function() {
  initDarkMode();
  initWindowControls();
});