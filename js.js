const api ="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"
const input =document.getElementById("input")
const againP =document.getElementById("againP")
const images =document.querySelector(".images")

const getimages = async()=> {
    againP.innerHTML =""
    const methods = {
        method:"POST",
        headers:{
            "Content-Type": "application/json" ,
            "Authorization": `Bearer ${api}`
        },
        body:JSON.stringify({
            "prompt":input.value,
            "n":5,
            "size":'256x256'
        })
    }
    const res = await fetch("https://api.openai.com/v1/images/generations", methods)
    const data = await res.json()
    const listimages = data.data;
    if (listimages != undefined) {
        images.innerHTML =""
        listimages.map(photo=>{
            const img = document.createElement("img")
            images.append(img)
            img.src = photo.url
        })
    
    } else {
        againP.innerHTML="Try again or rephrase the sentence"

    }
}