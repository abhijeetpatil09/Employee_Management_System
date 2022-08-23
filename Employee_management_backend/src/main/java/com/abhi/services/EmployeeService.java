package com.abhi.services;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abhi.daos.EmployeeRepository;
import com.abhi.pojos.Employee;

@Service
public class EmployeeService {
	@Autowired
	EmployeeRepository er;
		public void saveOrUpdate(Employee emp)
		{
			er.save(emp);
		}
		public List<Employee> getAllEmployees()
		{
			List<Employee> emp = new ArrayList<Employee>();
			er.findAll().forEach(emp::add);
			return emp;
		}
		public Employee getEmployeeById(int id)
		{
			return er.findById(id).get();
		}
		public void update(Employee emp, int id)
		{
			er.save(emp);
		}
		public void delete(int id)
		{
			er.deleteById(id);
		}

		public List<Employee> getByDescOrder()
        {
            List<Employee> employees = getAllEmployees();
            return employees.stream().sorted(Comparator.comparing(Employee::getName).reversed()).collect(Collectors.toList());
        }

        public List<Employee> getByAscOrder()
        {
            List<Employee> employees = getAllEmployees();
            return employees.stream().sorted(Comparator.comparing(Employee::getName)).collect(Collectors.toList());
        }

//        public Page<Employee> findEmployeesWithPagination(int offset,int pageSize){
//            Page<Employee> employee = er.findAll(PageRequest.of(offset, pageSize));
//            return  employee;
//        }
}
