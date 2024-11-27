const toggleMode = document.getElementById("toggleMode");

toggleMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});
