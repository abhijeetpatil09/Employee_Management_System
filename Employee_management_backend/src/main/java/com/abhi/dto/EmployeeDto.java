package com.abhi.dto;

public class EmployeeDto {
	private int id;
	private String name;
	private int age;
	private double salary;
	private String email;
	public EmployeeDto(int id, String name, int age, double salary, String email) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.salary = salary;
		this.email = email;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		return "EmployeeDto [id=" + id + ", name=" + name + ", age=" + age + ", salary=" + salary + ", email=" + email
				+ "]";
	}
	
	

}
