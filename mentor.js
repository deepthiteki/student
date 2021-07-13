
let mentors={};


let addMentor=(name,subject,e_mail)=>{
    mentors[`${name}`]={
        subject,
        e_mail,
        students:[]
    }
}
module.exports={
    mentors,addMentor
}