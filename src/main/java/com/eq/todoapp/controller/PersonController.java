package com.eq.todoapp.controller;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.eq.todoapp.model.Person;
import com.eq.todoapp.repository.PersonRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class PersonController {

	@Autowired
	PersonRepository personRepository;

	@GetMapping("/persons")
	public List<Person> getAllPersons() {
		return personRepository.findAll();
	}
}