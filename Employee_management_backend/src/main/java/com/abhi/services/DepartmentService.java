package com.abhi.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abhi.daos.DepartmentRepository;
import com.abhi.pojos.Department;

@Service
public class DepartmentService {
	@Autowired
	DepartmentRepository dr;
		public void saveOrUpdate(Department dept)
		{
			dr.save(dept);
		}
		public List<Department> getAllDepartments()
		{
			List<Department> dept = new ArrayList<Department>();
			dr.findAll().forEach(dept::add);
			return dept;
		}
		public Department getDepartmentById(int deptId)
		{
			return dr.findById(deptId).get();
		}
		public void update(Department dept, int deptId)
		{
			dr.save(dept);
		}
		public void delete(int deptId)
		{
			dr.deleteById(deptId);
		}

}
