package com.example.demo.dto;

import com.example.demo.entity.Members;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class MembersDTO {
    private int id;
    private String userid;
    private String password;
    private LocalDate createDate;
    public MembersDTO(Members m){
        this.id=m.getId();
        this.userid=m.getUserid();
        this.password=m.getPassword();
        this.createDate=m.getCreateDate();
    }
    public Members toEntity() {
        return Members.builder()
                .id(id)
                .userid(userid)
                .password(password)
                .createDate(createDate)
                .build();
    }
}
