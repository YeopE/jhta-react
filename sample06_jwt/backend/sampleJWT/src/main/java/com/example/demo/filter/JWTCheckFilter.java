package com.example.demo.filter;

import com.example.demo.dto.MemberDTO;
import com.example.demo.jwtutil.JWTUtil;
import com.google.gson.Gson;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.Map;

//모든요청에 대해서 필터가 동작되는 필터 만들기
public class JWTCheckFilter extends OncePerRequestFilter {

    //필터가 동작되지 않을 경로 설정
    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        String path = request.getRequestURI();
        System.out.println("요청경로:" + path);
        String email = request.getParameter("email");
        String pw = request.getParameter("pw");
        System.out.println("email:" + email + ",pw" + pw);
        //if(path.startsWith("/api/member")){
        //    return true; //체크하지 않겠다.
        //}
        //return false;//필터로 체크하겠다.
        
        if(path.startsWith("/api/todos")){ // 필터로 체크하기
            return false;
        }
        return true;
    }

    //필터에서 수행할 작업 구현 - 유효한 jwt 토큰값 검증하기
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            String authorizationStr = request.getHeader("Authorization");
            //"Beadrer AB123XXXXXXXX"; => "Beadrer JWT값"
            String accessToken = authorizationStr.substring(7);
            // 사용자가 보내온 jwt토큰이 유효한 토큰인지 검사
            Map<String, Object> claims = JWTUtil.validateToken(accessToken);
            String email = (String) claims.get("email");
            String pw = (String) claims.get("pw");
            String nickname = (String) claims.get("nickname");
            Boolean social = (Boolean) claims.get("social");
            List<String> roleNames = (List<String>) claims.get("roleName");
            //사용자 정보를 꺼내와 UserDetails객체(User객체)에 저장하기
            MemberDTO memberDTO = new MemberDTO(email,pw,nickname,social.booleanValue(),roleNames);
            // 인증된 사용자 정보를 스프링시큐리티 컨텍스트에 등록하기 //
            //UsernamePasswordAutherticationToken : 사용자이름과 비밀번호를 기반으로 인증정보를 나타내는 클래스
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(memberDTO.getUsername(),memberDTO.getPassword(),memberDTO.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            // //////////////////////////////////////////////////////////////////
            filterChain.doFilter(request,response);
        }catch (Exception e){
            e.printStackTrace();
            Gson gson = new Gson();
            String jsonStr = gson.toJson(Map.of("error","ERROR_ACCESS_TOKEN"));
            response.setContentType("application/json;charset=utf-8");
            PrintWriter pw = response.getWriter();
            pw.println(jsonStr);
            pw.close();
        }
    }
}
