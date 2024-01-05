let m = document.querySelector(".m")
let l = document.querySelector(".l")
m.addEventListener("click", () => {
 let b = document.createElement("div")
    b.innerHTML = `
    <div class="b">
      <p class="close">close</p>  
    </div>`
    document.body.appendChild(bg)
    l.classList.add("show")
    let close = document.querySelector(".close")
    close.addEventListener("click", () => {
        bg.remove()
        list.classList.remove("show")
    })
})
let navbar = document.querySelector("nav")
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        navbar.style.backgroundColor = "white"
    } 
})
const tp=document.querySelector(".tp")
window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
        tp.classList.add("active")
    }else{
        tp.classList.remove("active")
    }
})
let card = document.querySelector(".s-it")
console.log(card);
let page = 1
function getAll() {
    fetch(`http://localhost:3000/all?_page=${page}&_limit=4`)
        .then(res => res.json())
        .then(data => {
            fetch(`http://localhost:3000/favorite`)
                .then(res => res.json())
                .then(favs => {
                    data.forEach(element => {
                        if (favs.find(f => f.id === element.id)) {
                            card.innerHTML += `<div class="item">
               <p class="favorite"><i class="bi bi-heart-fill" onclick="removeFavorite(${element.id})"></i>
                           <div class="img"><img src="${element.img}" alt=""></div>
                           <div class="info">
                               <h4>${element.name}</h4>
                               <p> ${element.info}</p>
                               <button onclick="deleteCart(${element.id})">Delete</button>
                               <a href="update.html?id=${element.id}"><button>Update</button></a>
                               <a href="details.html?id=${element.id}"><button>View Details</button></a>
                           </div>
                       </div>`
                        } else {
                            card.innerHTML += `<div class="item">
                     <p class="favorite"><i class="bi bi-heart" onclick="addFavorite(${element.id})"></i>
                            <div class="img"><img src="${element.img}" alt=""></div>
                            <div class="info">
                                <h4>${element.name}</h4>
                                <p> ${element.info}</p>
                                <button onclick="deleteCart(${element.id})">Delete</button>
                                <a href="update.html?id=${element.id}"><button>Update</button></a>
                               <a href="details.html?id=${element.id}"><button>View Details</button></a>

                            </div>
                        </div>`
                        }

                    });
                })
        })

}
let loadMore=document.querySelector(".loadMore")
loadMore.addEventListener("click",()=>{
    page++
    getAll()
    loadMore.style.display="none"
})
function addFavorite(id){
    fetch(`http://localhost:3000/all/${id}`)
    .then(res=>res.json())
    .then(data=>{
        return fetch(`http://localhost:3000/favorite`,{
            method: "POST",
            headers: {
                "Content-Type": "data/json",
            },
            body: JSON.stringify(data)
        })
    })
    .then(res=>{
        if(res.status===500){
            throw new Error('eeeee')
        }
        return res.json()
    })
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
}
function removeFavorite(id){
    fetch(`http://localhost:3000/all/${id}`,{
        method:"DELETE",
        headers: {
            "Content-Type": "data/json",
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}
getAll()
function deleteCart(id){
    axios.delete(`http://localhost:3000/all/${id}`)
    window.location.reload()
}
inputEl.addEventListener('input', (e) => {
    let filtered = data.filter((dt) => dt.firstname.toLowerCase().startsWith((e.target.value).toLowerCase()))

    wrapper.innerHTML = '';

    filtered.forEach(robot => {
        wrapper.innerHTML += `
    <div class="card" onclick='goTo("${robot.id}")'>
    <div class="flag" >
    <img src="${robot.avatar}" alt="flag">
         </div>
      <div class="info">
          <p>Name : ${robot.firstname}</p>
            <p>Firstname :  ${robot.lastname}</p>
           <p>Gender : ${robot.gender}</p>
           
         </div>
           </div>`
    })

})
