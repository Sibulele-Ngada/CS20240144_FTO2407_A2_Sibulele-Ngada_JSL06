// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

let newTotal = 0.00;

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
            // Create a list item element
            const menuItem = document.createElement('li');
            // Set the text content of the list item element to the item name
            menuItem.textContent = element;
            // Attach a click event listener to the list item to add it to the order   
            menuItem.addEventListener('click', () => addToOrder(element));
            // Append the list item to the list of items
            starterList.appendChild(menuItem);
        });
/*
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
        menu.MainCourses.forEach(element => {
            // Create a list item element
            const menuItem = document.createElement('li');
            // Set the text content of the list item element to the item name
            menuItem.textContent = element;
            // Attach a click event listener to the list item to add it to the order   
            menuItem.addEventListener('click', addToOrder(menuItem.textContent));
            // Append the list item to the list of items
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
        menu.Desserts.forEach(element => {
            // Create a list item element
            const menuItem = document.createElement('li');
            // Set the text content of the list item element to the item name
            menuItem.textContent = element;
            // Attach a click event listener to the list item to add it to the order   
            menuItem.addEventListener('click', addToOrder(menuItem.textContent));
            // Append the list item to the list of items
            dessertList.appendChild(menuItem);
        });
            

       */     

               
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
    newTotal += 60.00;
    // Update the text content of the order total element with the new total
    orderTotal.textContent = `${newTotal}.00`;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
    newTotal = 0;
}

// Start the menu system by calling the init function
initMenuSystem(menu);
