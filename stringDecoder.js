function decoder(code){
    let decoded = []

    for(let i = 0; i < code.length; i++)
    if(!isNaN(code[i])){
        decoded.push(code[i + parseInt(code[i]) + 1])
        
    }
    decoded = decoded.join('')
    return decoded
}
console.log(decoder('0h2xce5ngbrdy'))


// OR

function decoder1(code){
    let brokenArray = []
    let eachString = ''
    for(let i = 0; i < code.length; i++){
        if(!isNaN(code[i])){
            if(eachString !== ''){
                brokenArray.push(eachString)
            }
            eachString = code[i]
        }else{
            eachString += code[i]
        }
    }
    if(eachString !== ''){
        brokenArray.push(eachString)
    }
    let newArr = brokenArray.map((str) => {
        let num = +str[0]
        return str[num + 1]
    })
    return newArr.join('')
}

console.log(decoder1('0h2xce5ngbrdy'))