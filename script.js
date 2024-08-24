function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
  const weight = parseFloat(document.getElementById('weight').value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      document.getElementById('result').textContent = "Please enter valid values!";
      return;
  }

  const bmi = weight / (height * height);
  let bmiCategory = "";

  if (bmi < 18.5) {
      bmiCategory = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiCategory = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
      bmiCategory = "Overweight";
  } else {
      bmiCategory = "Obesity";
  }

  document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory})`;
}
  
