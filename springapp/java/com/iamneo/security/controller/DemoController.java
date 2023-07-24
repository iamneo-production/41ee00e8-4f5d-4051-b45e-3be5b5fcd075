package com.iamneo.security.controller;

import java.util.List;
import java.util.Optional;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.repository.ModelRepository;
import com.iamneo.security.repository.UserRepository;

import  com.iamneo.security.entity.Model;
import com.iamneo.security.entity.User;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "*" ,allowedHeaders = "*")
@RestController
@RequestMapping("/api/v1/demo")
@RequiredArgsConstructor
public class DemoController {
@Autowired
UserRepository repo;
@Autowired
ModelRepository repo1;
    @GetMapping
    public ResponseEntity<String> sayHello() {
        return ResponseEntity.ok("Hello! Siva Prasanna");
    }

@PostMapping("/post")
public Model create(@RequestBody Model a)
{
	return repo.save(a);
}

@GetMapping("/get/{name}")
public ResponseEntity<Model> getEmployeeById(@PathVariable String name) {
    Optional<Model> modelOptional = repo1.findById(name);
    
    return modelOptional.map(ResponseEntity::ok)
                        .orElse(ResponseEntity.notFound().build());
}

//@PutMapping("/update/{name}")
//public ResponseEntity<Model> updateUserDetails(@PathVariable String name, @RequestBody Model updatedUser) {
//    Model model = findByName(name);
//    if (model == null) {
//        return ResponseEntity.notFound().build();
//    }
//
//    // Update the user details
//    model.setName(updatedUser.getName());
//    model.setEmail(updatedUser.getEmail());
//    model.setAge(updatedUser.getAge());
//    model.setMobile(updatedUser.getMobile());
//    model.setVehicle_Number(updatedUser.getVehicle_Number());
//    model.setLicence_Number(updatedUser.getLicence_Number());
//
//    // Save the updated user
//    repo1.save(model);
//
//    return ResponseEntity.ok(model);
//}
//
//private Model findByName(String name) {
//	// TODO Auto-generated method stub
//	return null;
//}

@PutMapping("/update/{name}/")
public ResponseEntity<Model> renewPolicyAmount(@PathVariable String name) {
    Optional<Model> optionalInsurance = repo1.findById(name);

    if (optionalInsurance.isPresent()) {
        Model existingInsurance = optionalInsurance.get();
        // Update the amount field with the newAmount
        

        // Save the updated insurance object
       repo1.save(existingInsurance);
        return ResponseEntity.ok(existingInsurance); // Return the updated insurance object with 200 OK status
    } else {
        return ResponseEntity.notFound().build(); // Return 404 Not Found if insurance with given ins_Id is not found
    }
}




    
}
