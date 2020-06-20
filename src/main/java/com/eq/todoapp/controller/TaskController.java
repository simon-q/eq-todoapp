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
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
			return taskRepository.findByPersonAndBuilding(person.get(), building.get(), Sort.by(Sort.Direction.DESC, "updatedAt"));
		}

		if (person.isPresent()) {
			return taskRepository.findByPerson(person.get(), Sort.by(Sort.Direction.DESC, "updatedAt"));
		}

		if (building.isPresent()) {
			return taskRepository.findByBuilding(building.get(), Sort.by(Sort.Direction.DESC, "updatedAt"));
		}

		return taskRepository.findAll(Sort.by(Sort.Direction.DESC, "updatedAt"));
	}

	@PostMapping("/tasks")
	public ResponseEntity<Task> createTask(@RequestBody() TaskRequestBody taskRequestBody) {
		Optional<Person> person = Optional.empty();
		Optional<Building> building = Optional.empty();

		Task task = new Task();

		if (taskRequestBody.text == null || taskRequestBody.text.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		} else {
			task.setText(taskRequestBody.text);
		}

		if (taskRequestBody.done == null) {
			task.setDone(false);
		} else {
			task.setDone(taskRequestBody.done);
		}

		if (taskRequestBody.personId != null) {
			person = personRepository.findById(taskRequestBody.personId);
			if (person.isPresent()) {
				task.setPerson(person.get());
			}
		}

		if (taskRequestBody.buildingId != null) {
			building = buildingRepository.findById(taskRequestBody.buildingId);
			if (building.isPresent()) {
				task.setBuilding(building.get());
			}
		}

		taskRepository.save(task);

		return new ResponseEntity<>(task, HttpStatus.CREATED);
	}

	@PutMapping("/tasks/{id}")
	public ResponseEntity<Task> updateTask(
		@PathVariable("id") Long id,
		@RequestBody() TaskRequestBody taskRequestBody
	) {
		Optional<Person> person = Optional.empty();
		Optional<Building> building = Optional.empty();

		if (id == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		Optional<Task> task = taskRepository.findById(id);

		if (task.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		Task originalTask = task.get();

		if (taskRequestBody.text != null && !taskRequestBody.text.isEmpty()) {
			originalTask.setText(taskRequestBody.text);
		}

		if (taskRequestBody.done != null) {
			originalTask.setDone(taskRequestBody.done);
		}

		if (taskRequestBody.personId != null) {
			person = personRepository.findById(taskRequestBody.personId);
			if (person.isPresent()) {
				originalTask.setPerson(person.get());
			}
		} else {
			originalTask.setPerson(null);
		}

		if (taskRequestBody.buildingId != null) {
			building = buildingRepository.findById(taskRequestBody.buildingId);
			if (building.isPresent()) {
				originalTask.setBuilding(building.get());
			}
		} else {
			originalTask.setBuilding(null);
		}

		taskRepository.save(originalTask);

		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@DeleteMapping("/tasks/{id}")
	public ResponseEntity<Task> updateTask(@PathVariable("id") Long id) {

		if (id == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		if (!taskRepository.existsById(id)) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		taskRepository.deleteById(id);

		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}