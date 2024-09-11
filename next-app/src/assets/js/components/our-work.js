import $ from "jquery";

export const initCounters = () => {
  const counterElements = document.querySelectorAll(
    "#work-our .items .item .counter-group .counter"
  );

  const startCounting = ($element) => {
    const countTo = $element.attr("data-countto");
    const countDuration = parseInt($element.attr("data-duration"));

    $({ counter: 0 }).animate(
      {
        counter: countTo,
      },
      {
        duration: countDuration,
        easing: "linear",
        step: function () {
          $element.text(Math.floor(this.counter));
        },
        complete: function () {
          $element.text(this.counter);
        },
      }
    );
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const $element = $(entry.target);

      if (entry.isIntersecting) {
        startCounting($element);
      } else {
        $element.text("0");
      }
    });
  });

  counterElements.forEach((element) => observer.observe(element));
};
