<script>
	import { Router, Link, Route } from "svelte-routing";
	import Login from './Pages/Login.svelte'
	import Signup from './Pages/Signup.svelte'
	import Home from './Pages/Home.svelte'
	import About from './Pages/About.svelte'
	import Profile from './Pages/Profile.svelte'
	import Post from './Pages/Post.svelte'
	import AddPost from './Pages/AddPost.svelte'
	import EditProfile from './Pages/EditProfile.svelte'
	import NotFound from './Pages/NotFound.svelte'

	

</script>


<Router>

	<div>

		<Route path="/" exact component={Home} />
		<Route path="/login" exact component={Login} />
		<Route path="/about" exact component={About} />
		<Route path="/signup" exact component={Signup} />

		<Route path="/profile/:user" exact let:params>
			<Profile currentUsername={params.user} />
		</Route>

		<Route path="/posts/:id" exact let:params>
			<Post id={params.id} />
		</Route>
		
		<Route path="/addpost" exact component={AddPost} />
		<Route path="/editprofile" exact component={EditProfile} />


		<Route component={NotFound} />
	
	</div>

</Router>

