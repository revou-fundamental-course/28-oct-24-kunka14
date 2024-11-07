// Add event listener for the "Hitung BMI" button
document.getElementById('calculate-btn').addEventListener('click', function() {

    // Get user input from the form
    const weight = parseFloat(document.getElementById('weight').value); // Weight in kg
    const height = parseFloat(document.getElementById('height').value); // Height in meters
    const gender = document.getElementById('gender').value; // Gender (male/female)

    // Validate input values
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Mohon masukkan nilai yang valid untuk Berat Badan dan Tinggi Badan.");
        return;
    }

    // Calculate BMI using the formula: BMI = weight / (height * height)
    const bmi = weight / (height * height);

    // Format the result to two decimal places
    const bmiResult = bmi.toFixed(2);

    // Display the BMI result
    document.getElementById('bmi-result').textContent = `BMI Anda: ${bmiResult}`;

    // Determine the BMI category based on the result
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight (Kekurangan Berat Badan)';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal (Berat Badan Ideal)';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight (Kelebihan Berat Badan)';
    } else {
        category = 'Obesity (Obesitas)';
    }

    // Display the BMI category
    document.getElementById('bmi-category').textContent = `Kategori: ${category}`;

    // You can also include a gender-specific result if required
    if (gender === 'male') {
        // Additional logic for male BMI interpretation (optional)
        console.log('Laki-Laki selected');
    } else {
        // Additional logic for female BMI interpretation (optional)
        console.log('Wanita selected');
    }
});
