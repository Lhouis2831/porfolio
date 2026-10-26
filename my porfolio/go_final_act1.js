const nameHeading = document.getElementById("name");
const courseText = document.getElementById("course");
const input = document.getElementById("txt");
const courseSelect = document.getElementById("select");
const statusText = document.getElementById("last");
const clickButton = document.getElementById("btn1");
const doubleClickButton = document.getElementById("btn2");
const holdButton = document.getElementById("btn3");

clickButton.addEventListener("click", () => {
    nameHeading.textContent = input.value.trim() || "Hello, LHOUIS!";
    statusText.textContent = "Click action completed.";
});

doubleClickButton.addEventListener("dblclick", () => {
    nameHeading.classList.toggle("highlighted");
    statusText.textContent = "Double-click action completed.";
});

holdButton.addEventListener("pointerdown", (event) => {
    holdButton.setPointerCapture(event.pointerId);
    statusText.textContent = "Button is being held...";
});

holdButton.addEventListener("pointerup", () => {
    statusText.textContent = "Press-and-hold action completed.";
});

holdButton.addEventListener("pointercancel", () => {
    statusText.textContent = "Press-and-hold action canceled.";
});

input.addEventListener("focus", () => {
    statusText.textContent = "Input is active.";
});

input.addEventListener("blur", () => {
    statusText.textContent = "Input is inactive.";
});

courseSelect.addEventListener("change", () => {
    courseText.textContent = courseSelect.value || "BS Information Technology";
    statusText.textContent = courseSelect.value
        ? `Selected course: ${courseSelect.value}`
        : "No course selected.";
});
