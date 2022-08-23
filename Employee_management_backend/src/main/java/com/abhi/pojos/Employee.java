package com.abhi.pojos;

import java.util.Date;


import javax.persistence.*;
import javax.validation.constraints.*;

import org.springframework.lang.NonNull;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table
public class Employee {
	@Id 
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="Id")
	private int Id;
	
	@NotBlank(message = "Name is mandatory")
	@Column(name= "Name")
	private String Name;
	@Column(name="Age")
	@NotNull(message = "Age is mandatory")
	@Max(55)
	@Min(18)
	private int Age;
	@NotNull(message = "Salary is mandatory")
	@Column(name="Salary")
	private double Salary;
	@NotBlank(message = "Eamil is mandatory")
	@Email
	@Column(name= "Email")
	private String Email;
	@JsonFormat(pattern = "yyyy-mm-dd")
	@Column(name="JoiningDate")
	private Date JoiningDate;
	
	@NonNull
	@ManyToOne
	@JoinColumn(name = "Dept_Id")
	private Department department;

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public Date getJoiningDate() {
		return JoiningDate;
	}

	public void setJoiningDate(Date joiningDate) {
		JoiningDate = joiningDate;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public int getAge() {
		return Age;
	}

	public void setAge(int age) {
		Age = age;
	}

	public double getSalary() {
		return Salary;
	}

	public void setSalary(double salary) {
		Salary = salary;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}

	@Override
	public String toString() {
		return "Employee [Id=" + Id + ", Name=" + Name + ", Age=" + Age + ", Salary=" + Salary + ", Email=" + Email
				+ ", JoiningDate=" + JoiningDate + ", department=" + department + "]";
	}

	
	

}
