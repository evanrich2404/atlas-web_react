// Import jQuery
import $ from 'jquery';

// Add the paragraph element: "Holberton Dashboard"
$('body').append('<p>Holberton Dashboard</p>');

// Add the paragraph element: "Dashboard data for the students"
$('body').append('<p>Dashboard data for the students</p>');

// Add the button element with the text "Click here to get started"
const button = $('<button>Click here to get started</button>');
$('body').append(button);

// Add a paragraph element with id "count"
const countElement = $("<p id='count'></p>");
$('body').append(countElement);

// Add the paragraph element: "Copyright - Holberton School"
$('body').append('<p>Copyright - Holberton School</p>');

// Initialize the click count
let count = 0;

// Define the updateCounter function
function updateCounter() {
  count++;
  countElement.text(`${count} clicks on the button`);
}

// Bind the debounce function to the button click event
const debouncedUpdateCounter = _.debounce(updateCounter, 500);
button.on('click', debouncedUpdateCounter);
