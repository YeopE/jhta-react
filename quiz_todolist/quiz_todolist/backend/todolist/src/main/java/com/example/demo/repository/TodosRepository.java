package com.example.demo.repository;

import com.example.demo.entity.Todos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodosRepository extends JpaRepository<Todos, Integer> {
}
