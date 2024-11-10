function generateDiscount() {
    
    const originalPrice = parseFloat(document.getElementById("originalPrice").value);
    const resultElement = document.getElementById("result");


    if (isNaN(originalPrice) || originalPrice <= 0) {
        resultElement.textContent = "Please enter a valid original price!";
        resultElement.style.color = "#ff4d4d"; 
        return;
    }
    
   
    const discountPercentage = Math.floor(Math.random() * 46) + 5;
    
  
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const finalPrice = originalPrice - discountAmount;
    
   
    resultElement.innerHTML = `
        Original Price: $${originalPrice.toFixed(2)}<br>
        Discount: ${discountPercentage}%<br>
        Discount Amount: $${discountAmount.toFixed(2)}<br>
        Final Price: $${finalPrice.toFixed(2)}
    `;
    resultElement.style.color = "#fff"; 
}
