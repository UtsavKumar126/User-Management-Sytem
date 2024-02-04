const submitDetails=document.getElementById("submitDetails");


submitDetails.addEventListener("click",addUser);

async function addUser(){
    let firstName=document.getElementById("first-name").value;
    let lastName=document.getElementById("last-name").value;
    let address=document.getElementById("address").value;
    let street=document.getElementById("street").value;
    let city=document.getElementById("city").value;
    let state=document.getElementById("state").value;
    let email=document.getElementById("email").value;
    let phone=document.getElementById("phone").value;

    let result=await fetch("http://localhost:6500/user/add",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            firstName:firstName,
            lastName:lastName,
            address:address,
            street:street,
            city:city,
            state:state,
            email:email,
            phone:phone
        })
    });
    if(result.status===200){
        alert("User added successfully")
        window.location.href("/customerList.html");
    }  
}