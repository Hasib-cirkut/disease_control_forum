<script>

  import {navigate} from 'svelte-routing'
  import {postFetch} from '../Js/Fetch.js'
  import Navbar from '../Components/Navbar.svelte'

  export let post_id;

  let description = ''
  let title = ''

  const handleReport = async (event) =>{
        event.preventDefault()

        let data = {
            post_id,
            description,
            title
        }

        let reData  = await postFetch('http://localhost:3000/reports/submitReport', data)


        if(reData.message === 'reportsubmitted'){
            navigate('/index')
        }
        navigate('/index')

    }
</script>



<Navbar />




<div class="flex bg-gray-900 w-full h-screen items-center m-auto justify-center">

        
        

                <div class="flex-col shadow-lg rounded-sm text-center bg-gray-850 h-auto w-2/4 px-8 py-4 md:px-10 lg:px-12 xl:px-48">
                
                <div class="text-center">
                    
                    <span class="text-yellow-600 font-thin tracking-wider text-2xl">REPORT</span>
                </div>

                <!-- title input -->
                
                <div class="w-full p-4 text-center">

                    <input bind:value={title} class="bg-blueishblack rounded shadow h-12 w-9/12 text-gray-200 pl-4 text-lg font-light placeholder-orange-400 | focus:placeholder-transparent focus:outline-none" placeholder="title" type="text">

                </div>

                <!-- description input -->

                <div class="p-4 w-full">

                    <textarea bind:value={description} style="resize: none;" class="rounded-sm shadow bg-blueishblack h-64 w-full text-gray-200  pl-4 pt-4 text-lg font-light placeholder-orange-400 | focus:placeholder-transparent focus:outline-none" placeholder="description" cols="25" rows="3"></textarea>

                </div>

                <!-- submit button -->

            
                    <button on:click={handleReport} class="rounded-sm shadow px-4 py-2 bg-yellow-600 | hover:bg-yellow-700 | : outline-none" type="button">SUBMIT</button>

            <span class="block mt-8 text-sm text-offwhite">we won't publicize your information</span>
            </div>




    </div>