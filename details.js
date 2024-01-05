let id=new URLSearchParams(window.location.search).get("id")
let card = document.querySelector(".s-it")
console.log(card);
function getCard(){
    fetch(`http://localhost:3000/all/${id}`)
    .then(res=>res.json())
    .then(data=>{
        card.innerHTML=`<div class="item">
      
                    <div class="img"><img src="${data.img}" alt=""></div>
                    <div class="info">
                        <h4>${data.name}</h4>
                        <p> ${data.info}</p>
                
                    </div>
                </div>`
    })
    .catch(error => console.error('Error:', error));

}
getCard()