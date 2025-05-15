package com.example.demo.repository;

import com.example.demo.entity.Member;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MemberRepository extends JpaRepository<Member, String> {
    // 사용자(email)의 role 조회하기

    @EntityGraph(attributePaths = {"memberRoleList"})
    @Query("select m from Member m where m.email=:email")
    Member getWithRoles(@Param("email")String email);
}
