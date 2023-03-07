let input = document.querySelector('input')
let buttons = document.querySelectorAll('button')
let screen=""
let arr = Array.from(buttons)
arr.forEach(button => {
  button.addEventListener('click', (e) =>{
    if(e.target.innerHTML == '='){
      screen=eval(screen).toFixed(0)
      input.value=screen
    }else if(e.target.innerHTML=='AC'){
      screen=""
      input.value=screen
    }else if(e.target.innerHTML=="DEL"){
      screen=screen.substring(0,screen.length-1)
      input.value=screen
    }else if(e.target.innerHTML=="%"){
      screen=screen/100
      input.value=screen
    }else if(e.target.innerHTML=="X"){
      screen+="*"
      input.value=screen
    } else{
    screen+=e.target.innerHTML
    input.value=screen
    }
    
  })
})