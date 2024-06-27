package com.abhi.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.abhi.daos.EmployeeRepository;
import com.abhi.dto.UserSignupDto;
import com.abhi.pojos.Employee;

@Service
public class RegisterService {
    @Autowired
    private  EmployeeRepository emRepository;
    @Autowired
    private  PasswordEncoder passwordEncoder;

    @Transactional
    public Employee registerNewUser(UserSignupDto dto) {
        if (emRepository.findByUsername(dto.getUsername()).isPresent()) {
            throw new RuntimeException("Username already exists");
        }
        if (emRepository.findByEmail(dto.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        Employee employee = new Employee();
        employee.setName(dto.getUsername());
        employee.setPassword(passwordEncoder.encode(dto.getPassword()));
        employee.setEmail(dto.getEmail());
        

        return emRepository.save(employee);
}
}