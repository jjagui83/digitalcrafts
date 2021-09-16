const submitButton = document.querySelector(".submit");
const taskList = document.querySelector(".taskAssigments");

const createUser = async () => {
    const url = "http://localhost:3011/create_users";
    const firstName = document.querySelector(".firstName").value;
    const lastName = document.querySelector(".lastName").value;
    const task = document.querySelector(".task").value;
  
    const userData = {
      firstName,
      lastName,
      task,
    };
  
    const createUser = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  };
  submitButton.addEventListener("click", () => {
    createUser();
  });