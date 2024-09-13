// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};




// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuSection = document.getElementById('menu');
    // Loop through each category and its items in the menu object
    
        // Create an element to represent the category
        const starters = document.createElement('h3');
        // Set the text content of the category element to the category name
        starters.textContent = `Starters`;
        // Append the category element to the menu container
        menuSection.appendChild(starters);
        // Create an element to represent a list of items
        const starterList = document.createElement('ul');
        // Append a list of items element to the menu container
        menuSection.appendChild(starterList);  
        // Loop through the items in the category and create list items
        menu.Starters.forEach(element => {
            const menuItem = document.createElement('li');
            menuItem.textContent = element;
            starterList.appendChild(menuItem);
        });

        // Create an element to represent the category
        const mains = document.createElement('h3');
        // Set the text content of the category element to the category name
        mains.textContent = `MainCourses`;
        // Append the category element to the menu container
        menuSection.appendChild(mains);
        // Create an element to represent a list of items
        const mainsList = document.createElement('ul');
        // Append a list of items element to the menu container
        menuSection.appendChild(mainsList);  
        // Loop through the items in the category and create list items
        menu.Starters.forEach(element => {
            const menuItem = document.createElement('li');
            menuItem.textContent = element;
            mainsList.appendChild(menuItem);
        });


        // Create an element to represent the category
        const dessert = document.createElement('h3');
        // Set the text content of the category element to the category name
        dessert.textContent = `Dessert`;
        // Append the category element to the menu container
        menuSection.appendChild(dessert);
        // Create an element to represent a list of items
        const dessertList = document.createElement('ul');
        // Append a list of items element to the menu container
        menuSection.appendChild(dessertList);  
        // Loop through the items in the category and create list items
        menu.Starters.forEach(element => {
            const menuItem = document.createElement('li');
            menuItem.textContent = element;
            dessertList.appendChild(menuItem);
        });
            // Create a list item element

            // Set the text content of the list item element to the item name

            // Attach a click event listener to the list item to add it to the order

            // Append the list item to the list of items

            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML

    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
