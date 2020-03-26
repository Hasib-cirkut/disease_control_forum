<script>

export let data;
import {deleteFetch} from '../Js/Fetch'
import {navigate} from 'svelte-routing'

const handleModalNVM = async e =>{
    e.preventDefault()

    let reData = await deleteFetch(`http://localhost:3000/reports/${e.target.name}`)

    if(reData.message === 'deleted'){

        window.location.reload()
        
    }
}

const handleModalDelete = async event =>{
    event.preventDefault()

    let reData = await deleteFetch(`http://localhost:3000/posts/delete/${event.target.name}`)
        

        if(reData.message === 'deleted'){

            deleteManyReport(event.target.name)

            window.location.reload()
        }
}

async function deleteManyReport(post_id){

    let reData = await deleteFetch(`http://localhost:3000/reports/deleteMany/${post_id}`)

    return
}



const handleModalWarn = e =>{
    e.preventDefault()
}


</script>


<div class="card w-4/12 bg-gray-200 h-auto rounded-md shadow-lg mt-4">
                        <div class="card-body p-4 pb-2">
                            <h5 class="card-title text-center font-thin text-3xl text-orange-500 tracking-wider">Report</h5>

                            <div class="w-full text-center text-sm mt-2">
                                <span class="font-medium text-md text-gray-700">{data.title}</span>
                            </div>

                            <div class="w-full p-2 mt-2 ">
                                <p class="card-text break-words h-auto font-medium text-sm text-gray-700">{data.description}</p>
                            </div>
                        

                            <div class="flex justify-between my-4">

                                <a class=" shadow w-2/6 h-8 text-center rounded-sm p-1 text-gray-300 mr-2 bg-gray-500 border-b-4 hover:border-gray-600 transition duration-700 ease-in-out" href={`/posts/${data.post_id}`} role="button" >Visit post</a>

                                <button class=" shadow w-2/6 h-8 rounded-sm p-1 text-gray-300 mr-2 bg-green-500 border-b-4  hover:border-green-600 transition duration-700 ease-in-out" on:click={handleModalNVM} name={`${data._id}`}>
                                    Never mind
                                </button>

                                <button class=" shadow w-2/6 h-8 rounded-sm p-1 text-gray-300 mr-2  bg-yellow-500 border-b-4 hover:border-yellow-600 transition duration-700 ease-in-out" on:click={handleModalWarn} name={`${data._id}`}>
                                    Warn
                                </button>

                                <button class=" shadow w-2/6 h-8 rounded-sm p-1 text-gray-300  bg-red-500 border-b-4 hover:border-red-600 transition duration-700 ease-in-out" on:click={handleModalDelete} name={`${data.post_id}`}>
                                    Delete Post
                                </button>
                            </div>

                        </div>
                    </div>