let hide = document.getElementById("download")

hide.style.display = "none"


// create Timer Element.

let div = document.createElement("div")
div.className = "counter_sec"
hide.appendChild(div)
hide.before(div)


let counter = document.createElement("h3")
counter.className = "counter_num"
counter.innerText = "10"
div.appendChild(counter)

let wait = document.createElement("h3")
wait.className="counter_wait"
wait.innerText = "Please Wait...."
div.appendChild(wait)








let change = Number(counter.innerText)


// function for 10 to 0 calculate.

let cal = () => {
  change--
}


// Function for timer.

let timer = setInterval(() => {
  cal()
  counter.innerText = change
}, 1000)



//function for stop timer and show your download button.


let stop = setTimeout(() => {
  clearInterval(timer)

  if (change == -1) {
    counter.style.display = "none"
    wait.remove()
    hide.style.display = ""
    
  }
}, 11000)
