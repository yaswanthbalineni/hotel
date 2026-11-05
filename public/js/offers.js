const offers = [

    {
        id: 1,
        hotel: "Grand Palace Hotel",
        location: "Hyderabad",
        category: "weekend",
        discount: "30% OFF",
        oldPrice: 8000,
        newPrice: 5600,
        description: "Enjoy a luxury weekend stay with complimentary breakfast.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
    },

    {
        id: 2,
        hotel: "Royal Orchid Hotel",
        location: "Bangalore",
        category: "festival",
        discount: "25% OFF",
        oldPrice: 6000,
        newPrice: 4500,
        description: "Celebrate festivals with exclusive hotel discounts.",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
    },

    {
        id: 3,
        hotel: "Paradise Resort",
        location: "Goa",
        category: "couple",
        discount: "40% OFF",
        oldPrice: 10000,
        newPrice: 6000,
        description: "Special romantic package for couples with premium facilities.",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d"
    },

    {
        id: 4,
        hotel: "Green Valley Hotel",
        location: "Ooty",
        category: "weekend",
        discount: "20% OFF",
        oldPrice: 5000,
        newPrice: 4000,
        description: "Relax in nature with our exclusive weekend package.",
        image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c"
    }

];


// Display Offers

function displayOffers(offerList) {

    const container = document.getElementById("offers-container");

    container.innerHTML = "";

    offerList.forEach(offer => {

        const card = document.createElement("div");

        card.className = "offer-card";

        card.innerHTML = `

            <img src="${offer.image}" alt="${offer.hotel}">

            <div class="offer-info">

                <span class="discount-badge">
                    ${offer.discount}
                </span>

                <h3>${offer.hotel}</h3>

                <p>📍 ${offer.location}</p>

                <p class="offer-type">
                    ${offer.category.toUpperCase()} OFFER
                </p>

                <p>
                    <span class="old-price">
                        ₹${offer.oldPrice}
                    </span>

                    <span class="new-price">
                        ₹${offer.newPrice}
                    </span>
                </p>

                <p class="offer-description">
                    ${offer.description}
                </p>

                <button class="claim-btn"
                    onclick="claimOffer(${offer.id})">

                    Claim Offer

                </button>

            </div>

        `;

        container.appendChild(card);

    });

}


// Filter Offers

function filterOffers(category) {

    if (category === "all") {

        displayOffers(offers);

    } else {

        const filteredOffers = offers.filter(
            offer => offer.category === category
        );

        displayOffers(filteredOffers);

    }

}


// Claim Offer

function claimOffer(id) {

    const selectedOffer = offers.find(
        offer => offer.id === id
    );

    if (selectedOffer) {

        alert(
            "Congratulations!\n\nYou selected: " +
            selectedOffer.hotel +
            "\nDiscount: " +
            selectedOffer.discount +
            "\nOffer Price: ₹" +
            selectedOffer.newPrice
        );

    }

}


// Initial Display

displayOffers(offers);