package com.example.back.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Document(collection="Student")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {
	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", dob=" + dob + ", level=" + level + ", division=" + division
				+ ", gender=" + gender + "]";
	}
	@Id
    public String id;
    @NotNull(message="required")
    public String name;
    @NotNull(message="required")
    public String dob;
    @NotNull(message="required")
    public String level;
    @NotNull(message="required")
    public String division;
    @NotNull(message="required")
    public String gender; 
    public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getLevel() {
		return level;
	}
	public void setLevel(String level) {
		this.level = level;
	}
	public String getDivision() {
		return division;
	}
	public void setDivision(String division) {
		this.division = division;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}

    
  
}
