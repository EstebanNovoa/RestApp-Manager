package com.restaurant_manager.restaurant_manager.models.users.dto;

public class UserRegistryDTO {

    private long id;
    private String name;
    private String lastName;

    private String identificationNumber;
    private String email;

    private String dateOfBirth;

    private String phone;
    private String password;

    public UserRegistryDTO() {
    }

    public UserRegistryDTO(long id, String name, String lastName, String identificationNumber, String email, String dateOfBirth, String phone, String password) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.identificationNumber = identificationNumber;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.phone = phone;
        this.password = password;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getIdentificationNumber() {
        return identificationNumber;
    }

    public void setIdentificationNumber(String identificationNumber) {
        this.identificationNumber = identificationNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
