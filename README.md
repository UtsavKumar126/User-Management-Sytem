
# User Management System

A very basic User Management System . The User's data is respresented in form of tables . It consists of three pages :-

* Login Page
* Add New Customer Page
* User Details Page


### Login Page

Here , if User has some role he/she has to login first .

### Add New Customer Page

User can register themselves. User has to provide all the required fields and on submit the user will be registered to our database.
When the User is successfully registered with our database , A **Dialog Box** will appear saying **"User has been registered successfully" .**
### User Details Page

* Can only be accessed by Person registered as Admin .
* Here we have **Add User** button first , on click we are are redirected to **Add New Customer Page** .
* Second we have a **Dropdown** in which we can select the criteria of which we want to filter User Table ,
* Third we have **Search-Box** . The Table will be updated on change of Search box .
* Next we have **User-Table** . It consists of fields containing User-Data . 
* Each user has seperate **" Edit " & " Delete "** Button .
* If Admin clicks on Edit a seperate **Form** pops up containing
  old data of User and a **Cancel** Button  on Screen .
* If Admin wants to change **User-Data** he can change the     fields or can cancel **Edit** by clicking **Cancel** .
* When Edit-Form is filled and submitted, It ask for conformation on click .
* On click the **"User-Details"** are changed at server side and  again a pop appear saying **" User Updated Successfully "** and **"Refreshes"** the page ;
* Then we have **"Delete"** button , on Click it asks for conformation in pop-up  and Delete the user from server side as well and on successfull Delete pops **"User Deleted Successfully"  .**
