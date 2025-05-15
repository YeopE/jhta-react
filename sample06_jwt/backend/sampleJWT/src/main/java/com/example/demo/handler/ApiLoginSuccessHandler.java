package com.example.demo.handler;

import com.example.demo.dto.MemberDTO;
import com.example.demo.jwtutil.JWTUtil;
import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

//로그인 성공했을때 호출되는 클래스 - 로그인 성공후 수행할 작업을 구현(jwt토큰을 생성해서 응답한다.)
public class ApiLoginSuccessHandler implements AuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        MemberDTO dto = (MemberDTO)authentication.getPrincipal();
        Map<String,Object> claims=dto.getClaims();
        String accessToken = JWTUtil.generateToken(claims, 1);
        String refreshToken = JWTUtil.generateToken(claims, 60*2); //2시간
        claims.put("accessToken", accessToken);
        claims.put("refreshToken", refreshToken);
        Gson gson = new Gson();
        String jsonStr = gson.toJson(claims);
        response.setContentType("application/json;charset=utf-8");
        PrintWriter pw = response.getWriter();
        pw.println(jsonStr);
        pw.close();
    }
}
