if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {

    const whyUsXAnimateElements = document.querySelectorAll(
      "#why-us .left-part .img , #why-us .left-part .content , #why-us .right-part .img , #why-us .right-part .content"
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

    whyUsXAnimateElements.forEach((element) => observer.observe(element));
  });
}
