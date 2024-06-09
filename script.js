document.addEventListener("DOMContentLoaded", () => {
  const photos = document.querySelectorAll(".photo");

  photos.forEach((photo) => {
    photo.addEventListener("mouseenter", () => {
      const knowMoreLink = photo.querySelector(".know-more");
      if (knowMoreLink) {
        knowMoreLink.classList.add("visible");
      }
    });

    photo.addEventListener("mouseleave", () => {
      const knowMoreLink = photo.querySelector(".know-more");
      if (knowMoreLink) {
        knowMoreLink.classList.remove("visible");
      }
    });
  });
});
