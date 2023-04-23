package com.Asands.RecipeGeneratorBackend.controllers;

import com.Asands.RecipeGeneratorBackend.data.UserRepository;
import com.Asands.RecipeGeneratorBackend.models.AuthenticationFailure;
import com.Asands.RecipeGeneratorBackend.models.AuthenticationSuccess;
import com.Asands.RecipeGeneratorBackend.models.User;
import com.Asands.RecipeGeneratorBackend.models.dto.LoginFormDTO;
import com.Asands.RecipeGeneratorBackend.models.dto.RegisterFormDTO;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(maxAge = 3600)
public class AuthenticationController {

    @Autowired
    UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<?> processRegistrationForm(@RequestBody RegisterFormDTO registerFormDTO, HttpServletRequest request) {

        User existingUser = userRepository.findByUsername(registerFormDTO.getUsername());

        if (existingUser != null) {
            AuthenticationFailure authenticationFailure = new AuthenticationFailure("That username is taken.");
            return new ResponseEntity<>(authenticationFailure, HttpStatus.OK);
        }

        String password = registerFormDTO.getPassword();
        String verifyPassword = registerFormDTO.getVerifyPassword();
        if (!password.equals(verifyPassword)) {
            AuthenticationFailure authenticationFailure = new AuthenticationFailure("Passwords do not match.");
            return new ResponseEntity<>(authenticationFailure, HttpStatus.OK);
        }

        User newUser = new User(registerFormDTO.getUsername(), registerFormDTO.getPassword());
        userRepository.save(newUser);
        AuthenticationSuccess authenticationSuccess = new AuthenticationSuccess("User successfully registered.");
        return new ResponseEntity<>(authenticationSuccess, HttpStatus.OK);

    }
    @PostMapping("/login")
    public ResponseEntity<?> processLoginForm(@RequestBody LoginFormDTO loginFormDTO, HttpServletRequest request) {

        User theUser = userRepository.findByUsername(loginFormDTO.getUsername());

        if (theUser == null) {
            AuthenticationFailure authenticationFailure = new AuthenticationFailure("Username does not exist.");
            return new ResponseEntity<>(authenticationFailure, HttpStatus.OK);
        }

        String password = loginFormDTO.getPassword();

        if (!theUser.isMatchingPassword(password)) {
            AuthenticationFailure authenticationFailure = new AuthenticationFailure("Incorrect password.");
            return new ResponseEntity<>(authenticationFailure, HttpStatus.OK);

        }
        return new ResponseEntity<>(theUser, HttpStatus.OK);
    }

}