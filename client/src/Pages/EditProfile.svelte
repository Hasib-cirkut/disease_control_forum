<script>

    import Navbar from '../Components/Navbar.svelte'
    import {onMount} from 'svelte'
    import readableDate from '../Js/readableDate'

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

        <form action="">

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