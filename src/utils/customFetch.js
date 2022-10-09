



const customFetch = (data, wait = 0) =>{
    return new Promise((res, rej)=>
        setTimeout(() => {
            try {
                if(data){
                    res(data);
                }
            }catch(err){
                rej(err)
            }
        }, wait)
    )
}

export default customFetch;