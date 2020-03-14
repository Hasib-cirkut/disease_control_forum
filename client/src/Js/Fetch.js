async function getFetch(urlString){

    let reData = await fetch(urlString)

    reData = await reData.json()

    return reData
}

async function postFetch(urlString, data){
    let reData = await fetch(urlString, {
			method: "POST",
			
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
            })

    reData = await reData.json()

    return reData
}

async function deleteFetch(urlString){

    let reData = await fetch(urlString,  {
            method: 'DELETE', // Method itself
            headers: {
            'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            },
 
        })

    reData = await reData.json()

    return reData
}

export {getFetch, postFetch, deleteFetch}