// Dynamically populate funds page from funds.json
fetch('json/funds.json')
  .then(response => response.json())
  .then(data => {
    const fundsContainer = document.getElementById('funds-container');
    if (!fundsContainer) return;
    data.funds.forEach(fund => {
      const fundDiv = document.createElement('div');
      fundDiv.className = 'fund-item';
      // Use a wrapper to enforce square aspect ratio for QR
      fundDiv.innerHTML = `
        <h2>${fund.name}</h2>
        <p>ID: <span class="fund-id">${fund.id}</span></p>
        <div class="qr-wrapper">
          <img src="${fund.qr_image}" alt="${fund.name} QR" class="fund-qr" />
        </div>
      `;
      fundsContainer.appendChild(fundDiv);
    });
  })
  .catch(error => {
    console.error('Error loading funds:', error);
  });
