function updateClock(){
    const dateNow = new Date()
    const hours = String(dateNow.getHours()).padStart(2, '0')
    const minutes = String(dateNow.getMinutes()).padStart(2, '0')
    const seconds = String(dateNow.getSeconds()).padStart(2, '0')

    document.getElementById("hours").innerText = hours
    document.getElementById("minutes").innerText = minutes
    document.getElementById("seconds").innerText = seconds
}

updateClock()
setInterval(updateClock, 1000)
