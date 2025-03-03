
// API returning JSON data

// fetch("./sample.json").then((resp)=>{
//     return resp.json()
// }).then((data)=>{
//     console.log(data)
// })

// API returning XML data



fetch("./sample.xml").then((resp)=>{
    return resp.text()
}).then((data)=>{
    console.log(xml2js(data))
    
})

