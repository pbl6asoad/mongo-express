var input = document.querySelector('#name')
input.addEventListener("click", (event) => {
    event.preventDefault()

    let msg = {
        name:`${document.querySelector("#input").value}`,
        price:123
    }
    
    fetch(  "http://localhost:3000/products/create", {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(msg)
    }).then((res) => {
        console.log(res)
        
    } ).catch( (e) => console.log(e))

})
