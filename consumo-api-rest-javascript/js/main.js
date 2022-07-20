// const URL = "https://api.thecatapi.com/v1/images/search";
const URL = "https://api.thecatapi.com/v1/images/search?limit=3&order=desc";

// fetch(URL)
//   .then((res) => res.json())
//   .then((data) => {
//     const img = document.querySelector("img");
//     img.src = data[0].url;
//   });

// async function getCat() {
//   const res = await fetch(URL);
//   const data = await res.json();

//   const img = document.querySelector("img");
//   img.src = data[0].url;
// }
const getCat = async () => {
  const res = await fetch(URL);
  const data = await res.json();

  const img = document.querySelector("img");
  img.src = data[0].url;
};

getCat();

const button = document.querySelector("button");
button.onclick = getCat;
