if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const whyUsSectionsAnimated = document.querySelectorAll(
      ".left-part .img , .left-part .content , .right-part .img , .right-part .content"
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    whyUsSectionsAnimated.forEach((element) => {
      observer.observe(element);
    });
  });
}
