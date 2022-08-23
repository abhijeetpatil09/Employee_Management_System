package com.abhi.pojos;

import javax.persistence.*;

@Entity
@Table
public class Department {
	@Id 
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="Dept_Id")
	
	int DeptId;
	
	@Column(name="Dept_Name")
	String DeptName;

	public int getDeptId() {
		return DeptId;
	}

	public void setDeptId(int deptId) {
		DeptId = deptId;
	}

	public String getDeptName() {
		return DeptName;
	}

	public void setDeptName(String deptName) {
		DeptName = deptName;
	}

}
