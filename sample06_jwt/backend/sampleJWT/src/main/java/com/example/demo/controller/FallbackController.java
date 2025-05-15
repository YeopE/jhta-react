package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FallbackController {
    // 확장자 없는 모든 요청에 대해 index.html로 forword한다.
    @RequestMapping(value = "{path:[^\\.]*}")
    public String forward(){
        return "forward:/index.html";
    }
}
