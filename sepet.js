let sepetLocal = localStorage.getItem("sepet")

// let sepet = []

let sepet = JSON.parse(sepetLocal)

console.log(sepet);

const h1 = document.getElementById("h1")

const container = document.querySelector(".container")


// sepet.forEach( urun => {
//     const h1 = document.createElement('h1')
//     h1.textContent = `Sepetinizde ${urun.title} adlı ürün bulundu.`

//     container.append(h1)

// })

if (sepetLocal !== null) {
    sepet = JSON.parse(sepetLocal);
    sepet.forEach(urun => {
        const div = document.createElement("div")
        div.style.width = "100%"
        div.classList.add("d-flex", "align-items-center", "border", "rounded-3", "gap-3", "mt-2")

        const imgDiv = document.createElement("div")
        imgDiv.style.width = "20%"
        imgDiv.style.height = "100%"

        const img = document.createElement("img")
        img.src = urun.image
        // img.classList.add("w-100")
        img.style.width = "100%"
        img.style.height = "100%"

        const title = document.createElement("h3")
        title.textContent = urun.title

        const price = document.createElement("p")
        price.textContent = `${urun.price}$`
        const button = document.createElement("button")
        button.type = "submit"
        button.className = "btn btn-danger"
        button.innerHTML = `<i class="fa fa-trash"></i>`;
        button.style.color = "black"
        button.addEventListener("click", function () {
            console.log(this.parentElement);

            // Eğer sepette ürünler varsa localStorage'dan da kaldırmalısınız
            const currentTitle = this.parentElement.querySelector("h3").textContent; // Ürün başlığından referans alıyoruz

            // localStorage'dan sepet verisini alıp JSON formatına çeviriyoruz
            let sepetLocal = localStorage.getItem("sepet");
            let sepet = [];

            if (sepetLocal !== null) {
                sepet = JSON.parse(sepetLocal);

                // Sepetten silinecek ürünün index'ini buluyoruz
                const index = sepet.findIndex(urun => urun.title === currentTitle);

                if (index !== -1) {
                    // Sepet dizisinden ürünü siliyoruz
                    sepet.splice(index, 1);

                    // Güncellenmiş sepet verisini tekrar localStorage'a kaydediyoruz
                    localStorage.setItem("sepet", JSON.stringify(sepet));
                }
            }

            // HTML üzerinden görsel olarak da kaldırıyoruz
            this.parentElement.remove();
        })


        imgDiv.appendChild(img)

        div.appendChild(imgDiv)
        div.appendChild(title)
        div.appendChild(price)
        div.appendChild(button)

        container.appendChild(div)

    })
} else {
    const h4 = document.createElement("h1")
    h4.innerHTML = "Seçim yapmadınız.";
    container.appendChild(h4)
}
// localStorage.clear()


