package com.example.demo.service;

import com.example.demo.dto.TodoDTO;
import com.example.demo.entity.Todo;

import java.util.List;

public interface TodoService {
    TodoDTO get(Long tno);
    Long register(TodoDTO dto);
    void modify(TodoDTO dto);
    void remove(Long tno);
    List<TodoDTO> getList();

    // service에서도 dto -> Entity , Entity -> dto로 변환하는 객체를 만들어줄 수 있다.
    default TodoDTO entityToDTO(Todo todo){
        TodoDTO dto = TodoDTO
                .builder()
                .tno(todo.getTno())
                .title(todo.getTitle())
                .content(todo.getContent())
                .complete(todo.isComplete())
                .doneDate(todo.getDoneDate())
                .build();
        return dto;
    }
    default Todo dtoToEntity(TodoDTO todoDTO){
        Todo todo = Todo
                .builder()
                .tno(todoDTO.getTno())
                .title(todoDTO.getTitle())
                .content(todoDTO.getContent())
                .complete(todoDTO.isComplete())
                .doneDate(todoDTO.getDoneDate())
                .build();
        return todo;
    }
}
