function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', (event) => {
  const profilePic = document.querySelector('.section__pic-container img');
  const logo = document.querySelector('.logo');

  // Add animation class to logo
  logo.classList.add('animate');

  profilePic.addEventListener('click', () => {
    profilePic.classList.add('clicked');

    // Remove the class after the animation ends
    setTimeout(() => {
      profilePic.classList.remove('clicked');
    }, 500); // The duration of the clickAnimation in milliseconds
  });
});


document.addEventListener('DOMContentLoaded', (event) => {
  const profilePic = document.querySelector('.section__pic-container img');
  const logo = document.querySelector('.logo');

  // Add animation class to logo
  logo.classList.add('animate');

  profilePic.addEventListener('click', () => {
    profilePic.classList.add('clicked');

    // Remove the class after the animation ends
    setTimeout(() => {
      profilePic.classList.remove('clicked');
    }, 500); // The duration of the clickAnimation in milliseconds
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const projectBoxes = document.querySelectorAll(".details-container");

  projectBoxes.forEach(box => {
    box.addEventListener("click", function(event) {
      event.stopPropagation();

      // Close all other expanded boxes
      projectBoxes.forEach(otherBox => {
        if (otherBox !== box) {
          otherBox.classList.remove("expanded");
        }
      });

      // Toggle the current box
      box.classList.toggle("expanded");
    });
  });

  // Click outside of any box to close all expanded boxes
  document.addEventListener("click", function() {
    projectBoxes.forEach(box => {
      box.classList.remove("expanded");
    });
  });

  // Prevent event propagation when clicking inside the details container
  projectBoxes.forEach(box => {
    box.addEventListener("click", function(event) {
      event.stopPropagation();
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const arrowIcon = document.querySelector(".icon.arrow");

  arrowIcon.addEventListener("click", function() {
    document.querySelector("#experience").scrollIntoView({ behavior: "smooth" });
  });
});
