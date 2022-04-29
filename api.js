import fetch from "node-fetch";

const apiCall = async () => {
    try{
        const res = await fetch('https://catfact.ninja/fact', {
            method: 'GET'
        });

        const fact = await res.json();
        return console.log(fact);
    }catch(error){
        return console.log(error);
    }
};

apiCall();


