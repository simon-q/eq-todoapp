package com.eq.todoapp.controller;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

import com.eq.todoapp.model.Building;
import com.eq.todoapp.model.Person;
import com.eq.todoapp.model.Task;
import com.eq.todoapp.model.TaskRequestBody;
import com.eq.todoapp.repository.BuildingRepository;
import com.eq.todoapp.repository.PersonRepository;
import com.eq.todoapp.repository.TaskRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class TaskController {

	@Autowired
	TaskRepository taskRepository;

	@Autowired
	PersonRepository personRepository;

	@Autowired
	BuildingRepository buildingRepository;

	@GetMapping("/tasks")
	public List<Task> getAllTasks(
		@RequestParam(name = "personId", required = false) Long personId,
		@RequestParam(name = "buildingId", required = false) Long buildingId
	) {
		Optional<Person> person = Optional.empty();
		Optional<Building> building = Optional.empty();

		if (personId != null) {
			person = personRepository.findById(personId);
		}

		if (buildingId != null) {
			building = buildingRepository.findById(buildingId);
		}

		if (person.isPresent() && building.isPresent()) {
			return taskRepository.findByPersonAndBuilding(person.get(), building.get());
		}

		if (person.isPresent()) {
			return taskRepository.findByPerson(person.get());
		}

		if (building.isPresent()) {
			return taskRepository.findByBuilding(building.get());
		}

		return taskRepository.findAll();
	}

	@PostMapping("/tasks")
	public ResponseEntity<Task> createTask(@RequestBody() TaskRequestBody taskRequestBody) {
		Optional<Person> person = Optional.empty();
		Optional<Building> building = Optional.empty();

		if (taskRequestBody.text == null || taskRequestBody.text.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		Task task = new Task();
		task.setText(taskRequestBody.text);

		if (taskRequestBody.personId != null) {
			person = personRepository.findById(taskRequestBody.personId);
		}

		if (taskRequestBody.buildingId != null) {
			building = buildingRepository.findById(taskRequestBody.buildingId);
		}

		if (person.isPresent()) {
			task.setPerson(person.get());
		}

		if (building.isPresent()) {
			task.setBuilding(building.get());
		}

		taskRepository.save(task);
		return new ResponseEntity<>(task, HttpStatus.CREATED);
	}
}