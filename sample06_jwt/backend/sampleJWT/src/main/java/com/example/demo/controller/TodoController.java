package com.example.demo.controller;

import com.example.demo.dto.TodoDTO;
import com.example.demo.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/todos")
public class TodoController {
    private final TodoService todoService;

    @GetMapping("/list")
    public List<TodoDTO> list() {
        return todoService.getList();
    }

    @PostMapping("/")
    public Map<String,Long> register(@RequestBody TodoDTO dto) {
        Long tno = todoService.register(dto);
        return Map.of("tno",tno);
    }
}
