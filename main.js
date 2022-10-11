let hide = document.getElementById("download")

hide.style.display = "none"


// create Timer Element.

let counter = document.createElement("h3")
counter.className = "counter_num"
counter.innerText = "10"
hide.appendChild(counter)
hide.before(counter)

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
    hide.style.display = ""
  }
}, 11000)