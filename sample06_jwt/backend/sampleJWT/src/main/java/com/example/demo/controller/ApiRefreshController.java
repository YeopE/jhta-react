package com.example.demo.controller;

import com.example.demo.jwtutil.CustomJWTException;
import com.example.demo.jwtutil.JWTUtil;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;


@RestController
public class ApiRefreshController {
    @RequestMapping("/api/member/refresh") //RequestMapping = get,post 모두 받을 수 있다.
    public Map<String,Object> refresh(@RequestHeader("Authorization")String authHeader,
                                      @RequestParam("refreshToken")String refreshToken){
        if(refreshToken==null){
            throw new CustomJWTException("NULL_REFRESH");
        }
        if(authHeader==null || authHeader.length()<7){
            throw new CustomJWTException("INVALID_REFRESH");
        }
        String accessToken = authHeader.substring(7);
        if(!checkExpiredToken(accessToken)){//accessToken 유효시간이 지나지 않은 경우
            // 기존에 사용했던 accessToken과 refreshToken을그대로 다시 응답한다.
            return Map.of("accessToken",accessToken,"refreshToken",refreshToken);
        };
        Map<String,Object> claims = JWTUtil.validateToken(refreshToken);
        String newAccessToken = JWTUtil.generateToken(claims,1);//새로운 엑세스 토큰 만들기
        String newRefreshToken = refreshToken;
        if(checkTime((Long)claims.get("exp"))){//리프레쉬 토큰의 유효시간이 1시간 미만으로 남았는지 검사
            newRefreshToken=JWTUtil.generateToken(claims,60*2); //새로운 리프레쉬 토큰 만들기
        }
        return Map.of("accessToken",newAccessToken, "refreshToken", newRefreshToken);
    }
    //리프레쉬토큰의 유효시간이 1시간 미만이면 true 리턴
    private boolean checkTime(Long exp){
        //JWT exp를 날짜로 변환
        java.util.Date expDate = new java.util.Date((long) exp * (1000));
        //현재 시간과의 차이 계산 - 밀리세컨즈
        long gap = expDate.getTime() - System.currentTimeMillis();
        // 분 단위 계산
        long leftMin = gap / (1000 * 60);
        // 1시간도 안남았는지..
        return leftMin < 60;
    }

    private boolean checkExpiredToken(String token){
        try{
            JWTUtil.validateToken(token);
        }catch (CustomJWTException ex){
            System.out.println("checkExpiredToken==>" + ex.getMessage());
            if(ex.getMessage().equals("Expired")){
                return true;
            }
        }
        return false;
    }
}
