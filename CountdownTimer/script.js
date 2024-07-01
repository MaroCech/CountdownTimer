
const countDownDate = new Date("Sept 1, 2024 00:00:00").getTime();


const x = setInterval(function(){
    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    
    document.getElementsByClassName("days")[0].innerHTML = days + " Days"
    document.getElementsByClassName("hours")[0].innerHTML = hours + " Hours"
    document.getElementsByClassName("minutes")[0].innerHTML = minutes + " Minutes"
    document.getElementsByClassName("seconds")[0].innerHTML = seconds + " Seconds"
    document.getElementsByClassName("text")[0].innerHTML = "Until the end of the summer"

if (distance < 0) {
    clearInterval(x);
    document.getElementsByClassName("days")[0].innerHTML = "EXPIRED";
    document.getElementsByClassName("hours")[0].innerHTML = "";
    document.getElementsByClassName("minutes")[0].innerHTML = "";
    document.getElementsByClassName("seconds")[0].innerHTML = "";
}
}, 1000);





















