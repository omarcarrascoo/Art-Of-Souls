



const customFetch = (data, wait = 0, id) =>{
    return new Promise((res, rej)=>
        setTimeout(() => {
            try {
                if(data){
                    if (id) {
                      const product = data.find((cuadro)=>cuadro.id===id)  
                      res(product)
                    } else {
                        res(data);
                    } 
                }
            }catch(err){
                rej(err)
            }
        }, wait)
    )
}

export default customFetch;