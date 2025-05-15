package com.example.demo.service;

import com.example.demo.dto.MembersDTO;

import java.util.List;

public interface MembersService {
    MembersDTO insert(MembersDTO dto);
    List<MembersDTO> list();
    void delete(int id);
    MembersDTO update(MembersDTO dto);
    MembersDTO detail(int id);
    MembersDTO isMember(String userid, String password);
}
