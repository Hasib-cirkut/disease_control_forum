<script>
	import { Router, Link, Route } from "svelte-routing";
	import Login from './Pages/Login.svelte'
	import Signup from './Pages/Signup.svelte'
	import Home from './Pages/Home.svelte'
	import About from './Pages/About.svelte'
	import NotFound from './Pages/NotFound.svelte'

</script>


<Router>

	<div>

		<Route path="/" exact component={Home} />
		<Route path="/login" exact component={Login} />
		<Route path="/about" exact component={About} />
		<Route path="/signup" exact component={Signup} />

		<Route component={NotFound} />
	
	</div>

</Router>

