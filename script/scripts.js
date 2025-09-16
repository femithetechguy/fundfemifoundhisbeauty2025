// Dynamically populate funds page from funds.json
fetch('json/funds.json')
  .then(response => response.json())
  .then(data => {
    const fundsContainer = document.getElementById('funds-container');
    if (!fundsContainer) return;
    data.funds.forEach(fund => {
      const fundDiv = document.createElement('div');
      fundDiv.className = 'fund-item';
      // Determine image type for alt text
      let imgType = '';
      if (fund.qr_image.endsWith('.png')) imgType = 'PNG';
      else if (fund.qr_image.endsWith('.jpeg') || fund.qr_image.endsWith('.jpg')) imgType = 'JPEG';
      fundDiv.innerHTML = `
        <h2>${fund.name}</h2>
        <p>ID: <span class="fund-id">${fund.id}</span></p>
        <img src="${fund.qr_image}" alt="${fund.name} QR (${imgType})" class="fund-qr" />
      `;
      fundsContainer.appendChild(fundDiv);
    });
  })
  .catch(error => {
    console.error('Error loading funds:', error);
  });
