package com.example.demo.service;

import com.example.demo.dto.MembersDTO;
import com.example.demo.entity.Members;
import com.example.demo.repository.MembersRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

// 클래스 완성하고 테스트클래스 만들어서 각 기능 테스트해보세요.
@Service
@Transactional
@RequiredArgsConstructor
public class MembersServiceImpl implements MembersService{
    private final MembersRepository membersRepository;

    @Override
    public MembersDTO insert(MembersDTO dto) {
        Members m = dto.toEntity();
        Members members = membersRepository.save(m);
        membersRepository.flush();
        MembersDTO membersDTO = new MembersDTO(members);
        return membersDTO;
    }

    @Override
    public List<MembersDTO> list() {
        List<Members> membersList = membersRepository.findAll();
        List<MembersDTO> dtoList = membersList.stream().map(MembersDTO::new).toList();
        return dtoList;
    }


    @Override
    public void delete(int id) {
        membersRepository.deleteById(id);
    }

    @Override
    public MembersDTO update(MembersDTO dto) {
        Optional<Members> members = membersRepository.findById(dto.getId());
        if (members.isPresent()) {
            Members mem = members.get();
            mem.setId(dto.getId());
            mem.setUserid(dto.getUserid());
            mem.setPassword(dto.getPassword());
            membersRepository.save(mem);
            return new MembersDTO(mem);
        } else {
            return null;
        }
    }

    @Override
    public MembersDTO detail(int id) {
//        return new MembersDTO(membersRepository.findById(id).get());
        Optional<Members> members = membersRepository.findById(id);
        if(members.isPresent()){
            return new MembersDTO(members.get());
        }else {
            return null;
        }
    }

    @Override
    public MembersDTO isMember(String userid, String password){
        Members members = membersRepository.findByUseridAndPassword(userid,password);
        System.out.println("members" + members);
        return new MembersDTO(members);
    }
}
