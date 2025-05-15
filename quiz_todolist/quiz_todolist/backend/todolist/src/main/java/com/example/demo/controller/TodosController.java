package com.example.demo.controller;

import com.example.demo.dto.TodosDTO;
import com.example.demo.service.TodosServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
public class TodosController {
    private final TodosServiceImpl todosService;

    @PostMapping("/todolist")
    public String insert(@RequestBody TodosDTO dto){
        TodosDTO result = todosService.insert(dto);
        if(result != null) {
            return "success";
        }
        return "fail";
    }


    @GetMapping("/todolist")
    public List<TodosDTO> list(){
        return todosService.list();
    }

    @DeleteMapping("/todolist/{id}")
    public String delete(@PathVariable("id")int id){
        try{
            todosService.delete(id);
            return "success";
        }catch (Exception e){
            System.out.println(e.getMessage());
            return "fail";
        }
    }

    @PutMapping("/todolist")
    public String update(@RequestBody TodosDTO dto){
        TodosDTO result = todosService.update(dto);
        if(result!=null){
            return "success";
        }
        return "fail";
    }

    @GetMapping("/todolist/{id}")
    public TodosDTO todosDTO(@PathVariable("id")int id){
        TodosDTO result = todosService.detail(id);
        return result;
    }
}
