// ⭐ Create Stars

const stars = document.getElementById("stars");

for (let i = 0; i < 180; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 2 + "s";

    stars.appendChild(star);
}


// ---------- Elements ----------

const welcomeScreen = document.getElementById("welcomeScreen");
const questionScreen = document.getElementById("questionScreen");
const dateScreen = document.getElementById("dateScreen");
const timeScreen = document.getElementById("timeScreen");
const activityScreen = document.getElementById("activityScreen");
const cardScreen = document.getElementById("cardScreen");

const startBtn = document.getElementById("startBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const dateNext = document.getElementById("dateNext");

const finalDate = document.getElementById("finalDate");
const finalTime = document.getElementById("finalTime");
const finalActivity = document.getElementById("finalActivity");

const confirmBtn = document.getElementById("confirmBtn");
const hearts = document.getElementById("hearts");
const bgMusic = document.getElementById("bgMusic");
let selectedDate = "";
let selectedTime = "";
let selectedActivity = "";


// ---------- Welcome ----------

startBtn.addEventListener("click", () => {
bgMusic.play();

    welcomeScreen.classList.add("hidden");
    questionScreen.classList.remove("hidden");

});


// ---------- Funny No Button ----------

noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * 220 - 110;
    const y = Math.random() * 180 - 90;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;

});


// ---------- Yes ----------

yesBtn.addEventListener("click", () => {

    questionScreen.classList.add("hidden");
    dateScreen.classList.remove("hidden");

});
// ---------- Date ----------

dateNext.addEventListener("click", () => {

    selectedDate = document.getElementById("datePicker").value;

    if (selectedDate === "") {

        alert("Please choose a date ❤️");
        return;

    }

    dateScreen.classList.add("hidden");
    timeScreen.classList.remove("hidden");

});


// ---------- Time ----------

document.querySelectorAll(".timeBtn").forEach(btn => {

    btn.addEventListener("click", () => {

        selectedTime = btn.innerText;

        timeScreen.classList.add("hidden");
        activityScreen.classList.remove("hidden");

    });

});


// ---------- Activity ----------

document.querySelectorAll(".activityBtn").forEach(btn => {

    btn.addEventListener("click", () => {

        selectedActivity = btn.innerText;

        finalDate.innerText = "📅 " + selectedDate;
        finalTime.innerText = "⏰ " + selectedTime;
        finalActivity.innerText = selectedActivity;

        activityScreen.classList.add("hidden");
        cardScreen.classList.remove("hidden");

    });

});
// ---------- Confirm Button ----------

confirmBtn.addEventListener("click", () => {

    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "%";

        heart.style.animationDelay = (Math.random() * 2) + "s";

        hearts.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 4000);

    }

    confirmBtn.innerHTML = "❤️ See You Soon ❤️";
confirmBtn.disabled = true;

});