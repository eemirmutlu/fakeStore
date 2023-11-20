//Fake Store

/* <div class="col-3">
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk
                    of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
    </div>
</div> */

// fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(json => console.log(json))

// let sepetLocal = localStorage.getItem("sepet")

// let sepet = JSON.parse(sepetLocal)

// console.log(sepet);

const row = document.querySelector("#row")

async function getData() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json()

        return data
    } catch (error) {
        console.log(error);
    }
}

// HTML'deki kartları içine yerleştireceğiniz div
const kartContainer = document.querySelector('#kartlar');

// fetch('katana.json')
//     .then(response => response.json())
//     .then(data => {
//         // Her katana için kart oluşturma
//         data.forEach(katana => {
//             const kart = document.createElement('div');
//             kart.className = 'col-3';

//             kart.innerHTML = `
//         <div class="card" style="width: 18rem;">
//           <img src="${katana.img}" class="card-img-top" alt="...">
//           <div class="card-body">
//             <h5 class="card-title">${katana.katana_isim}</h5>
//             <p class="card-text">Malzeme: ${katana.malzeme}, Uzunluk: ${katana.uzunluk_cm} cm</p>
//             <a href="#" class="btn btn-primary">Detaylar</a>
//           </div>
//         </div>
//       `;

//             // Kartı kartContainer içine ekleme
//             kartContainer.appendChild(kart);
//         });
//     })
//     .catch(error => console.error('Veri alınamadı:', error));


sepet = []

getData()
    .then(data => {
        console.log(data);

        data.forEach((urun) => {
            console.log(urun);

            const col_3 = document.createElement("div")
            col_3.classList.add("col-3")

            const card = document.createElement("div")
            card.className = "card"
            card.style.width = '18rem';

            const imgDiv = document.createElement("div")
            imgDiv.className = "card"
            imgDiv.style.width = "100%"
            imgDiv.style.height = "100%"

            const img = document.createElement("img")
            img.src = urun.image;
            img.alt = urun.name;

            const cardBody = document.createElement("div")
            cardBody.className = "card-body";

            const cardTitle = document.createElement("h5")
            cardTitle.className = "card-title";
            cardTitle.innerHTML = urun.title;

            const cardText = document.createElement("p")
            cardText.className = "card-text";
            let content = `${urun.description} - price: ${urun.price}`
            cardText.innerHTML = content

            const button = document.createElement("button")
            button.type = "button"
            button.className = "btn btn-danger"
            button.innerHTML = "Sepete Ekle"

            button.addEventListener("click", () => {
                // console.log(urun);
                sepet.push(urun)
                console.log(sepet);

                let sepetJSON = JSON.stringify(sepet)
                localStorage.setItem ("sepet", sepetJSON)
            })


            cardBody.appendChild(cardTitle)
            // cardBody.appendChild(cardText)
            cardBody.appendChild(button)

            card.appendChild(imgDiv)
            card.appendChild(cardBody)

            imgDiv.appendChild(img)

            col_3.appendChild(card)
            row.appendChild(col_3)
            //console.log(row)



        })
    })