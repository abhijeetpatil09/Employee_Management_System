package com.abhi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abhi.daos.DepartmentRepository;
import com.abhi.pojos.Department;
import com.abhi.services.DepartmentService;

import io.swagger.annotations.Api;

@CrossOrigin("*")
@RestController
@RequestMapping("/department")
@Api(value = "All operations On department table")
public class DepartmentController {
@Autowired
DepartmentService ds;
DepartmentRepository dr;

	@PostMapping("/add")
	private int saveCustomer(@RequestBody Department dept)
	{
		ds.saveOrUpdate(dept);
		return dept.getDeptId();
	}
	@GetMapping("/show")
	private List<Department> getAllDepartments()
	{
		return ds.getAllDepartments();
	}
	@GetMapping("/show/{deptId}")
	private Department getDepartment(@PathVariable("deptId") int deptId)
	{
		return ds.getDepartmentById(deptId);
		
	}
	@PutMapping("/update")
	private Department update(@RequestBody Department dept)
	{
		ds.saveOrUpdate(dept);
		return dept;
	}
	@DeleteMapping("/delete/{deptId}")
	public void deleteDepartment(@PathVariable("deptId") int deptId) 
	{
		ds.delete(deptId);
	}
	
}
