<script>

    import Navbar from '../Components/Navbar.svelte'
    import {onMount} from 'svelte'
    import readableDate from '../Js/readableDate'
    import {navigate} from 'svelte-routing'

    let name, bio, joined, email, location, work, username, profession= ''


    onMount(async ()=>{

        let localUserData = JSON.parse(localStorage.userdata)

        name = localUserData.name
        username = localUserData.username
        joined = readableDate(localUserData.joined)
        location = localUserData.location
        work = localUserData.work
        bio = localUserData.bio
        email = localUserData.email
        profession = localUserData.profession

    })

    const editProfile = async event =>{
        event.preventDefault()

        let data = {name, username, location, work, bio, email, profession}

        data = JSON.stringify(data)

        let reData = await fetch('http://localhost:3000/users/updateprofile', {
			method: "POST",
			
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        })

        reData = await reData.json()

        updateLocalStorage()

        navigate(`/profile/${username}`)
        
    }

    function updateLocalStorage(){
        let userdata = JSON.parse(localStorage.userdata)

        userdata.name = name;
        userdata.location = location;
        userdata.work = work;
        userdata.bio = bio;
        userdata.email = email;
        userdata.profession = profession;

        userdata = JSON.stringify(userdata)

        localStorage.setItem('userdata', userdata);
    }


    
</script>

<style>

    .body{
        display: grid;
        grid-auto-columns: 2fr 1fr 2fr 2fr;
        grid-template-areas: 
        "leftleftbar leftbar rightbar rightrightbar";

        background: #F9FCFF;
        min-height: 100vh;
    }

    .leftleftbar{
        grid-area: leftleftbar
    }
    .leftbar{
        grid-area: leftbar
    }
    .rightrightbar{
        grid-area: rightrightbar
    }
    .rightbar{
        grid-area: rightbar;

        margin-top: 11vh;
    }

    .rightbar > form > *{
        margin-top: 3vh;
    }

    textarea{
        resize: none;
    }

</style>


<Navbar />

<div class="body">
    <div class="leftleftbar">
    </div>

    <div class="leftbar"></div>

    <div class="rightbar">

        <form on:submit={editProfile}>

            <div>
                <label>Full Name</label>
                <input type="text" bind:value={name}>
            </div>
            
            <div>
                <label>Email</label>
                <input type="text" bind:value={email}>
            </div>

            <div>
                <label>Profession</label>
                <input type="text" bind:value={profession}>
            </div>

            <div>
                <label>Joined</label>
                <input type="text" disabled value={joined}>
            </div>
            
            <div>
                <label>Location</label>
                <input type="text" bind:value={location}>
            </div>
            
            <div>
                <label>Bio</label>
                <textarea cols="50" rows="5" bind:value={bio} />
            </div>

            <div>
                <label>Work</label>
                <input type="text" bind:value={work} style="width: 20vw;">
            </div>
            

            <button>Update</button>
        
        </form>
    
    
    </div>

    <div class="rightrightbar"></div>
</div>