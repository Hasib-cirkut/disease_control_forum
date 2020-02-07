<script>
	import { Router, Link, Route } from "svelte-routing";
	import Login from './Pages/Login_Signup.svelte'
	import Home from './Pages/Home.svelte'
	import About from './Pages/About.svelte'
	import NotFound from './Pages/NotFound.svelte'

</script>


<Router>

	<div>

		<Route path="/" exact component={Home} />
		<Route path="/login" exact component={Login} />
		<Route path="/about" exact component={About} />
		<Route component={NotFound} />
	
	</div>

</Router>

