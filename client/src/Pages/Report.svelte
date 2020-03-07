<script>
  import {
    Button, Card, CardBody, CardFooter, CardHeader,
    CardImg, CardSubtitle, CardText, CardTitle
  } from "sveltestrap";

  export let post_id;

  console.log(post_id)

  const handleReport = async (event) =>{
        event.preventDefault()

        let data = {
            post_id: event.target.name,
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
    }
</script>



<Card class="mb-3">
  <CardHeader>
    <CardTitle>Report</CardTitle>
  </CardHeader>
  <CardBody>
    <CardSubtitle>Card subtitle</CardSubtitle>
    <CardText>
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </CardText>
    <Button>Button</Button>
  </CardBody>
  <CardFooter>Footer</CardFooter>
</Card>