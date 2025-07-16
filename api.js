const URL = "https://catfact.ninja/fact";
const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


// const getfact = async () => {
//     console.log("Fetching cat fact...");
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     factpara.innerHTML = data[1].fact;
// };
// btn.addEventListener("click", getfact);
function getfact() {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        factpara.innerHTML = data.fact;
      });
    }
    btn.addEventListener("click", getfact);