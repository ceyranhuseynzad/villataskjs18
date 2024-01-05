let pImg = document.querySelector(".pimg");
let plas = document.querySelector(".plas");
const fInput = document.querySelector('input[type="file"]');
const nInput = document.querySelector('.n');
const iInput = document.querySelector('.i');
let update = document.querySelector(".update");



update.addEventListener("click", () => {
  console.log("hi");
  axios.post(`http://localhost:3000/all`, {
      img: pImg.src, 
      name: nInput.value,
      info: iInput.value
    })
    .then(response => {
      console.log(response.data);
      window.location = "../index.html";
    })
    .catch(error => {
      console.error("Error:", error);
    });
});

plas.addEventListener("click", () => {
  fInput.click();
  fInput.addEventListener("change", (e) => {
    let file = e.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        pImg.src = reader.result;
      };
    }
  });
});
