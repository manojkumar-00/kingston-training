// ===================== JavaScript DOM Manipulation and Events =====================

// ===================== Selecting and Modifying Elements =====================
/* 
Selecting elements using document methods:
    1. getElementById
    2. querySelector
    3. querySelectorAll
*/
const modifyParagraph = document.getElementById("modify-me");
const modifyButton = document.getElementById("modify-btn");

// Modify element's text and style on button click
modifyButton.addEventListener("click", () => {
    modifyParagraph.textContent = "The text has been dynamically modified!";
    modifyParagraph.style.color = getRandomColor();
    modifyParagraph.style.fontWeight = "bold";
});

// Function to generate a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF"; // Hexadecimal color characters
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// ===================== Creating and Appending Elements Dynamically =====================
const addItemButton = document.getElementById("add-item-btn");
const itemList = document.getElementById("item-list");

addItemButton.addEventListener("click", () => {
    // Create a new list item
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem); // Append to the list
});

// ===================== Event Handling =====================
const clickMeButton = document.getElementById("click-me-btn");
const eventResult = document.getElementById("event-result");

clickMeButton.addEventListener("click", () => {
    eventResult.textContent = "Button clicked! Event handling successful.";
    eventResult.style.color = "green";
});

// ===================== Event Delegation and Bubbling =====================
const parentDiv = document.getElementById("parent-div");
const delegationResult = document.getElementById("delegation-result");

// Event delegation: Handle clicks on buttons within parent div
parentDiv.addEventListener("click", (event) => {
    if (event.target.classList.contains("child-btn")) {
        delegationResult.textContent = `${event.target.textContent} was clicked!`;
        delegationResult.style.color = "blue";
    }
});

// Event bubbling: Demonstrate event propagation
parentDiv.addEventListener("click", () => {
    console.log("Parent DIV clicked (event bubbling demonstration).");
});
