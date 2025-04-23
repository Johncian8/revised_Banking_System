document.querySelector("input").oninput = ()=>{

    document.querySelector('button').disabled = false
}

document.querySelector('button').onclick = ()=>{

    let depositAmount = parseFloat(document.querySelector('#aDep').value)
    
    let balance = parseFloat(localStorage.getItem("balance"))

    const widthdraw = new Deposit(balance, depositAmount)

    widthdraw.execute()

    widthdraw.thanksD()

    document.querySelector('#aDep').value = ""

}


document.querySelector('#logout').onclick = ()=>{

    window.location.href = "../index.html"
}

document.querySelector('#widthdraw').onclick = ()=>{

    window.location.href = "../widthdraw/widthdraw.html"
}

document.querySelector('#checkbal').onclick = ()=>{

    window.location.href = "../checkbal/checkbal.html"
}

window.onload = ()=>{

    document.querySelector('h4').innerHTML = new Date().toDateString()
}