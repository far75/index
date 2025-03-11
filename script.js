
    document.addEventListener("DOMContentLoaded", function () {
        // Menu Toggle
        let menuToggle = document.querySelector(".menu-toggle");
        let navLinks = document.querySelector(".nav-links");
    
        if (menuToggle && navLinks) {
            menuToggle.addEventListener("click", function () {
                navLinks.classList.toggle("active");
            });
        }
    
        // Back to Top Button
        let backToTopButton = document.querySelector(".back-to-top");
    
        if (backToTopButton) {
            window.addEventListener("scroll", function () {
                if (document.documentElement.scrollTop > 300) {
                    backToTopButton.style.display = "block";
                } else {
                    backToTopButton.style.display = "none";
                }
            });
    
            backToTopButton.addEventListener("click", function () {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }
    });
    