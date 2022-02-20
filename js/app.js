let acc = document.getElementsByClassName("question");
let i;
let j;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        for (j = 0; j < acc.length; j++) {
            if (acc[j].classList.contains("active") && acc[j] !== this) {
                acc[j].classList.toggle("active");
                acc[j].nextElementSibling.style.maxHeight = null;
                Object.assign(acc[j].lastElementChild.style, {transform: "rotate(0deg)"});
            }
        }
        this.classList.toggle("active");
        let arrow = this.lastElementChild;
        Object.assign(arrow.style, {transform: "rotate(180deg)", transition: "0.2s ease"});
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {    // is open
            this.nextElementSibling.style.maxHeight = null;
            Object.assign(this.lastElementChild.style, {transform: "rotate(0deg)"});
        } else {    // is closed
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}