// script.js
export function handleDropdown() {
    document.querySelector('.profile_log .user').addEventListener('click', function() {
        var dropdownMenu = document.querySelector('.profile_log .dropdown-menu dropdown-menu-end');
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
    });
    
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.profile_log .user') && !event.target.matches('.profile_log .user *')) {
            var dropdowns = document.querySelectorAll('.dropdown-menu dropdown-menu-end');
            dropdowns.forEach(function(dropdown) {
                if (dropdown.style.display === 'block') {
                    dropdown.style.display = 'none';
                }
            });
        }
}};