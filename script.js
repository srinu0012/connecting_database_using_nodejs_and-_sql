

let btn=document.getElementById("button")
let tab=document.getElementById("tab")
btn.addEventListener("click",async function getmethod(params) {
    let obj=await fetch("http://localhost:4003/movies")
    let x=await obj.json()
     
    for(i of x){
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        td1.innerText=i.id
        let td2=document.createElement("td")
        td2.innerText=i.movie_name
        let td3=document.createElement("td")
        td3.innerText=i.budject
        let td4=document.createElement("td")
        td4.innerText=i.director
        tr.append(td1,td2,td3,td4)
        tab.appendChild(tr)
    }

})
