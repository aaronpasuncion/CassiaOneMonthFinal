var navLinks = document.querySelectorAll(".letter__nav-link");
var subContainers = document.querySelectorAll(".letter__sub-container");

setTimeout(() => {
  document.querySelector(".overlay").style.display = "none";
}, 4000);

navLinks.forEach((cur) => {
  cur.addEventListener("click", (e) => {
    //
    if (!e.target.classList.contains("letter__nav-link--active")) {
      // 1. remove the current active link

      navLinks.forEach((cur) => {
        if (cur.classList.contains("letter__nav-link--active")) {
          cur.classList.remove("letter__nav-link--active");
        }
      });

      // 2. add active class to current nav link
      e.target.classList.add("letter__nav-link--active");

      // 3. find the number of the id
      let pageToDisplay = e.target.id.split("-")[2];
      console.log(document.querySelector(`#letter-${pageToDisplay}`));

      // 4. hide the currently displayed sub container
      subContainers.forEach((cur) => {
        if (cur.classList.contains("visible")) {
          // cur.style.opacity = "0";
          cur.classList.remove("visible");
          cur.classList.add("hidden");

          document
            .querySelector(`#letter-${pageToDisplay}`)
            .classList.remove("hidden");
          document
            .querySelector(`#letter-${pageToDisplay}`)
            .classList.add("visible");
        }
      });
    }
  });
});
