package com.example.demo.controller;

import com.example.demo.dto.MembersDTO;
import com.example.demo.service.MembersServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin("*")
public class MembersController {
    private final MembersServiceImpl membersService;

    @PostMapping("/members")
    public String insert(@RequestBody MembersDTO dto) {
        MembersDTO result = membersService.insert(dto);
        if(result != null) {
            return "success";
        }
        return "fail";
    }

    @GetMapping("/members")
    public List<MembersDTO> list(){
        return membersService.list();
    }

    //delete
    @DeleteMapping("/members/{id}")
    public String delete(@PathVariable("id")int id){
        try {
            membersService.delete(id);
            return "success";
        }catch (Exception e){
            System.out.println(e.getMessage());
            return "fail";
        }
    }

    //update
    @PutMapping("/members")
    public String update(@RequestBody MembersDTO dto) {
        MembersDTO result = membersService.update(dto);
        if(result!=null) {
            return "success";
        }
        return "fail";
    }

    @GetMapping("/members/{id}")
    public MembersDTO detail(@PathVariable("id")int id){
        MembersDTO result = membersService.detail(id);
        return result;
    }

    @PostMapping("/login")
    public ResponseEntity<MembersDTO> login(@RequestParam("userid")String userid,
                                            @RequestParam("password")String password){
        System.out.println("userid" + userid);
        System.out.println("password" + password);
        MembersDTO dto = membersService.isMember(userid,password);
        return new ResponseEntity<MembersDTO>(dto, HttpStatus.OK);
    }
}
