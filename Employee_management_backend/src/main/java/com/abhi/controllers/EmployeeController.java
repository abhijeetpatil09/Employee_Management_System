package com.abhi.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.abhi.daos.EmployeeRepository;
import com.abhi.pojos.EmpCount;
import com.abhi.pojos.Employee;
import com.abhi.services.EmpCountService;
import com.abhi.services.EmployeeService;

import io.swagger.annotations.Api;

@CrossOrigin("*")
@RestController
@RequestMapping("/emp")
@Api(value = "All operations On employee table")
public class EmployeeController {
	@Autowired
	private EmployeeService es;

	@Autowired
	private EmpCountService empCountService;

	@Autowired
	private EmployeeRepository er;

	@PostMapping("/add")
	private int saveCustomer(@RequestBody Employee emp)
	{
		es.saveOrUpdate(emp);
		return emp.getId();
	}
	@GetMapping("/show")
	private List<Employee> getAllEmployees()
	{
		return es.getAllEmployees();
	}
	@GetMapping("/show/{id}")
	private Employee getCustomer(@PathVariable("id") int id)
	{
		return es.getEmployeeById(id);

	}
	@PutMapping("/update")
	private Employee update(@RequestBody Employee emp)
	{
		es.saveOrUpdate(emp);
		return emp;
	}
	@DeleteMapping("/delete/{id}")
	public void deleteEmployee(@PathVariable("id") int id) 
	{
		es.delete(id);
	}
	@GetMapping("/employee")
	public List<Employee> sort(@RequestParam String order)
	{
		return es.getByDescOrder();
	}

	@GetMapping("/employees")
	public List<Employee> sortAsc(@RequestParam String order)
	{
		return es.getByAscOrder();
	}
	@GetMapping("/emp")
	public ResponseEntity<List<EmpCount>> getAllEmployeeByDepartmentId(){
		List<EmpCount> list = empCountService.getAllEmployeeByDepartmentId();
		if (list.size() <= 0)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

		return ResponseEntity.status(HttpStatus.OK).body(list);
	}
	@GetMapping("/paging/{page}/{size}")
	public ResponseEntity<Map<String, Object>> getAllEmployeesByPage( @PathVariable("page") int page, @PathVariable("size") int size) {



		try {
			List<Employee> employee = new ArrayList<Employee>();
			Pageable pages = PageRequest.of(page, size);

			Page<Employee> pageTuts;
			pageTuts = er.findAll(pages);
			employee = pageTuts.getContent();

			Map<String, Object> response = new TreeMap<>();
			response.put("employee",employee);
			response.put("currentPage", pageTuts.getNumber());
			response.put("totalItems", pageTuts.getTotalElements());
			response.put("totalPages", pageTuts.getTotalPages());
			
			return new ResponseEntity<>(response, HttpStatus.OK);
		}
		catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
