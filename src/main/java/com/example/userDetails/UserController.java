package com.example.userDetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @CrossOrigin
    @PostMapping("/add")
    public ResponseEntity<String> addUser(@RequestBody User user){
        userService.addUser(user);
        return new ResponseEntity<>("User Saved", HttpStatus.OK);

    }


    @CrossOrigin
    @PutMapping("/updateUser")
    public ResponseEntity<String> updateUser(@RequestBody User user , @RequestParam int userId){
        userService.updateUser(user,userId);
        return new ResponseEntity<>("User Updated",HttpStatus.ACCEPTED);
    }

    @CrossOrigin
    @GetMapping("/getAll")
    public ResponseEntity<List<User>> getUsers(){
        return new ResponseEntity<>(userService.getUsers(),HttpStatus.OK);
    }


    @CrossOrigin
    @GetMapping("/findById")
    public ResponseEntity<User>getUserById(@RequestParam int id){
        return new ResponseEntity<>(userService.findById(id),HttpStatus.OK);
    }

    @CrossOrigin
    @DeleteMapping("/deleteUser")
    public ResponseEntity<String> deleteUser(@RequestParam int id){
        userService.deleteUser(id);
        return new ResponseEntity<>("User Deleted Successfully",HttpStatus.OK);
    }

}
