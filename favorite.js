let card = document.querySelector(".s-it")
console.log(card);
function getAll(){
    fetch(`http://localhost:3000/favorite`)
    .then(res=>res.json())
    .then(data=>{
        data.forEach(element => {
            card.innerHTML+=`<div class="item">
          
                        <div class="img"><img src="${element.img}" alt=""></div>
                        <div class="info">
                            <h4>${element.name}</h4>
                            <p> ${element.info}</p>
                            <button onclick="deleteCart(${element.id})">Delete</button>
                         
                        </div>
                    </div>`
        });
    })
}
getAll()
function deleteCart(id){
    axios.delete(`http://localhost:3000/favorite/${id}`)
    window.location.reload()
}