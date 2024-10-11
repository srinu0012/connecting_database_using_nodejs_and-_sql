let x=require("mysql2")
let db=x.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"1234",
        database:"movies"
    }
)
function getmovie(){
    return new Promise((re,rej)=>{
        db.query(`SELECT * FROM movie`,(err,rows,cols)=>{
            if(err){
                rej("data error")
            }else{
                re(rows)
            }
            // db.end()
        })
    })
}

function postmovie(m_name,bud,dir){
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO movie (movie_name,budject,director) values (?,?,?)`,[m_name,bud,dir],(err,res)=>{
            if(err){
                reject(err)
            }else{
                resolve(res)
            }
        })

    })
}


function putmovie(m_name,bud,dir,id){
    return new Promise((resolve, reject) => {
        db.query(`UPDATE movie
            SET movie_name = '${m_name}', budject = ${bud}, director = '${dir}'
            WHERE id = ${id};`,(err,res)=>{
            if(err){
                reject(err)
            }else{
                resolve(res)
            }
        })
    })

}

function delmovie(id){
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM movie where id=${id}`,(err,res)=>{
            if(err){
                reject(err)
            }else{
                resolve(res)
            }
        })
    })

}
module.exports={
    getmovie,postmovie,putmovie,delmovie
}
