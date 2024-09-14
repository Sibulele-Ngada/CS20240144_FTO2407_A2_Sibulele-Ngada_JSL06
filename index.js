// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"],
    Wines: ["White Wine", "Red Wine"]
};

const categories = Object.keys(menu);

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuSection = document.getElementById('menu');
    // Loop through each category and its items in the menu object
    categories.forEach(category => {
        // Create an element to represent the category
        const heading = document.createElement('h3');
        // Set the text content of the category element to the category name
        heading.textContent = category;
        // Append the category element to the menu container
        menuSection.appendChild(heading);
        // Create an element to represent a list of items
        const menuItemList = document.createElement('ul');
        // Append a list of items element to the menu container
        menuSection.appendChild(menuItemList);  
        // Loop through the items in the category and create list items
        menu[category].forEach(element => {
            // Create a list item element
            const menuItem = document.createElement('li');
            // Set the text content of the list item element to the item name
            menuItem.textContent = element;
            // Attach a click event listener to the list item to add it to the order   
            menuItem.addEventListener('click', () => addToOrder(element));
            // Append the list item to the list of items
            menuItemList.appendChild(menuItem);
        });
    })
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderList = document.getElementById('order-items');
    // Create a list item for the order
    const orderItem = document.createElement('li');
    // Set the text content of the list item to the item name
    orderItem.textContent = itemName;
    // Append the list item to the order items list
    orderList.appendChild(orderItem);
    // Calculate and update the total price
    const orderTotal = document.getElementById('order-total');
    const currentTotal = parseFloat(orderTotal.textContent);
    const itemPrice = 60; 
    const newTotal = currentTotal + itemPrice;
    // Update the text content of the order total element with the new total
    orderTotal.textContent = newTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
