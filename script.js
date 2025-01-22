const cache = {}

function doheavycalculation (x){
    if(cache[x]) return cache[x]

    const starttime = Date.now()
    let currtime=Date.now()


    while(starttime+1000>currtime){
        currtime=Date.now()
        console.log("calculatting ",currtime-starttime)
    }

    const rresult = +Math.sqrt(x).toFixed(2)
    cache[x]=rresult

    return rresult;
}

doheavycalculation(4)