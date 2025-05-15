package com.example.demo;

import com.example.demo.entity.Member;
import com.example.demo.entity.MemberRole;
import com.example.demo.repository.MemberRepository;
import com.example.demo.service.CustomUserDetailService;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.annotation.Commit;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Commit
@Transactional
public class MemberTest {
    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private CustomUserDetailService customUserDetailService;

    @Test
    public void insert(){
        for(int i = 1; i <= 15; i++){
            Member member = Member.builder()
                    .email("hello" + i)
                    .pw(passwordEncoder.encode("1234"))
                    .nickname("hello" + i)
                    .social(false)
                    .build();

            if(i >= 5){
                member.addRole(MemberRole.ADMIN);
            }else{
                member.addRole(MemberRole.MANAGER);
            }
            memberRepository.save(member);
        }
    }

    @Test
    public void userDetails() {
        // given
        String username = "hello1";

        // when
        UserDetails userDetails = customUserDetailService.loadUserByUsername(username);

        System.out.println("userDetails===>" + userDetails);
        // then
        assertNotNull(userDetails);  // UserDetails 객체가 null이 아니어야 함
        assertEquals("hello1", userDetails.getUsername());  // 이메일과 일치하는지 확인
        assertFalse(userDetails.getAuthorities().isEmpty()); // 권한이 존재하는지 확인
    }
}
