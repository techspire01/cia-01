// JavaScript file for CIA - Coimbatore website
// Currently, no JavaScript functionality is present in the original code
// This file can be used to add future interactive features

document.addEventListener('DOMContentLoaded', function() {
    // Add any JavaScript functionality here
    console.log('CIA - Coimbatore website loaded successfully');
    
    // Example: You can add future functionality like:
    // - Mobile menu toggle
    // - Search functionality
    // - Form validations
    // - Dynamic content loading
    // - User authentication handling

});
// Dropdown for Products (for mobile, optional enhancement)
document.querySelectorAll('.group').forEach(group => {
  group.addEventListener('mouseenter', () => {
    const dropdown = group.querySelector('.group-hover\\:block');
    if (dropdown) dropdown.classList.remove('hidden');
  });
  group.addEventListener('mouseleave', () => {
    const dropdown = group.querySelector('.group-hover\\:block');
    if (dropdown) dropdown.classList.add('hidden');
  });
});

// Example: Toggle login/profile (simulate login)
const loginBtn = document.querySelector('a.bg-yellow-400');
const profileSection = document.getElementById('profileSection');
if (loginBtn && profileSection) {
  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginBtn.classList.add('hidden');
    profileSection.classList.remove('hidden');
  });
}
