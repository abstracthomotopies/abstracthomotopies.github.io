document.addEventListener("DOMContentLoaded", () => {
    fetch("header.html")
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.text();
        })
        .then(data => {
            // Inject the header HTML into the placeholder
            document.getElementById("header-placeholder").innerHTML = data;
            
            // Dynamically set the active navigation link
            const currentPath = window.location.pathname.split("/").pop();
            const navLinks = document.querySelectorAll(".nav-links a");
            
            navLinks.forEach(link => {
                const linkHref = link.getAttribute("href");
                if (linkHref === currentPath || (currentPath === "" && linkHref === "index.html")) {
                    link.classList.add("active");
                }
            });
        })
        .catch(error => console.error("Error loading header:", error));
});
