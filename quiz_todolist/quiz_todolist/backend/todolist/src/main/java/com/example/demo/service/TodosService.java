package com.example.demo.service;

import com.example.demo.dto.TodosDTO;

import java.util.List;

public interface TodosService {
    TodosDTO insert(TodosDTO dto);
    List<TodosDTO> list();
    void delete(int id);
    TodosDTO update(TodosDTO dto);
    TodosDTO detail(int id);
}
