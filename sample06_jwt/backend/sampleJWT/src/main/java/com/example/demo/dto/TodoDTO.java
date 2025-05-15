package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class TodoDTO {
    private Long tno;
    private String title;
    private String content;
    private boolean complete;
    private LocalDate doneDate;
}
