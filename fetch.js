async function getmethod(params) {
    let obj=await fetch("http://localhost:4003/movies")
    console.log(await obj.json())
}
module.exports={
    getmethod
}