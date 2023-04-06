document.addEventListener("DOMContentLoaded", () => {
  let timerValue = document.getElementById("timer-value")
  let toggleButton = document.getElementById("toggle-start-stop")
  let resetButton = document.getElementById("reset")
  let intervalId = -1
  let durationTime
  let duration

  if (localStorage.getItem("value")) {
    timerValue.innerHTML = JSON.parse(localStorage.getItem("value"))
    const storedValue = JSON.parse(window.localStorage.getItem("value"))
      .split(":")
      .map((item) => Number(item))
    duration = storedValue[0] * 60 * 1000 + storedValue[1] * 1000
  } else {
    durationTime = 25
    duration = durationTime * 60 * 1000
  }

  if (localStorage.getItem("isClicked")) toggleButton.innerHTML = "Resume"

  resetButton.addEventListener("click", () => {
    window.localStorage.setItem("value", JSON.stringify(`25:00`))
    localStorage.setItem("isClicked", JSON.stringify(false))
    localStorage.setItem("innerHtml", JSON.stringify("Start"))
    timerValue.innerHTML = JSON.parse(localStorage.getItem("value"))
    toggleButton.innerHTML = JSON.parse(localStorage.getItem("innerHtml"))
    clearInterval(intervalId)
    intervalId = -1
  })

  toggleButton.addEventListener("click", () => {
    localStorage.setItem("isClicked", JSON.stringify(true))
    if (
      toggleButton.innerHTML === "Start" ||
      toggleButton.innerHTML === "Resume"
    )
      localStorage.setItem("innerHtml", JSON.stringify("Pause"))

    toggleButton.innerHTML === "Pause" &&
      localStorage.setItem("innerHtml", JSON.stringify("Resume"))

    toggleButton.innerHTML = JSON.parse(localStorage.getItem("innerHtml"))

    if (intervalId === -1) {
      intervalId = setInterval(() => {
        duration -= 1000
        let minutes = Math.floor(duration / (1000 * 60))
        let seconds = Math.floor((duration % (1000 * 60)) / 1000)
        window.localStorage.setItem(
          "value",
          JSON.stringify(`${minutes}:${seconds}`)
        )
        timerValue.innerHTML = `${minutes}:${seconds}`
      }, 1000)
    } else {
      clearInterval(intervalId)
      intervalId = -1
    }
  })
})
