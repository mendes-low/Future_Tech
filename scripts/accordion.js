document.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        content.classList.toggle("active");
    });
});
