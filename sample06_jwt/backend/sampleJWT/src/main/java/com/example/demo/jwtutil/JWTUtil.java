package com.example.demo.jwtutil;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.Map;

public class JWTUtil {
    //키값은 30자 이상으로 작성한다.
    private static String key="1234567890123456789012345678901234567890";

    // jwt 토큰 만드는 메소드
    public static String generateToken(Map<String, Object> valueMap,int min){
        SecretKey key = null;
        try {
            key = Keys.hmacShaKeyFor(JWTUtil.key.getBytes("UTF-8")); //비밀 키 생성 (문자열 키를 byte로 변환 -> SecretKey 객체 생성)
        }catch (Exception e){
            e.printStackTrace();
            throw new RuntimeException(e.getMessage());
        }
        String jwtStr = Jwts.builder()
                .header().type("JWT")// 헤더 명시
                .and()
                .subject(String.valueOf(valueMap.get("email"))) // sub: 토큰 주인(email)
                .claims(valueMap) // payload에 사용자 정의 데이터 넣기
                .issuedAt(Date.from(ZonedDateTime.now().toInstant())) //토큰이 생성된 시간(발급 시간)
                .expiration(Date.from(ZonedDateTime.now().plusMinutes(min).toInstant())) //토큰이 유효한 시간 (만료 시간)
                .signWith(key) // 키로 서명
                .compact(); // 최종 문자열 토큰 생성
        return jwtStr;
    }

    // jwt이 유효한지 검사하는 메소드
    public static Map<String,Object> validateToken(String token){
        Map<String,Object> claim=null;
        try {
            SecretKey key = Keys.hmacShaKeyFor(JWTUtil.key.getBytes("UTF-8"));
            claim = Jwts.parser()
                    .verifyWith(key) //시큐릿키값 설정 (키로 서명 검증)
                    .build()
                    .parseClaimsJws(token) //유효한 토큰값이 아니면 예외발생 (서명,만료,구조 모두 검증)
                    .getPayload(); // payload 데이터 추출
            //* MalformedJwtException
            // ==> 'invalid token' - 헤더 또는 payload를 구분 분석 할 수 없음; 'jwt malformed' - 토큰에 3개의 구성 요소가 없음(점으로 구분함)
        }catch (MalformedJwtException malformedJwtException) {
            throw new CustomJWTException("MalFormed");
        }catch (ExpiredJwtException expiredJwtException) {
            throw new CustomJWTException("Expired");
        }catch (InvalidClaimException invalidClaimException) {
            throw new CustomJWTException("Invalid");
        }catch (JwtException jwtException){
            throw new CustomJWTException("JWTError");
        }catch (Exception e){
            throw new CustomJWTException("Error");
        }
        return claim;
    }
}
