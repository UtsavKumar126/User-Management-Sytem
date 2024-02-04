package com.example.userDetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    public String addUser(User user) {
        User user1=new User();
        user1.setFirstName(user.getFirstName());
        user1.setLastName(user.getLastName());
        user1.setStreet(user.getStreet());
        user1.setAddress(user.getAddress());
        user1.setCity(user.getCity());
        user1.setState(user.getState());
        user1.setEmail(user.getEmail());
        user1.setPhone(user.getPhone());

        userRepository.save(user1);
        return "Added Successfully";

    }

    public String updateUser(User user, int userId) {
        User user1=userRepository.findById(userId).get();
        user1.setFirstName(user.getFirstName());
        user1.setLastName(user.getLastName());
        user1.setStreet(user.getStreet());
        user1.setAddress(user.getAddress());
        user1.setCity(user.getCity());
        user1.setState(user.getState());
        user1.setEmail(user.getEmail());
        user1.setPhone(user.getPhone());

        userRepository.save(user1);

        return "Updated Successfully";
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User findById(int id) {
        return userRepository.findById(id).get();
    }

    public String deleteUser(int id) {

        userRepository.deleteById(id);

        return "Removed Successfully";
    }
}
