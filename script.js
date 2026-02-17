
// Select input, button and ordered list
const input = document.querySelector(".task-input");
const button = document.querySelector(".add-btn");
const ol = document.querySelector(".task-list");

// Event Handling
button.addEventListener("click", function () {

    // Get input value
    const taskText = input.value;

    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // create a new list item
    const li = document.createElement("li");  
    li.innerText = taskText;            

    // Apply styling using style.property
    li.style.color = "black";
    li.style.fontWeight = "bold";

    // Add class using setAttribute()
    li.setAttribute("class", "task-item");
    ol.append(li);   // Add li to ordered list
    // Remove Task When Clicked
    li.addEventListener("click", function () {
        li.remove();   
    })
    //Clear input field
    input.value = "";  
});
