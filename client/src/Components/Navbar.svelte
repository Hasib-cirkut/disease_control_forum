<script>

    let userloggedin;
    let profileurl = `/profile/${localStorage.getItem('user')}`
    import { Navbar, NavbarBrand } from 'sveltestrap';

    if(localStorage.length === 0){
        userloggedin = false;
    }else{
        userloggedin = true;
    }

    let searchBox = ''

    const handleSearch = e => {
        window.location.replace(`http://localhost:5000/search/${searchBox}`)
    }
    

</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:500&display=swap');
</style>




    <div class="flex-col">

        <nav class="px-8 py-2 fixed flex-row flex-wrap w-screen h-20 bg-gray-800">

    <ul class="flex justify-between mt-4">

        <div class="flex justify-between ml-32">

            <li><a href="/"><span class="mr-8 font-light text-lg text-gray-200  cursor-pointer hover:text-blue-500 transition duration-500 ease-in-out">Home</span></a></li>
            <li><a href={profileurl}><span class=" mr-8 font-light text-lg text-gray-200  hover:text-blue-500 transition duration-500 ease-in-out">Profile</span></a></li>
            <li><a href="/about"><span class="font-light text-lg text-gray-200  hover:text-blue-500 transition duration-500 ease-in-out">About</span></a></li>
                
            
        </div>
        
            <div class="my-auto">

                <input bind:value={searchBox} class="mb-1 h-10 pl-4 rounded-sm bg-gray-700 text-gray-200" type="text">
        
                <button on:click={handleSearch} class="h-full ml-4  bg-blue-500 mr-40 px-4 py-1 rounded-sm text-lg font-thin hover:bg-blue-400 transition duration-500 ease-in-out">Search</button>
            
            </div>

        <div class="flex">


        {#if userloggedin === false}

            <a class="" href="/login"><button class="bg-orange-500 mr-40 px-4 py-1 rounded-sm text-lg font-thin hover:bg-orange-400 transition duration-500 ease-in-out">Login</button></a>
        {:else}
            <a class="" href="/"><button on:click={()=>{
                localStorage.removeItem('user')
                localStorage.indexremoveItem('userdata')
        }} class="bg-blue-500 mr-40 px-4 py-1 rounded-sm text-lg font-thin hover:bg-blue-400 transition duration-500 ease-in-out">Logout</button></a>

        {/if}
        
        </div>
    
    </ul>
    
    </nav>

    <div class=" block h-20 bg-orange-500 w-full">
    </div>

    
    </div>