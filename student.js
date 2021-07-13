
let students={};


let addStudent=(name,age,e_mail)=>{
    students[`${name}`]={
        age,
        e_mail,
        mentor:""
    }
}

module.exports={
    students,addStudent
}