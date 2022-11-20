function remove(event) {
    let keys = document.querySelector(`div[data-key="${event.keyCode}"]`)
    keys.classList.remove("active")
}

function sandbox(event) {
    let keys = document.querySelector(`div[data-key="${event.keyCode}"]`)
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    audio.play()
    audio.currentTime = 0
    keys.classList.add('active')
}


document.addEventListener('keydown', sandbox)
document.addEventListener('keyup', remove)
document.addEventListener('keydown', play)