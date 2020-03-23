<script>
import Navbar from '../Components/Navbar.svelte'
</script>

<style>

    .body{
        background-image: url(/home-bg2.jpg);
        height: 92vh;
        background-repeat: round;
    }

    .get-started{
        width: 29vh;
        height: 6vw;
        border: 2px solid #ffffff;
        box-sizing: border-box;
        border-radius: 14px;
        display: inline-block;

        margin-top: 30vh;
    }

    .get-started:hover{
        cursor: pointer;

        box-shadow: 0px 0px 6px rgb(255, 255, 255);
    }

    .get-started > p{
        font-family: "Montserrat";
        text-align: center;
        color: rgb(255, 255, 255);
        font-size: 2.3rem;
    }

    .get-started-container{
        text-align: center;
    }

</style>


<Navbar />

<div class="body">

    <div class="get-started-container">

        <div class="get-started">
            <p>Get Started</p>
        </div>
    </div>

</div>