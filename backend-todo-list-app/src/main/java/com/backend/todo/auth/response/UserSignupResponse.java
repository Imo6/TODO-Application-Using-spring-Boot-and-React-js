package com.backend.todo.auth.response;


public class UserSignupResponse {
	
	private String name;
	private String username;
	private String token;
	
	protected UserSignupResponse() {
		
	}
	
	public UserSignupResponse(String name, String username, String token) {
		super();
		this.name = name;
		this.username = username;
		this.token = token;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	
	
}

