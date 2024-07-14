function sync_data(api,apiNum) {
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

const delay_sync = (time) => new Promise(resolve => setTimeout(resolve, time));

async function getData()
{

    await delay_sync(10000);
    sync_data('https://randomfox.ca/floof/',1);

    await delay_sync(5000);
    sync_data('https://v2.jokeapi.dev/joke/Any?safe-mode',2);

    await delay_sync(7000);
    sync_data('https://cat-fact.herokuapp.com/facts/random',3);

}

getData()