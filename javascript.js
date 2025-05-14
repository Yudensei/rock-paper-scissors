function getComputerChoice() {
    let rng = Math.floor(Math.random() * 3)
    if (rng == 0) {
        return "rock"
    } else if (rng == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}