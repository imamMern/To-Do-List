let subject = document.querySelector('.subject');
let addBtn = document.querySelector('.add-btn');
let resetBtn = document.querySelector('.reset-btn')
let ul = document.querySelector('.ul');


function handleEnter() {
    // Alert For Empty Value
    if (subject.value.trim() === '') {
        alert('Input cannot be empty!');
    } else {
        let li = document.createElement('li');
        let taskContainer = document.createElement('div'); // Create a parent div container
        taskContainer.classList.add('task-container'); // Add a class to the container

        // Create child elements for icons and add them to the parent container
        let checkIcon = document.createElement('i');
        checkIcon.classList.add('fa-regular', 'fa-check-circle');

        let editIcon = document.createElement('i');
        editIcon.classList.add('fas', 'fa-edit');

        let trashIcon = document.createElement('i');
        trashIcon.classList.add('fas', 'fa-trash');

        taskContainer.appendChild(checkIcon);
        taskContainer.appendChild(editIcon);
        taskContainer.appendChild(trashIcon);

        // Add the task text to the list item
        let taskText = document.createElement('span');
        taskText.textContent = subject.value;

        // Append the task text and icon container to the list item
        li.appendChild(taskText);
        li.appendChild(taskContainer);

        // Append the list item to the ul
        ul.appendChild(li);

        // Clear the input field
        subject.value = '';

        // Add event listeners for the icons (checkmark, edit, delete) here
        trashIcon.addEventListener('click', function () {
            ul.removeChild(li);
        });



        editIcon.addEventListener('click', function () {
            let editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = li.querySelector('span').textContent;

            // Replace the span with the input field for editing
            li.replaceChild(editInput, li.querySelector('span'));

            editInput.focus();

            // An event listener to save the edited task when pressing Enter
            editInput.addEventListener('keyup', function (event) {
                if (event.key === 'Enter') {
                    li.replaceChild(document.createElement('span'), editInput);
                    li.querySelector('span').textContent = editInput.value;
                }
            });
        });




        checkIcon.addEventListener('click', function () {
            if (checkIcon.classList.contains('fa-regular')) {
                checkIcon.classList.remove('fa-regular');
                checkIcon.classList.add('fas');
                // Change the color to black
                checkIcon.style.color = '#05FF00';
            } else {
                checkIcon.classList.remove('fas');
                checkIcon.classList.add('fa-regular');
                checkIcon.style.color = '';
            }
        });
        
        // Add the check icon to your taskContainer or wherever it belongs
        taskContainer.appendChild(checkIcon);
    }

    // Clear all items from the list (ul)
    function resetList(){
        ul.innerHTML = ''
    }
    // reset button
    resetBtn.addEventListener('click',function(){
        resetList();
    })

}

subject.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        handleEnter();
    }
});

addBtn.addEventListener('click', function () {
    handleEnter();
});

