package com.example.demo.serviceTest;

import com.example.demo.dto.MembersDTO;
import com.example.demo.service.MembersService;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;

import java.util.List;


@SpringBootTest
@Transactional
@Commit
public class MembersServiceTest {
    @Autowired
    private MembersService membersService;

    @Test
    public void insert(){
        MembersDTO dto = new MembersDTO(0,"aaa","1234",null);
        MembersDTO saveDTO = membersService.insert(dto);
        System.out.println(saveDTO);

        Assertions.assertNotNull(saveDTO.getId());
        Assertions.assertEquals("aaa",saveDTO.getUserid());
    }

    @Test
    public void list(){
        List<MembersDTO> dto = membersService.list();
        System.out.println(dto);
        Assertions.assertNotNull(dto);
    }

    @Test
    public void delete(){
        membersService.delete(1);
    }

    @Test
    public void update(){
        MembersDTO updateDTO = membersService.update(new MembersDTO(2,"aaa","1234",null));
        System.out.println("수정dto ==>" + updateDTO);
        Assertions.assertNotNull(updateDTO);
    }

    @Test
    public void detail(){
        MembersDTO dto = membersService.detail(6);
        System.out.println("조회결과:" + dto);
        Assertions.assertNotNull(dto);
    }
}
