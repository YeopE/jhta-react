package com.example.demo.service;

import com.example.demo.dto.TodoDTO;
import com.example.demo.entity.Todo;
import com.example.demo.repository.TodoRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class TodoServiceImpl implements TodoService{
    private final TodoRepository todoRepository;

    public Long register(TodoDTO dto){
        Todo tdo = dtoToEntity(dto);
        Todo result = todoRepository.save(tdo);
        return result.getTno();
    }

    @Override
    public TodoDTO get(Long tno) {
        Optional<Todo> result = todoRepository.findById(tno);
        Todo todo = result.orElseThrow(); //orElseThrow는 Optinal의 인자가 null일 경우 예외를 발생시킨다.
        return entityToDTO(todo);
    }

    @Override
    public List<TodoDTO> getList() {
        List<Todo> list = todoRepository.findAll();
        List<TodoDTO> result = list.stream().map(todo->entityToDTO(todo)).toList();
        return result;
    }


    @Override
    public void modify(TodoDTO dto) {

    }

    @Override
    public void remove(Long tno) {

    }



}
