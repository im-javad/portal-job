if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const whyUsXAnimateElements = document.querySelectorAll(
      "#why-us .left-part .img , #why-us .left-part .content , #why-us .right-part .img , #why-us .right-part .content"
    );

    const commentsParentElement = document.querySelector(
      "#peoples-opinions .comments-wrapper .items"
    );
    const commentsChildeElement = document.querySelectorAll(
      "#peoples-opinions .comments-wrapper .items .item"
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!entry.target.classList.contains("items")) {
            entry.target.classList.add("show");
          } else {
            commentsChildeElement.forEach((childe) => {
              childe.classList.add("show");
            });
          }
        } else {
          if (!entry.target.classList.contains("items")) {
            entry.target.classList.remove("show");
          } else {
            return;
          }
        }
      });
    });

    whyUsXAnimateElements.forEach((element) => observer.observe(element));
    observer.observe(commentsParentElement);
  });
}
