<script>
import Navbar from '../Components/Navbar.svelte'
import {reportStore} from '../Stores/report.js'

import {Button, Modal, ModalBody, ButtonGroup,ModalHeader} from 'sveltestrap'

let open = false;

const toggle = () => open = !open

let reportData = $reportStore

const handleModalDelete = e =>{
    e.preventDefault()

    
}

const handleModalNVM = e =>{
    e.preventDefault()

    console.log('here in nvm')
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

        {#await reportData}
            <p>...waiting</p>
        {:then dataList}
            
            {#each dataList as {post_id, description}}

            <div class="card" style="width: 28rem;">
                <div class="card-body">
                    <h5 class="card-title">Report</h5>
                    
                    <p class="card-text">{description}</p>
                
                <div class="col-sm-12" style="padding: 0;">
                    <button type="button" class="btn btn-outline-primary btn-sm" id="action-btn" on:click={toggle}>Action</button>

                    <a class="btn btn-outline-success btn-sm" href={`/posts/${post_id}`} role="button" style="color:black;">Visit post</a>
                </div>

                </div>
            </div>
        
                
            {/each}



        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}

        <Modal isOpen={open} {toggle}>
            <ModalHeader {toggle}>Action</ModalHeader>
            <ModalBody>
            
            <Button size="sm" color="success" on:click={handleModalNVM}>
                Never mind
            </Button>

            <Button size="sm" color="warning" on:click={handleModalWarn}>
                Warn
            </Button>

            <Button size="sm" color="danger" on:click={handleModalDelete}>
                Delete Post
            </Button>

            </ModalBody>
        </Modal>


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