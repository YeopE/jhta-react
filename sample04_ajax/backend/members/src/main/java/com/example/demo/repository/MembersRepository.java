package com.example.demo.repository;

import com.example.demo.entity.Members;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface MembersRepository extends JpaRepository<Members, Integer> {
    Members findByUseridAndPassword(@Param("userid")String userid,
                                    @Param("password")String password);
}
