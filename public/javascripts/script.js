document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("register").addEventListener('click', register);
	function register(){
		window.location.href="../register";
	}
	document.getElementById("login").addEventListener('click', login);
	function login(){
		window.location.href="../login";
	}
	document.getElementById("new").addEventListener('click', newa);
	function newa(){
		window.location.href="new";
	}
});