// SELECT DOM ELEMENTS
const input = document.querySelector('#favchap');     // Find the text input field with id "favchap"
const button = document.querySelector('button');      // Find the first button on the page
const list = document.querySelector('#list');         // Find the unordered list with id "list"

// ADD EVENT LISTENER TO THE BUTTON
button.addEventListener('click', function () {        // When CLICK happens on the button, execute this function

    // CHECK IF INPUT IS EMPTY
    if (input.value.trim() === '') {                  // If the text field is empty or only contains spaces
        alert('Please enter a chapter');              // Show alert message
        // Note: focus() is called at the end regardless of empty input
    } else {
        // INPUT IS NOT EMPTY - CREATE NEW LIST ITEM

        // CREATE NEW HTML ELEMENTS
        const li = document.createElement('li');          // Create a new list item <li>
        const deleteButton = document.createElement('button'); // Create a new button <button>

        // CONFIGURE ELEMENT CONTENT
        li.textContent = input.value;                     // Put the input text inside the <li>
        deleteButton.textContent = '❌';                  // Put the X emoji in the button
        deleteButton.ariaLabel = `Remove ${input.value}`; // Text for screen readers: "Remove Alma 5"

        // ASSEMBLE THE ELEMENTS
        li.append(deleteButton);                          // Put the button inside the <li>
        list.append(li);                                  // Put the <li> inside the unordered list <ul>

        // CLEAN UP FOR NEXT ENTRY
        input.value = '';                                 // Clear the text from the input field

        // ADD DELETE FUNCTIONALITY WITH FOCUS MANAGEMENT
        deleteButton.addEventListener('click', function () { // When CLICK happens on the ❌ button
            list.removeChild(li);                         // Remove the entire <li> from the list
            input.focus();                                // NEW: Return focus to input field after deletion
        });
    }

    // SET FOCUS TO INPUT FIELD (executes whether item was created or not)
    input.focus();                                        // Put cursor back in the input field (ALWAYS executes)

});