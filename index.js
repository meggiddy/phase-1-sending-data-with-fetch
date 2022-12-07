// Add your code here
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

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
    .then((resp) => resp.json)
    .then((data) => console.log(data))
    .catch(function (error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    });
}
submitData();
