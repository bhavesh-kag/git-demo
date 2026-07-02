// ========================================
// Utility Functions for the Project
// ========================================

// 1. String Utilities
// ==================

// Check if string is empty or null
function isEmpty(str) {
    return !str || str.trim().length === 0;
}

// Capitalize first letter of string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Convert string to title case
function titleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => capitalize(word))
        .join(' ');
}

// 2. Number Utilities
// ====================

// Check if number is even
function isEven(num) {
    return num % 2 === 0;
}

// Check if number is odd
function isOdd(num) {
    return num % 2 !== 0;
}

// Round number to specific decimal places
function roundTo(num, decimals = 2) {
    return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

// Get random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 3. Array Utilities
// ===================

// Remove duplicates from array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Shuffle array
function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Check if array contains value
function arrayContains(arr, value) {
    return arr.includes(value);
}

// 4. Date Utilities
// ==================

// Format date as DD/MM/YYYY
function formatDate(date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
}

// Get days difference between two dates
function daysBetween(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2 - d1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// Check if date is today
function isToday(date) {
    const today = new Date();
    const checkDate = new Date(date);
    return today.toDateString() === checkDate.toDateString();
}

// 5. Object Utilities
// ====================

// Deep clone object
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// Check if object is empty
function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
}

// Merge two objects
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// 6. Validation Utilities
// ========================

// Validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate phone number (10 digits)
function isValidPhoneNumber(phone) {
    return /^[0-9]{10}$/.test(phone);
}

// Validate URL
function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

// 7. DOM Utilities
// =================

// Get element by ID
function getById(id) {
    return document.getElementById(id);
}

// Get elements by class name
function getByClass(className) {
    return document.querySelectorAll(`.${className}`);
}

// Hide element
function hide(element) {
    element.style.display = 'none';
}

// Show element
function show(element) {
    element.style.display = 'block';
}

// Toggle element visibility
function toggle(element) {
    element.style.display = element.style.display === 'none' ? 'block' : 'none';
}

// Add class to element
function addClass(element, className) {
    element.classList.add(className);
}

// Remove class from element
function removeClass(element, className) {
    element.classList.remove(className);
}

// Export all functions
export {
    isEmpty, capitalize, titleCase,
    isEven, isOdd, roundTo, getRandomNumber,
    removeDuplicates, shuffleArray, arrayContains,
    formatDate, daysBetween, isToday,
    deepClone, isObjectEmpty, mergeObjects,
    isValidEmail, isValidPhoneNumber, isValidURL,
    getById, getByClass, hide, show, toggle, addClass, removeClass
};
