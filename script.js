const projects = [
    {
        title: "Restaurant Website",
        description: "Modern responsive restaurant landing page.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
        link: "#"
    },

    {
        title: "Construction Company",
        description: "Business website for construction services.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
        link: "#"
    },

    {
        title: "Creative Portfolio",
        description: "Minimal personal portfolio website.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
        link: "#"
    },

    {
        title: "Coffee Shop",
        description: "Landing page for cafe and coffee brands.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
        link: "#"
    }
];

const portfolioGrid = document.getElementById("portfolioGrid");

projects.forEach(project => {
    portfolioGrid.innerHTML += `
    <div class="project">
      <img src="${project.image}" alt="${project.title}">

      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}">View Project</a>
      </div>
    </div>
  `;
});