package com.eq.todoapp.controller;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.eq.todoapp.model.Building;
import com.eq.todoapp.repository.BuildingRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class BuildingController {

	@Autowired
	BuildingRepository buildingRepository;

	@GetMapping("/buildings")
	public List<Building> getAllBuildings() {
		return buildingRepository.findAll();
	}
}