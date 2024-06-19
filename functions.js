// document.addEventListener('DOMContentLoaded', function() {
//     let currentStep = 0;
//     const steps = document.querySelectorAll('.quiz-step');
//     const prevBtn = document.getElementById('prevBtn');
//     const nextBtn = document.getElementById('nextBtn');
//     const timerDisplay = document.getElementById('timer');
//     const progressBar = document.getElementById('progress-bar');
//     let timeLeft = 60;

//     function showStep(index) {
//         steps.forEach((step, i) => {
//             step.classList.toggle('hidden', i !== index);
//         });
//         prevBtn.disabled = index === 0;
//         nextBtn.textContent = index === steps.length - 1 ? 'Submit' : 'Next';
//         updateProgressBar(index);
//     }

//     function updateProgressBar(index) {
//         const progressPercentage = ((index + 1) / steps.length) * 100;
//         progressBar.style.width = `${progressPercentage}%`;
//     }

//     prevBtn.addEventListener('click', () => {
//         if (currentStep > 0) {
//             currentStep--;
//             showStep(currentStep);
//         }
//     });

//     nextBtn.addEventListener('click', () => {
//         if (currentStep < steps.length - 1) {
//             currentStep++;
//             showStep(currentStep);
//         } else {
//             alert('Quiz Submitted!');
//         }
//     });

//     function updateTimer() {
//         if (timeLeft <= 0) {
//             alert('Time is up!');
//             // Optionally submit the quiz automatically
//         } else {
//             timeLeft--;
//             timerDisplay.textContent = `Time: ${timeLeft}s`;
//         }
//     }

//     setInterval(updateTimer, 1000);
//     showStep(currentStep);
// });
