package com.iamneo.security.entity;

import java.util.Optional;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Model{
	@Id
	private String name;
	private long Mobile;
	private int age;
	private String email;
	private String Vehicle_Number;
	private String licence_Number;
	public Model(String name, long mobile, int age, String email, String vehicle_Number, String licence_Number) {
		super();
		this.name = name;
		Mobile = mobile;
		this.age = age;
		this.email = email;
		Vehicle_Number = vehicle_Number;
		this.licence_Number = licence_Number;
	}
	public Model() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getMobile() {
		return Mobile;
	}
	public void setMobile(long mobile) {
		Mobile = mobile;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getVehicle_Number() {
		return Vehicle_Number;
	}
	public void setVehicle_Number(String vehicle_Number) {
		Vehicle_Number = vehicle_Number;
	}
	public String getLicence_Number() {
		return licence_Number;
	}
	public void setLicence_Number(String licence_Number) {
		this.licence_Number = licence_Number;
	}
	
	public static Optional<Model> map(Object object) {
		// TODO Auto-generated method stub
		return null;
	}
}