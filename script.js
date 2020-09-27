let operators = ["+", "-", "*", "/"]
let text = document.getElementById("textbox")
console.log(text)
function number(t){
    text.value += (t.value)
}

function erase(){
    text.value = ""
}

function operator1(t){
    if (!operators.includes(text.value.slice(-2, -1))){
        text.value += (t.value)
    } else {
        return
    }
}
function equal(){
    text.value = equalizer(text.value);
}
function equalizer(str){
    let newString = str
    while (/\s\^\s/.test(newString)){
        const powNumbers = newString.match(/(\d+)\s\^\s(\d+)/)
        newString = newString.replace(/(\d+)\s\^\s(\d+)/,`${Math.pow(powNumbers[1],powNumbers[2])}`)
    }

    while (/\s([*\/])\s/.test(newString)){
        const powNumbers = newString.match(/(\d+)\s([*\/])\s(\d+)/)
        if (powNumbers[2] == '*'){
            result = parseInt(powNumbers[1]) * parseInt(powNumbers[3])
        } else if (powNumbers[2] == '/') {
            result = parseInt(powNumbers[1]) / parseInt(powNumbers[3])
        }
    newString = newString.replace(/(\d+)\s([*\/])\s(\d+)/,`${result}`)
    }

    while (/\s([+-])\s/.test(newString)){
        const powNumbers = newString.match(/(\d+)\s([+-])\s(\d+)/)
        if (powNumbers[2] == '+'){
            result = parseInt(powNumbers[1]) + parseInt(powNumbers[3])
        } else if (powNumbers[2] == '-') {
            result = parseInt(powNumbers[1]) - parseInt(powNumbers[3])
        }
    newString = newString.replace(/(\d+)\s([+-])\s(\d+)/,`${result}`)
    }

    console.log(newString)
    return newString
    }