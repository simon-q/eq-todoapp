package com.eq.todoapp.repository;

import java.util.List;

import com.eq.todoapp.model.Building;
import com.eq.todoapp.model.Person;
import com.eq.todoapp.model.Task;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

  List<Task> findByBuilding(Building building, Sort sort);
  List<Task> findByPerson(Person person, Sort sort);
  List<Task> findByPersonAndBuilding(Person person, Building building, Sort sort);
}