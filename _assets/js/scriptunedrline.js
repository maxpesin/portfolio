const tablinks = document.querySelectorAll('.tablinks');
const underline = document.querySelector('.underline');

// Function to update the position of the underline
function updateUnderline(button) {
  const buttonRect = button.getBoundingClientRect();
  const tabsRect = button.parentElement.getBoundingClientRect();
  
  // Calculate position and size relative to the parent
  const left = buttonRect.left - tabsRect.left;
  const width = buttonRect.width;
  
  // Move and resize the underline
  underline.style.width = `${width}px`;
  underline.style.left = `${left}px`;
}

// Function to handle click event
tablinks.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons
    tablinks.forEach(btn => btn.classList.remove('active'));
    
    // Add 'active' class to the clicked button
    button.classList.add('active');
    
    // Update the position of the underline
    updateUnderline(button);
  });
});

// Set initial position of the underline for the active tab on page load
window.addEventListener('load', () => {
  const activeButton = document.querySelector('.tablinks.active');
  if (activeButton) updateUnderline(activeButton);
});