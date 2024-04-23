// Coding Challenge
// Inventory data structure (array of objects)
let inventory = [];

// Function to add a new book
function addNewBook() {
  const title = prompt("Enter book title: ");
  const author = prompt("Enter book author: ");
  const genre = prompt("Enter book genre: ");
  const quantity = parseInt(prompt("Enter book quantity: "));

  // Check for unique title
  const existingBook = inventory.find(book => book.title === title);
  if (existingBook) {
    console.error("Error: Book with title '" + title + "' already exists.");
    return; // Exit the function if title is not unique
  }

  // Add new book to inventory
  inventory.push({ title, author, genre, quantity });
  console.log("Book added successfully!");
}

// Function to update book quantity
function updateBookQuantity() {
  const title = prompt("Enter title of book to update: ");
  const newQuantity = parseInt(prompt("Enter new quantity: "));

  // Find the book to update
  const bookIndex = inventory.findIndex(book => book.title === title);
  if (bookIndex === -1) {
    console.error("Error: Book with title '" + title + "' not found.");
    return; // Exit the function if book is not found
  }

  inventory[bookIndex].quantity = newQuantity;
  console.log("Book quantity updated successfully!");
}

// Function to display the inventory
function displayInventory() {
  if (inventory.length === 0) {
    console.log("Inventory is empty.");
    return;
  }

  console.table(inventory, ["title", "author", "genre", "quantity"]);
  // Using console.table provides a clearer tabular format
}

// User interaction loop
while (true) {
  const action = prompt(
    "Enter an action (add, update, display, or exit): "
  ).toLowerCase();

  switch (action) {
    case "add":
      addNewBook();
      break;
    case "update":
      updateBookQuantity();
      break;
    case "display":
      displayInventory();
      break;
    case "exit":
      console.log("Exiting program.");
      break;
    default:
      console.error("Invalid action. Please try again.");
  }

  if (action === "exit") {
    break; // Exit the loop if user chooses to exit
  }
}

