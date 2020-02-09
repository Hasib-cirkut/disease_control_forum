<script>
    
	import {Link} from 'svelte-routing'
	import Login from './Login.svelte'
	
	let name = '', username = '', email = '', password = '';
	let useradded = false

	const handleSignup = async e =>{
		e.preventDefault()

		let data = {name, username, email, password}
		data = await JSON.stringify(data)

		let receivedData = await fetch('http://localhost:3000/users/addUser', {
			method: "POST",
			
            headers: {
                'Content-type': 'application/json'
            },
            body: data
			})
			
		receivedData = await receivedData.json()

		if(receivedData.message === 'useradded'){
			useradded = true
		}
		

	}
    
</script>

<style>

    
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

* {
	box-sizing: border-box;
}

.body {
	background: #f6f5f7;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: 'Montserrat', sans-serif;
	height: 100vh;
	margin: -20px 0 50px;
}

h1 {
	font-weight: bold;
	margin: 0;
}

h2 {
	text-align: center;
}

p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}

span {
	font-size: 12px;
}


button {
	border-radius: 20px;
	border: 1px solid #FF4B2B;
	background-color: #FF4B2B;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}

button:hover{
    cursor: pointer;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

button.ghost:hover{
	cursor: pointer;
}

form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

.container {
	background-color: #fff;
	border-radius: 10px;
  	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 480px;
}

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
}


.sign-up-container {
	left: 0;
	width: 50%;
	z-index: 1;
}



.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	
}


.overlay {
	background: #FF416C;
	background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
	background: linear-gradient(to right, #FF4B2B, #FF416C);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	left: -100%;
	height: 100%;
	width: 200%;
  	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}



.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	
}


</style>


{#if useradded === true}
	<Login />
{:else}
	<div class="body">

    <h2>Sign up</h2>
<div class="container" id="container" >
	<div class="form-container sign-up-container">
		<form on:submit={handleSignup}>
			<h1>Create Account</h1>
			
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" bind:value={name}/>
            <input type="text" placeholder="Username" bind:value={username}/>
			<input type="email" placeholder="Email" bind:value={email}/>
			<input type="password" placeholder="Password" bind:value={password}/>
			<button>Sign Up</button>
		</form>
	</div>
	
	<div class="overlay-container">

		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
                <Link to="/login" ><button class="ghost" id="signIn" href="/login">Sign In</button></Link>
				
			</div>
		</div>
	</div>
</div>


</div>
{/if}

