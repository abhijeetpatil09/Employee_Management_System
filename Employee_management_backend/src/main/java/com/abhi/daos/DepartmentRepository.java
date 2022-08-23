package com.abhi.daos;

import org.springframework.data.repository.CrudRepository;

import com.abhi.pojos.Department;

public interface DepartmentRepository extends CrudRepository<Department, Integer> {


}
