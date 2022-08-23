package com.abhi.services;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abhi.daos.EmployeeRepository;
import com.abhi.pojos.EmpCount;

@Service
public class EmpCountService {
	@Autowired
    private EmployeeRepository employeeRepository;

    public List<EmpCount> getAllEmployeeByDepartmentId(){
        List<Object[]> result = employeeRepository.getEmpCountByDeptId();
        List<EmpCount> list=new ArrayList<EmpCount>();
        if(result != null && !result.isEmpty()){
           for (Object[] object : result) {
               EmpCount emp=new EmpCount();
               emp.setDept(Integer.parseInt(object[0].toString()));
               //System.out.println(Integer.parseInt(object[0].toString()));
               emp.setEmployeeCount(new BigInteger(object[1].toString()).intValue());;
               //System.out.println(new BigInteger(object[1].toString()).intValue());
               list.add(emp);
           }
        }
        //System.out.println(list);
        return list;
    }

}
