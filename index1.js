
let tab = document.querySelectorAll(".tit_list>li");
function changeBg() {
    const bgCount = 4;
    const container = document.querySelector(".backco1");

    let randomNumber = Math.floor(Math.random() * bgCount) + 1;
    container.style.backgroundImage = `url(images/bg${randomNumber}.png)`
}

tab.forEach(item => {
    item.addEventListener("click", changeBg);
});

