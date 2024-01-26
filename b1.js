let currentStep = 1;

function showStep(step) {
  const steps = document.querySelectorAll('.step');
  steps.forEach((step) => {
    step.classList.remove('active');
  });

  const activeStep = document.getElementById(`step${step}`);
  activeStep.classList.add('active');

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  prevBtn.disabled = currentStep === 1;
  nextBtn.disabled = currentStep === 4;
}

function nextStep() {
  if (currentStep < 4) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
  }
}

function goToStep(step) {
  currentStep = step;
  showStep(currentStep);
}

showStep(currentStep);