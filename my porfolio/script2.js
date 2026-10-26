const titleButton = document.getElementById("btn");
const profile = document.getElementById("profile");
const courseSelect = document.getElementById("course-select");
const courseStatus = document.getElementById("sel");
const studentRows = document.querySelectorAll("#table tbody tr");

titleButton.addEventListener("click", () => {
    document.getElementById("title").textContent = "Welcome to My Student Profile";
});

document.getElementById("btn2").addEventListener("click", () => {
    profile.hidden = true;
});

document.getElementById("btn3").addEventListener("click", () => {
    profile.hidden = false;
});

courseSelect.addEventListener("change", () => {
    courseStatus.textContent = courseSelect.value
        ? `Selected Course: ${courseSelect.value}`
        : "No Course Selected";
});

function applyRowStyle(className) {
    studentRows.forEach((row, index) => {
        row.classList.remove("odd-row", "even-row");
        if ((index + 1) % 2 === (className === "odd-row" ? 1 : 0)) {
            row.classList.add(className);
        }
    });
}

document.getElementById("odd").addEventListener("click", () => {
    applyRowStyle("odd-row");
});

document.getElementById("even").addEventListener("click", () => {
    applyRowStyle("even-row");
});
