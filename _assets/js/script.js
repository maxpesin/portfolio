//-- SPINNER ------------------------------
var overlay = document.getElementById("preloader-overlay");
// var solar = document.getElementById('solar');

window.addEventListener('load', function(){
    overlay.style.display = 'none';
    // solar.style.display ="block";
});

document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.getElementById('header');
      const sections = document.querySelectorAll('.section');
      let currentIndex = 0; // Start on the first section
      let isScrolling = false; // Prevent simultaneous scrolls

      const scrollToSection = (index) => {
        if (index >= 0 && index < sections.length) {
          isScrolling = true;
          sections[index].scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => (isScrolling = false), 800); // Adjust timing based on transition
        }
      };

      window.addEventListener('wheel', (event) => {
        event.preventDefault(); // Prevent default scroll
        const scrollY = window.scrollY;
        console.log("🚀 ~ window.addEventListener ~ scrollY:", scrollY)
        console.log("🚀 ~ window.addEventListener ~ heroSection.offsetHeight:", heroSection.offsetHeight)

        if (isScrolling) return; // Prevent interrupting current scroll
        if (scrollY < heroSection.offsetHeight && event.deltaY > 0) {
          // Scroll down
          if (currentIndex < sections.length - 1) {
            currentIndex++;
            scrollToSection(currentIndex);
          }
        } else if (scrollY <= heroSection.offsetHeight && event.deltaY < 0) {
          
          // Scroll up
          if (currentIndex > 0) {
            currentIndex--;
            scrollToSection(currentIndex);
          }
        }
      });
        

      // Optional: Add keyboard navigation (Arrow keys)
    //   window.addEventListener('keydown', (event) => {
    //     if (isScrolling) return; // Prevent interrupting current scroll
    //     if (event.key === 'ArrowDown') {
    //       // Scroll down
    //       if (currentIndex < sections.length - 1) {
    //         currentIndex++;
    //         scrollToSection(currentIndex);
    //       }
    //     } else if (event.key === 'ArrowUp') {
    //       // Scroll up
    //       if (currentIndex > 0) {
    //         currentIndex--;
    //         scrollToSection(currentIndex);
    //       }
    //     }
    //   });
    });