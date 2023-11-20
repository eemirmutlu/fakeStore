fetch('katana.json')
    .then(response => response.json())
    .then(data => {
        // Her katana için kart oluşturma
        data.forEach(katana => {
            const kart = document.createElement('div');
            kart.className = 'col-3';

            kart.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${katana.img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${katana.katana_isim}</h5>
            <p class="card-text">Malzeme: ${katana.malzeme}, Uzunluk: ${katana.uzunluk_cm} cm</p>
            <a href="#" class="btn btn-primary">Detaylar</a>
          </div>
        </div>
      `;

            // Kartı kartContainer içine ekleme
            kartContainer.appendChild(kart);
        });
    })
    .catch(error => console.error('Veri alınamadı:', error));