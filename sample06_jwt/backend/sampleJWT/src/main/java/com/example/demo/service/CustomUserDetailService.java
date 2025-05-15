package com.example.demo.service;

import com.example.demo.dto.MemberDTO;
import com.example.demo.entity.Member;
import com.example.demo.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailService implements UserDetailsService {
    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Member member = memberRepository.getWithRoles(username);
        if(member==null){
            throw new UsernameNotFoundException("Not Found!");
        }
        MemberDTO dto = new MemberDTO(member.getEmail(), member.getPw(), member.getNickname(), member.isSocial(),
                member.getMemberRoleList().stream().map(r->r.name()).toList());
        return dto;
    }
}
