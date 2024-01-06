console.log("Hello");

const element = document.getElementById("addEvent");
element.addEventListener("click", myFunction);

async function myFunction(e) {
  console.log("Clicked");
  e.preventDefault();
  const apikey = "YOUR API KEY";
  let email = document.getElementById("email").value;
  let str = ``;

  try {
    let url = `https://api.emailvalidation.io/v1/info?apikey=${apikey}&email=${email}`;
    let res = await fetch(url);
    let result = await res.json();

    for (let key in result) {
      if (String(result[key]).length !== 0) {
        let test = `<div>${key}: ${result[key]}</div>`;
        str += test;
      }
    }

    const placehold = document.getElementById("test");
    placehold.innerHTML = str;
  } catch (error) {
    console.error("Error:", error);
    // Handle the error (e.g., display an error message)
  }
}
