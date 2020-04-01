<script>
	import { Router, Link, Route } from "svelte-routing";
	import Login from './Pages/Login.svelte'
	import Signup from './Pages/Signup.svelte'
	import Home from './Pages/Home.svelte'
	import Index from './Pages/Index.svelte'
	import About from './Pages/About.svelte'
	import Profile from './Pages/Profile.svelte'
	import VisitorProfile from './Pages/VisitorProfile.svelte'
	import Post from './Pages/Post.svelte'
	import AddPost from './Pages/AddPost.svelte'
	import EditProfile from './Pages/EditProfile.svelte'
	import Dashboard from './Pages/Dashboard.svelte'
	import Report from './Pages/Report.svelte'
	import NotFound from './Pages/NotFound.svelte'
	import Tailwindcss from './Tailwindcss.svelte'
	import IndexSearch from './Pages/IndexSearch.svelte'

</script>

<Tailwindcss />

<Router>

	<div>

		<Route path="/" exact component={Index} />
		<Route path="/login" exact component={Login} />
		<Route path="/about" exact component={About} />
		<Route path="/signup" exact component={Signup} />
		<Route path="/index" exact component={Index} />
		<Route path="/dashboard" exact component={Dashboard} />

		<Route path="/profile/:user" exact let:params>
			<Profile currentUsername={params.user} />
		</Route>

		<Route path="/_profile/:user" exact let:params>
			<VisitorProfile username={params.user} />
		</Route>

		<Route path="/posts/:id" exact let:params>
			<Post id={params.id} />
		</Route>
		
		<Route path="/addpost" exact component={AddPost} />
		<Route path="/editprofile" exact component={EditProfile} />
		

		<Route path="/report/:post_id" exact let:params>
			<Report post_id = {params.post_id} />
		</Route>

		<Route path='/search/:key' exact let:params>
			<IndexSearch key = {params.key} />
		</Route>


		<Route component={NotFound} />
	
	</div>

</Router>

