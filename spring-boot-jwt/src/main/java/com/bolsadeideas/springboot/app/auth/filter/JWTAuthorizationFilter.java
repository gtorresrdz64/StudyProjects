package com.bolsadeideas.springboot.app.auth.filter;

import com.bolsadeideas.springboot.app.auth.service.JWTService;

import com.bolsadeideas.springboot.app.auth.service.JWTServiceImpl;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.util.Base64Utils;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


public class JWTAuthorizationFilter extends BasicAuthenticationFilter {

    public static final String SECRET = Base64Utils.encodeToString("Alguna.Clave.Secreta.123456".getBytes());
    private JWTService jwtService;

    public JWTAuthorizationFilter(AuthenticationManager authenticationManager,JWTService jwtService) {
        super(authenticationManager);
        this.jwtService= jwtService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {


        String header = request.getHeader(JWTServiceImpl.HEADER_STRING);

        if (requiresAuthentication(header)) {
            chain.doFilter(request, response);
            return;
        }



        UsernamePasswordAuthenticationToken authenticationToken= null;
        if(jwtService.validateToken(header)){

            authenticationToken= new UsernamePasswordAuthenticationToken(jwtService.getUsername(header),null, jwtService.getRoles(header));
        }

        SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        chain.doFilter(request,response);
    }

    protected boolean requiresAuthentication(String header) {

        if (header == null || !header.startsWith(JWTServiceImpl.TOKEN_PREFIX)) {
            return false;
        }

        return true;
    }
}
