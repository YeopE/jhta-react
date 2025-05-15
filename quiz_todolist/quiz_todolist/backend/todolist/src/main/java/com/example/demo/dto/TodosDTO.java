package com.example.demo.dto;

import com.example.demo.entity.Todos;
import lombok.*;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class TodosDTO {
    private int id;
    private String task;
    private LocalDate date;
    private boolean completed = false;

    public TodosDTO(Todos t){
        this.id=t.getId();
        this.task=t.getTask();
        this.date=t.getDate();
        this.completed=t.isCompleted();
    }
    public Todos toEntity(){
        return Todos.builder()
                .id(id)
                .task(task)
                .date(date)
                .completed(completed)
                .build();
    }
}
