//for fetching user data from the database;
let dataList=document.getElementById("customerList");
window.addEventListener("DOMContentLoaded",loadData);
let users=[];
async function loadData() {
  let response=await fetch("http://localhost:6500/user/getAll");
  users=await response.json();
  console.log(users);
  showData(users);
}

//for adding users redirect to add Customer page
const addButton=document.getElementById("addCustomer");
addButton.addEventListener("click",()=>{
  window.location.href="/addCustomer.html";
});

//To see users if the table is loaded or user updated via search box;
function showData(users) {
  dataList.innerHTML="";
    for(let i=0;i<users.length;i++){
        let tr=document.createElement("tr");
        tr.innerHTML=`
        <td>${users[i].firstName}</td>
        <td>${users[i].lastName}</td>
        <td>${users[i].street}</td>
        <td>${users[i].address}</td>
        <td>${users[i].city}</td>
        <td>${users[i].state}</td>
        <td>${users[i].email}</td>
        <td>${users[i].phone}</td>
        <td id="buttonFlex"><button class="userButton" onClick="deleteUser(${users[i].id})">Delete</button><button class="userButton" onClick="updateUser(${users[i].id})">Edit</button></td>`
        dataList.appendChild(tr);
    }
}
//search by implementation


//first setting search by value(name,city,email,phone);
const searchBy=document.getElementById("searchBy");

function setDropdown(button){
  searchBy.textContent="";
  searchBy.textContent=button.textContent;
  searchBy.value=button.getAttribute("data-value");
  console.log(searchBy.value);
}

//adding dynamic search by value(name,city,email,phone)
document.getElementById("search").addEventListener("change",(e)=>{
 filterUsers(e.target.value,searchBy.value);
})

function filterUsers(data,value){
  let userFiltered=users.filter((ele,i)=>ele[value].toLowerCase().includes(data.toLowerCase()));
  showData(userFiltered);
}

//adding delete feature
function deleteUser(id){
  let result=confirm("Are you sure you want to delete this user?");
  if(result){
    fetch(`http://localhost:6500/user/deleteUser/${id}`,{
      method:"DELETE"
    })
    .then((res)=>{
          if(res.status===200){
            alert("User deleted successfully");
            window.location.href="/customerList.html";
          }
      })
    }
}

//adding Edit Feature
const editBox=document.getElementById("Edit-details");

//Adding Old User To Edit Form
async function updateUser(id){
  editBox.style.display="flex";
  //getting old user
  let oldUser=await getUserById(id);

  document.getElementById("Edit-first-name").textContent=oldUser.firstName;
  document.getElementById("Edit-last-name").textContent=oldUser.lastName;
  document.getElementById("Edit-address").textContent=oldUser.address;
  document.getElementById("Edit-street").textContent=oldUser.street;
  document.getElementById("Edit-city").textContent=oldUser.city;
  document.getElementById("Edit-state").textContent=oldUser.state;
  document.getElementById("Edit-email").textContent=oldUser.email;
  document.getElementById("Edit-phone").textContent=oldUser.phone;
}


// Calling Update Api with User Form
document.getElementById("EditDetails").addEventListener("click",updateUserDetails);

async function updateUserDetails(){
  let firstName=document.getElementById("Edit-first-name").textContent;
  let lastName=document.getElementById("Edit-last-name").textContent;
  let address=document.getElementById("Edit-address").textContent;
  let street=document.getElementById("Edit-street").textContent;
  let city=document.getElementById("Edit-city").textContent;
  let state=document.getElementById("Edit-state").textContent;
  let email=document.getElementById("Edit-email").textContent;
  let phone=document.getElementById("Edit-phone").textContent;
  let result=await fetch(`http://localhost:6500/user/updateUser/${id}`,{
    method:"PUT",
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
  })
  if(result.status===200){
    alert("User updated successfully");
    window.location.href="/customerList.html";
    editBox.style.display="none";
  }
}
//getting Old User From DataBase
async function getUserById(id){
  let response=await fetch(`http://localhost:6500/user/findById/${id}`);
  let user=await response.json();
  console.log(user);
  return user;
}

//Changing Display of Edit Box 
function displayNone(){
  editBox.style.display="none";
}

