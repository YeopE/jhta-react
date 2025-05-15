package com.example.demo.entity;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class Member {
    @Id
    private String email;
    private String pw;
    private String nickname;
    private boolean social;

    @ElementCollection //엔티티가 아니라 값 타입 컬렉션을 매핑할때 사용(enum인 경우 사용)
    @Builder.Default
    /*
        builder로 생성시 디폴트값을 지정할 수 있다.
        예) @Builder.Default String name="이길동";
        List인 경우는 @Builder.Default 어노테이션을 안쓰면 null 로 초기화 된다. -> 어노테이션을 사용하면 빈 배열이 생성된다.
    */

    private List<MemberRole> memberRoleList = new ArrayList<>();

    public void addRole(MemberRole role){
        memberRoleList.add(role);
    }
    public void clearRole(){
        memberRoleList.clear();
    }
    public void setSocial(boolean social){
        this.social = social;
    }
}
