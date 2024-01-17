// sideBar

function showSidebar() {
    const sideBar = document.querySelector('.sidebar')
    sideBar.style.display = 'flex'
    sideBar.style.width = '250px'
    document.addEventListener("mousedown", closeSidebarOutside)
}

function hideSidebar() {
    const sideBar = document.querySelector('.sidebar')
    sideBar.style.display = 'none'
    sideBar.style.width = '0px'
    document.removeEventListener("mousedown", closeSidebarOutside);
} 

function closeSidebarOutside (event) {
    const sideBar = document.querySelector('.sidebar');
    if (!sideBar.contains(event.target)) {
        hideSidebar();
    }
}

//programme filter

function showDay(dayId) {
    // Hide all days
    var days = document.querySelectorAll('.day');
    days.forEach(function(day) {
        day.style.display = 'none';
    });

    // Show the selected day
    var selectedDay = document.getElementById(dayId);
    if (selectedDay) {
        selectedDay.style.display = 'block';
    }
}

function showAllDays() {
    // Show all days
    var days = document.querySelectorAll('.day');
    days.forEach(function(day) {
        day.style.display = 'block';
    });
}


document.addEventListener('DOMContentLoaded', function () {
    // Get the fragment identifier from the URL
    var fragment = window.location.hash.substring(1);

    // Hide all profile sections
    var profileSections = document.querySelectorAll('.container-v');
    profileSections.forEach(function (section) {
        section.style.display = 'none';
    });

    // Show the profile section based on the fragment identifier
    if (fragment) {
        var targetProfile = document.getElementById(fragment);
        if (targetProfile) {
            targetProfile.style.display = 'flex';
        } else {
            console.warn('Profile section with ID ' + fragment + ' not found.');
        }
    }
});
