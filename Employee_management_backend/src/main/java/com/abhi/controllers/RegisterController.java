package com.abhi.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abhi.dto.UserSignupDto;
import com.abhi.pojos.Employee;
import com.abhi.services.RegisterService;

@RestController
public class RegisterController{

    @Autowired
    private RegisterService registerService;

    @PostMapping("/api/signup")
    public ResponseEntity<Employee> registerUserAccount(@ModelAttribute("employee")@Valid UserSignupDto dto){
        return ResponseEntity.ok(registerService.registerNewUser(dto));
    }
}