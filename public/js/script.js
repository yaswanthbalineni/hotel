const hotels = [
    {
        name: "Grand Palace Hotel",
        location: "Hyderabad",
        oldPrice: 8000,
        newPrice: 5600,
        discount: "30% OFF",
        image: "images/hotel1.jpg"
    },
    {
        name: "Royal Orchid Hotel",
        location: "Bangalore",
        oldPrice: 6000,
        newPrice: 4200,
        discount: "30% OFF",
        image: "images/hotel2.jpg"
    },
    {
        name: "Paradise Resort",
        location: "Goa",
        oldPrice: 10000,
        newPrice: 7000,
        discount: "30% OFF",
        image: "images/hotel3.jpg"
    },
    {
        name: "Green Valley Hotel",
        location: "Ooty",
        oldPrice: 5000,
        newPrice: 3500,
        discount: "30% OFF",
        image: "images/hotel4.jpg"
    }
];

const hotelContainer = document.getElementById("hotel-container");

hotels.forEach((hotel, index) => {

    const card = document.createElement("div");

    card.className = "hotel-card";

    card.innerHTML = `
        <img src="${hotel.image}" alt="${hotel.name}">

        <div class="hotel-info">

            <span class="discount">${hotel.discount}</span>

            <h3>${hotel.name}</h3>

            <p class="location">📍 ${hotel.location}</p>

            <p>
                <span class="old-price">₹${hotel.oldPrice}</span>
                <span class="new-price">₹${hotel.newPrice}</span>
            </p>

            <button class="book-btn"
                onclick="bookHotel('${hotel.name}')">
                View Deal
            </button>

        </div>
    `;

    hotelContainer.appendChild(card);
});

function bookHotel(hotelName) {
    alert("You selected: " + hotelName);
}