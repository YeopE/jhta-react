package com.example.demo.service;

import com.example.demo.dto.TodosDTO;
import com.example.demo.entity.Todos;
import com.example.demo.repository.TodosRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class TodosServiceImpl implements TodosService{
    private final TodosRepository todosRepository;

    @Override
    public TodosDTO insert(TodosDTO dto) {
        Todos t = dto.toEntity();
        Todos todos = todosRepository.save(t);
        TodosDTO todosDTO = new TodosDTO(todos);
        return todosDTO;
    }

    @Override
    public List<TodosDTO> list() {
        List<Todos> todosList = todosRepository.findAll();
        List<TodosDTO> dtoList = todosList.stream().map(TodosDTO::new).toList();
        return dtoList;
    }

    @Override
    public void delete(int id) {
        todosRepository.deleteById(id);
    }

    @Override
    public TodosDTO update(TodosDTO dto) {
        Optional<Todos> todos = todosRepository.findById(dto.getId());
        if(todos.isPresent()){
            Todos t = todos.get();
            t.setId(dto.getId());
            t.setTask(dto.getTask());
            t.setDate(dto.getDate());
            t.setCompleted(dto.isCompleted());
            todosRepository.save(t);
            return new TodosDTO(t);
        }else {
            return null;
        }
    }

    @Override
    public TodosDTO detail(int id) {
        Optional<Todos> todos = todosRepository.findById(id);
        if(todos.isPresent()){
            return new TodosDTO(todos.get());
        }else {
            return null;
        }
    }
}
