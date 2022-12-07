// Add your code here
const form = document.getElementById("form");
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((resp) => resp.json())
    .then((data) => {
      const id = document.createElement("span");
      id.innerHTML = data.id;
      form.append(id);
    })
    .catch(function (error) {
      const errorMessage = document.createElement("span");
      errorMessage.innerHTML = error.message;
      form.append(errorMessage);
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let element = e.target.elements;
  submitData(element.userName.value, element.email.value);
});
