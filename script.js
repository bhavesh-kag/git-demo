// Welcome message
console.log("Website loaded successfully!");

// Dynamic greeting based on time
document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('h1');
    const hour = new Date().getHours();
    
    let greeting = 'Good Morning';
    if (hour >= 12 && hour < 18) {
        greeting = 'Good Afternoon';
    } else if (hour >= 18) {
        greeting = 'Good Evening';
    }
    
    // Add greeting to heading
    h1.innerHTML = `${greeting}! This is version v4 🚀`;
});

// Add click event to heading
document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('h1');
    
    h1.addEventListener('click', function() {
        h1.style.transform = 'scale(1.1)';
        h1.style.transition = '0.3s ease';
        
        setTimeout(() => {
            h1.style.transform = 'scale(1)';
        }, 300);
    });
});

// Current date aur time display
function updateDateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-IN');
    const dateString = now.toLocaleDateString('en-IN');
    console.log(`Current Time: ${timeString} | Date: ${dateString}`);
}

updateDateTime();
setInterval(updateDateTime, 60000); // Every minute update
