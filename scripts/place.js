// place.js - Simplified version

// 1. Simple function to calculate wind chill (one line as required by the exercise)
function calculateWindChill(temp, wind) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
}

// 2. Main function that does everything
function initPage() {
    // A. UPDATE FOOTER (requirement 1)
    const currentYear = new Date().getFullYear();
    const lastModified = new Date(document.lastModified);

    // Format last modification date
    const day = String(lastModified.getDate()).padStart(2, '0');
    const month = String(lastModified.getMonth() + 1).padStart(2, '0');
    const year = lastModified.getFullYear();
    const hours = String(lastModified.getHours()).padStart(2, '0');
    const minutes = String(lastModified.getMinutes()).padStart(2, '0');
    const seconds = String(lastModified.getSeconds()).padStart(2, '0');

    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    // Update footer
    document.querySelector('footer p:first-child').innerHTML = `&copy; ${currentYear} 😎 Gary Selios - Uruguay 😎`;
    document.querySelector('footer .last-modified').textContent = `Last Modification: ${formattedDate}`;

    // B. CALCULATE WIND CHILL (requirement 2)
    const temperature = 28;  // Static value that matches the HTML
    const windSpeed = 5;     // Static value that matches the HTML

    // Check conditions (requirement 3)
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        const windChillDisplay = Math.round(windChill * 10) / 10 + '°C';
        document.querySelector('#weather .weather-item:last-child .value').textContent = windChillDisplay;
    } else {
        document.querySelector('#weather .weather-item:last-child .value').textContent = 'N/A';
    }
}

// 3. Execute when page loads
document.addEventListener('DOMContentLoaded', initPage);