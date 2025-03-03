document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active class from all tabs and content
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            // Activate clicked tab
            tab.classList.add("active");
            document.getElementById(tab.dataset.tab).classList.add("active");
        });
        const projectsData = {
    "graphic-design": [
        { image: "projects/graphic-design/project1.jpg", description: "Graphic Design Project 1" },
        { image: "projects/graphic-design/project2.jpg", description: "Graphic Design Project 2" }
    ],
    "UI-UX": [
        { image: "projects/UI-UX/project1.jpg", description: "UI/UX Project 1" },
        { image: "projects/UI-UX/project2.jpg", description: "UI/UX Project 2" }
    ],
    "branding": [
        { image: "projects/branding/project1.jpg", description: "Branding Project 1" },
        { image: "projects/branding/project2.jpg", description: "Branding Project 2" }
    ]
};

const projectGallery = document.getElementById("project-gallery");
const categoryTabs = document.querySelectorAll(".category-tab");

// Function to load projects
function loadProjects(category) {
    projectGallery.innerHTML = "";  // Clear existing projects

    projectsData[category].forEach(proj => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.innerHTML = `<img src="${proj.image}" alt="Project Image"><p>${proj.description}</p>`;
        projectGallery.appendChild(projectDiv);
    });
}

// Set default category
loadProjects("graphic-design");

// Handle category switching
categoryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelector(".category-tab.active").classList.remove("active");
        tab.classList.add("active");
        loadProjects(tab.dataset.category);
    });
});
    });
});
