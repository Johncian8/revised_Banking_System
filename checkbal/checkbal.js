document.querySelector('#logout').onclick = ()=>{

    window.location.href = "../index.html"
}

document.querySelector('#widthdraw').onclick = ()=>{

    window.location.href = "../widthdraw/widthdraw.html"
}

document.querySelector('#deposit').onclick = ()=>{

    window.location.href = "../deposit/deposit.html"
}

window.onload = ()=>{

    document.querySelector('h4').innerHTML = new Date().toDateString()
}

document.querySelector('button').onclick = ()=>{
    
    const balance = new Check()

    document.querySelector('#display').innerHTML = "Your balance is " + balance.checkbal()
}