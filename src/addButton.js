let allTask = [];

//create task
export function taskCard() {
  const addButton = document.querySelector(".add-button>button");
  const dialog = document.querySelector(".dialog");
  const cancelDialog = document.querySelector(".btn-cancel");

  addButton.addEventListener("click", () => {
    dialog.showModal();
  });

  cancelDialog.addEventListener("click", () => {
    dialog.close();
  });
}

//dialog card element

function addTask(titleText, description, dueDate) {
  const taskContainer = document.querySelector(".task-container");

  const card = document.createElement("div");
  card.classList.add("card");

  const taskStatus = document.createElement("input");
  taskStatus.style.width = "3%";
  taskStatus.style.height = "40%";
  taskStatus.type = "checkbox";
  taskStatus.checked = false;
  taskStatus.classList.add("taskStatus");
  card.appendChild(taskStatus);

  const taskTitle = document.createElement("h2");
  taskTitle.style.width = "25%";
  const index = allTask.length + 1;
  taskTitle.textContent = `${titleText}`;
  taskTitle.classList.add("taskTitle");
  card.appendChild(taskTitle);

  const taskDesc = document.createElement("h4");
  taskDesc.style.width = "40%";
  taskDesc.textContent = `${description}`;
  card.appendChild(taskDesc);

  const taskDate = document.createElement("h3");
  taskDate.style.width = "10%";
  taskDate.textContent = `${dueDate}`;
  card.appendChild(taskDate);

  const editTask = document.createElement("i");
  editTask.classList.add("fa-regular", "fa-pen-to-square");
  editTask.style.fontSize = "24px";
  card.appendChild(editTask);

  const deleteTask = document.createElement("i");
  deleteTask.classList.add("fa-solid", "fa-trash");
  deleteTask.style.fontSize = "24px";
  card.appendChild(deleteTask);
  taskContainer.appendChild(card);

  card.dataset.taskId = index;

  // Add a click event to the delete icon
  deleteTask.addEventListener("click", () => {
    const taskId = card.dataset.taskId;
    removeTask(taskId);
  });

  function removeTask(taskId) {
    // Find the task in the allTask array and remove it
    allTask = allTask.filter((task) => task.taskId != taskId);
    // Find the card by the taskId and remove it from the DOM
    const cardToRemove = document.querySelector(`[data-task-id="${taskId}"]`);
    if (cardToRemove) {
      cardToRemove.remove();
    }
  }

  allTask.push({
    taskId: index, // Use a taskId property
    titleText: titleText,
    description: description,
    dueDate: dueDate,
    isComplete: false,
  });

  //checkbox
  function taskCompleted() {
    const taskStatus = document.querySelectorAll(".card>.taskStatus");
    const taskTitle = document.querySelectorAll(".taskTitle");

    taskStatus.forEach((checkbox,index) => {

      let taskId = index;

      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          taskTitle[index].classList.add("taskComplete");
          allTask[taskId].isComplete = true;
        } else {
          taskTitle[index].classList.remove("taskComplete");
          allTask[taskId].isComplete = false;
        }
      });
    });
  }

  taskCompleted();


}

export function confirm() {
  const confirmButton = document.querySelector(".btn-confirm");
  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("myTextarea");
  const dateInput = document.querySelector(".taskDate");
  const dialog = document.querySelector(".dialog");

  confirmButton.addEventListener("click", () => {
    const titleText = titleInput.value;
    const descriptionText = descriptionInput.value;
    const dateText = dateInput.value;

    addTask(titleText, descriptionText, dateText);

    dialog.close();
    console.log(allTask);
  });
}
