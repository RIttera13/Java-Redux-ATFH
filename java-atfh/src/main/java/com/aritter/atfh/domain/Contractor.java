package com.aritter.atfh.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity
public class Contractor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message = "Firstname Cannot Be Blank.")
	private String firstname;
	@NotBlank(message = "Lastname Cannot Be Blank.")
	private String lastname;
	@NotBlank(message = "Role Cannot Be Blank.")
	private String role;
	@NotBlank(message = "Address Cannot Be Blank.")
	private String address;
	@NotBlank(message = "Status Cannot Be Blank.")
	private String status;
	@NotBlank(message = "Email Cannot Be Blank.")
	private String email;
	
	public Contractor() {
	}
	
	public Long getId() { 
		return id;
	}
	
	public String getFirstname() {
		return firstname;
	}
	
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	
	public String getLastname() {
		return lastname;
	}
	
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	
	public String getRole() {
		return role;
	}
	
	public void setRole(String role) {
		this.role = role;
	}
	
	public String getAddress() {
		return address;
	}
	
	public void setAdress(String address) {
		this.address = address;
	}
	
	public String getStatus() {
		return status;
	}
	
	public void setStatus(String status) {
		this.status = status;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
}
