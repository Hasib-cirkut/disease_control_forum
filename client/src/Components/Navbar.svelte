<script>

    let userloggedin;

    if(localStorage.length === 0){
        userloggedin = false;
    }else{
        userloggedin = true;
    }

</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:500&display=swap');

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #24252A;
}

li, a, button{
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #edf0f1;
    text-decoration: none;
}

.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10%;
}

.navLinks{
    list-style: none;
}

.navLinks li{
    display: inline-block;
    padding: 0px 20px;
}

.navLinks li a{
    transition: all 0.3s ease 0s;
}

.navLinks li a:hover{
    color: #0088a9
}

button{
    padding: 0px 25px;
    background-color: rgba(0, 126, 169, 1);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.03s ease 0s;
    ;
}

button:hover{
    background-color: rgba(0, 126, 169, 0.8);
}

.cta{
    float: right;
}

</style>

<div class="header">

    <nav style="width: -webkit-fill-available">
    <ul class="navLinks">
        <li><a href="/">Home</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/about">About</a></li>

        {#if userloggedin === false}
        <a class="cta" href="/login"><button>Login</button></a>
        {:else}
        <a class="cta" href="/"><button on:click={()=>{
            localStorage.removeItem('user')
            localStorage.removeItem('userdata')
        }}>Logout</button></a>
        {/if}
    </ul>

    
</nav>

</div>