package com.example.demo.serviceTest;

import com.example.demo.dto.TodosDTO;
import com.example.demo.service.TodosService;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;

import java.time.LocalDate;
import java.util.List;

@SpringBootTest
@Transactional
@Commit
public class TodosServiceTest {
    @Autowired
    private TodosService todosService;

    @Test
    public void insert(){
        TodosDTO dto = new TodosDTO(0,"운동하기", LocalDate.now(),false);
        TodosDTO saveDTO = todosService.insert(dto);
        System.out.println(saveDTO);

        Assertions.assertEquals("운동하기",saveDTO.getTask());
    }

    @Test
    public void list(){
        List<TodosDTO> dto = todosService.list();
        System.out.println(dto);
        Assertions.assertNotNull(dto);
    }

    @Test
    public void delete(){
        todosService.delete(6);
    }

    @Test
    public void update(){
        LocalDate date = LocalDate.of(2025,5,30);
        TodosDTO updateDTO = todosService.update(new TodosDTO(7,"운동하기",date,true));
        System.out.println("수정dto ==>" + updateDTO);
        Assertions.assertNotNull(updateDTO);
    }

    @Test
    public void detail(){
        TodosDTO dto = todosService.detail(7);
        System.out.println("조회결과:" + dto);
        Assertions.assertNotNull(dto);
    }
}
