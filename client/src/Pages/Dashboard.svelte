<script>
import Navbar from '../Components/Navbar.svelte'
import {reportStore} from '../Stores/report.js'
import {onMount} from 'svelte'
import {navigate} from 'svelte-routing'

import {Button, Modal, ModalBody, ButtonGroup,ModalHeader} from 'sveltestrap'

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
    

const handleModalDelete = e =>{
    e.preventDefault()

    
}

const handleModalNVM = async e =>{
    e.preventDefault()

    let reData = await fetch(`http://localhost:3000/reports/${e.target.name}`, {
            method: 'DELETE',
            headers: {
            'Content-type': 'application/json; charset=UTF-8'
            },
 
        })
    reData = await reData.json()

    if(reData.message === 'deleted'){
        navigate('/dashboard')
    }
}

const handleModalWarn = e =>{
    e.preventDefault()
}
</script>

<div class="container">

        <div class="left">

            <div class="left-bar">
            
                <button>Reports</button>
                <button>Adminship</button>
            
            </div>

        </div>

        <div class="right">
        
        {#if noReport}
        <p>No reports. Hurray. Great adminship</p>
            
        {:else}
                {#each reportData as {post_id, description, _id}}

                <div class="card" style="width: 28rem;">
                    <div class="card-body">
                        <h5 class="card-title">Report</h5>
                        
                        <p class="card-text">{description}</p>
                    
                    <div class="col-sm-12" style="padding: 0;">
                        <a class="btn btn-outline-success btn-sm" href={`/posts/${post_id}`} role="button" style="color:black; margin-bottom:2vh">Visit post</a>
                    </div>

                    <Button size="sm" color="success" on:click={handleModalNVM} name={`${_id}`}>
                        Never mind
                    </Button>

                    <Button size="sm" color="warning" on:click={handleModalWarn} name={`${_id}`}>
                        Warn
                    </Button>

                    <Button size="sm" color="danger" on:click={handleModalDelete} name={`${_id}`}>
                        Delete Post
                    </Button>

                    </div>
                </div>
                    
                {/each}

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

    #action-btn, #visit-btn{
        display: inline-block;
        vertical-align: top;
        width: fit-content;
    }


</style>