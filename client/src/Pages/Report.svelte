<script>
  import {
    Button, Card, CardBody, CardFooter, CardHeader,
    CardImg, CardSubtitle, CardText, CardTitle, Input
  } from "sveltestrap";

  import {navigate} from 'svelte-routing'

  export let post_id;
  let description = ''

  const handleReport = async (event) =>{
        event.preventDefault()

        let data = {
            post_id,
            description
        }

        data = await JSON.stringify(data)

        let reData  = await fetch('http://localhost:3000/reports/submitReport', {
            method: 'POST',
            headers: {
            'Content-type': 'application/json' 
            },
            body: data
        })

        reData = await reData.json()

<<<<<<< HEAD
        if(reData.message === 'reportsubmitted'){
            navigate('/index')
        }
=======
        navigate('/index')
>>>>>>> fbb7e586ea6bcb3e68f5940d418af74958c9c871
    }
</script>



<Card class=".col-sm-1 rounded2 .col-md-6 .offset-md-3">
  <CardHeader>
    <CardTitle>Report</CardTitle>
  </CardHeader>
  <CardBody>
<<<<<<< HEAD

  <Input type="textarea" bind:value={description}/>

    
    <Button on:click={handleReport}>Submit Report</Button>
=======
    <CardSubtitle>Card subtitle</CardSubtitle>
      <textarea required bind:value={description}></textarea>
    <Button on:click={handleReport}>Button</Button>
>>>>>>> fbb7e586ea6bcb3e68f5940d418af74958c9c871
  </CardBody>
  <CardFooter>We will inform the author.</CardFooter>
</Card>