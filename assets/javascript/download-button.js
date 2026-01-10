// Auto-close download platform selection menu when a platform is selected
document.addEventListener('DOMContentLoaded', function() {
    const downloadContainers = document.querySelectorAll('.download-button-container');
    
    downloadContainers.forEach(function(container) {
        const menuCheckbox = container.querySelector('.download-select-input');
        
        const platformRadios = container.querySelectorAll('input[type="radio"].download-os');
        
        // Add event listener to each radio button
        platformRadios.forEach(function(radio) {
            radio.addEventListener('change', function() {
                if (menuCheckbox && menuCheckbox.checked) {
                    menuCheckbox.checked = false;
                }
            });
        });
    });
});