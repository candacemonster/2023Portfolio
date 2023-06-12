// Function to toggle the theme
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');

  // Store the theme preference in localStorage
  const isDarkTheme = body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

// Retrieve the theme preference from localStorage on page load
window.addEventListener('DOMContentLoaded', function() {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
});

// Attach the toggleTheme function to the theme toggle button
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', toggleTheme);

document.addEventListener("DOMContentLoaded", function() {
  const copyLink = document.getElementById("copy-link");
  const originalContent = copyLink.innerHTML; // Save the original content

  copyLink.addEventListener("click", (event) => {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the text to copy from the data-clipboard-text attribute
    const textToCopy = copyLink.getAttribute("data-clipboard-text");

    // Create a temporary textarea element
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);

    // Select the text in the textarea
    tempTextarea.select();

    // Copy the text to the clipboard
    document.execCommand("copy");

    // Remove the textarea element
    document.body.removeChild(tempTextarea);

    // Update the link text to show that the text has been copied
    copyLink.textContent = "copied!";

    // Wait for 8 seconds (8000 ms), then display the original icon again
    setTimeout(() => {
      copyLink.innerHTML = originalContent;
    }, 5000);
  });
});

// Get the contact information element
const contactInfoElement = document.getElementById('contact-info');

// Define your contact details as an object
const contactDetails = {
  email: 'c.woodbury@protonmail.com',
  phone: '(123) 456-7890',
  address: 'PO Box 1493, 83221, USA'
};

// Function to populate the contact information
function populateContactInfo() {
  contactInfoElement.innerHTML = `
    <p>Email: ${contactDetails.email}</p>
    <p>Phone: ${contactDetails.phone}</p>
    <p>Address: ${contactDetails.address}</p>
  `;
}

// Call the function to populate the contact information
populateContactInfo();
