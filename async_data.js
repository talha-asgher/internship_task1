function async_data(api,apiNum) {
    fetch(api).then(response=>
    {
        if (!response.ok) {
            throw new Error('Network response problem in API ',apiNum);
        }
        return response.json();
    }).then(data=> {
        console.log('API',apiNum,' : ', data);
    }).catch(error => {
        console.log('Error in API',apiNum,' :', error.message);
    });
}

const delay_async = (time,api,apiNum) => {setTimeout(()=>
    {
        async_data(api,apiNum);
    }, time)
}


    delay_async(10000,'https://randomfox.ca/floof/',1);


    delay_async(5000,'https://v2.jokeapi.dev/joke/Any?safe-mode',2);


    delay_async(7000,'https://cat-fact.herokuapp.com/facts/random',3);


