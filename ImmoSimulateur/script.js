document.addEventListener("DOMContentLoaded", () => {

    const startSimulationButton = document.getElementById('start-simulation');
    const learnMoreButton = document.getElementById('learn-more');

    // Error handling for button existence
    if (startSimulationButton) {
        startSimulationButton.addEventListener('click', () => {
            try {
                window.location.href = "/input";
            } catch (error) {
                console.error("Error navigating to input: ", error);
            }
        });
    }

    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', () => {
            try {
                window.location.href = "/educational";
            } catch (error) {
                console.error("Error navigating to educational resources: ", error);
            }
        });
    }
});
