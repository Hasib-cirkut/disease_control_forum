<script>
import Navbar from '../Components/Navbar.svelte'
import {reportStore} from '../Stores/report.js'
import {onMount} from 'svelte'
import {navigate} from 'svelte-routing'
import {deleteFetch} from '../Js/Fetch'
import ReportCard from '../Components/ReportCard.svelte'

import {Button, Modal, ModalBody, ButtonGroup,ModalHeader} from 'sveltestrap'

let showList = [true, false, false]

let open = false;
let noReport = false;

const toggle = () => open = !open


let reportData = [];

onMount(async()=>{

    reportData = await $reportStore;

    if(reportData.message === 'noreportfound'){
        noReport = true;
    }

})
    

///Left bar JS

const handleLeftBar = arg =>{
    for(let i=0; i<showList.length; i++){
        showList[i] = false
    }

    showList[arg-1] = true;
}
</script>

<div class="container">

        <div class="left">

            <div class="left-bar flex-col">

                <button class="py-2 px-4 w-full h-12 bg-gray-200 rounded-sm text-gray-700 font-light focus:outline-none tracking-wider" on:click={() => {handleLeftBar(1)}}>Reports</button>


            
                <button class="py-2 px-4 w-full h-12 bg-gray-200 rounded-sm text-gray-700 font-light focus:outline-none tracking-wider mt-4" on:click={() => {handleLeftBar(2)}}>Admin request</button>

                <button class="py-2 px-4 w-full h-12 bg-gray-200 rounded-sm text-gray-700 font-light focus:outline-none tracking-wider mt-4" on:click={() => {handleLeftBar(2)}}>Stats</button>

        
       
            
            </div>

        </div>

        <div class="right">
        {#if showList[0]}

        <div class="w-7/12 h-16 bg-teal-500 rounded-sm text-gray-800 font-thin items-center px-4 py-2">
            
            <span class="text-3xl">Reports</span >
        
        </div>
        
            {#if noReport}
            <p>No reports. Hurray. Great adminship</p>
                
            {:else}
                    {#each reportData as post}

                    <ReportCard data={post}/>

                    <!-- 



                    <div class="card w-4/12 bg-gray-200 h-auto rounded-md shadow-lg mt-4">
                        <div class="card-body p-4 pb-2">
                            <h5 class="card-title text-center font-thin text-3xl text-orange-500 tracking-wider">Report</h5>

                            <div class="w-full text-center text-sm mt-2">
                                <span class="font-medium text-md text-gray-700">{title}</span>
                            </div>

                            <div class="w-full p-2 mt-2 ">
                                <p class="card-text break-words h-auto font-medium text-sm text-gray-700">{description}</p>
                            </div>
                        

                            <div class="flex justify-between my-4">

                                <a class=" shadow w-2/6 h-8 text-center rounded-sm p-1 text-gray-300 mr-2 bg-gray-500 border-b-4 hover:border-gray-600 transition duration-700 ease-in-out" href={`/posts/${post_id}`} role="button" >Visit post</a>

                                <button class=" shadow w-2/6 h-8 rounded-sm p-1 text-gray-300 mr-2 bg-green-500 border-b-4  hover:border-green-600 transition duration-700 ease-in-out" on:click={handleModalNVM} name={`${_id}`}>
                                    Never mind
                                </button>

                                <button class=" shadow w-2/6 h-8 rounded-sm p-1 text-gray-300 mr-2  bg-yellow-500 border-b-4 hover:border-yellow-600 transition duration-700 ease-in-out" on:click={handleModalWarn} name={`${_id}`}>
                                    Warn
                                </button>

                                <button class=" shadow w-2/6 h-8 rounded-sm p-1 text-gray-300  bg-red-500 border-b-4 hover:border-red-600 transition duration-700 ease-in-out" on:click={handleModalDelete} name={`${post_id}`}>
                                    Delete Post
                                </button>
                            </div>

                        </div>
                    </div>
                        
                     -->
                    {/each}

            {/if}

        {/if}

        {#if showList[1]}
            <h3>Admin Panel</h3>

            <p>Shadin ekhon 12 tay bashay chole jay</p>
        {/if}

        
            
        </div>

</div>

<style>
    .left, .right{
        margin-top: 10vh;
    }

    .left{
        grid-area: left;
        display: flex;
        flex-direction: column;
        
    }

    .right{
        grid-area: right;
        display: flex;
        flex-direction: column;
    }

    .container{
        min-height: 100vh;
        min-width: 100vw;
        display: grid;
        grid-template-columns: 2fr 5fr;
        grid-template-areas:
        "left right" 
    }

    .left-bar{
        display: flex;
        flex-direction: column;
        height: 60%;
        width: 220px;
        position: fixed;
        z-index: 1;
        background-color: #bdbdbd;
        overflow-x: hidden;
        padding-top: 20px;
    }
</style>