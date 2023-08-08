import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import image from "./assets/hero-desc.svg";
import Contact from "./components/Contact";
import Card from "./components/Card";
import solo_offer_image from "./assets/solo_offer.svg";
import duo_offer_image from "./assets/duo.svg";
import fam_offer_image from "./assets/familial.svg";
import paris from "./assets/travel_places/paris.jpg";
import dubai from "./assets/travel_places/dubai.jpg";
import istanbul from "./assets/travel_places/istanbul.jpg";
import venice from "./assets/travel_places/venice.jpg";
import sydney from "./assets/travel_places/sydney.jpg";
import tokyo from "./assets/travel_places/tokyo.jpg";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <div className="hero">
      <div className="text-container">
        <div className="description">
          <h2>
            Golden <span>Stars</span> Travels
          </h2>
          <p>
            GST on unforgettable journeys with our travel agency. Discover
            curated destinations, personalized itineraries, and seamless travel
            experiences. Let us turn your travel dreams into reality, ensuring
            every moment is filled with wonder and adventure.
          </p>
        </div>
        <img src={image} alt="image" />
      </div>
    </div>
    <section className="container" id="offers">
      <h2>Our Offers</h2>
      <div
        style={{
          position: "relative",
          zIndex: "20",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Card
          photo={solo_offer_image}
          name={"Single"}
          details={
            "it an offer for single person with good pricing the sheeper one from all those provide a totale care and divers amazing travels."
          }
          price={450}
        />
        <Card
          photo={duo_offer_image}
          name={"Couple"}
          details={
            "it an offer for two person with good pricing that provide a totale care and divers amazing travels."
          }
          price={720}
        />
        <Card
          photo={fam_offer_image}
          name={"Familial"}
          details={
            "it an offer for Families more then 4 person with good pricing provide a totale care and divers amazing travels."
          }
          price={1250}
        />
      </div>
    </section>

    <section id="pricing" className="container">
      <h2>Aviable Travels</h2>
      <div
        style={{
          position: "relative",
          zIndex: "20",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Card
          photo={paris}
          name={"Paris Fra"}
          details={`Paris, the "City of Love," boasts iconic landmarks like the Eiffel Tower and Louvre Museum, enveloping visitors in a blend of art, culture, and enchanting ambiance.`}
          price={650}
        />
        <Card
          photo={istanbul}
          name={"Istanbul Tur"}
          details={
            "Istanbul, where East meets West, enchants with its historic grandeur seen in Hagia Sophia and Blue Mosque, while vibrant bazaars and Bosphorus strait bridge cultures."
          }
          price={600}
        />
        <Card
          photo={dubai}
          name={"Dubai UE"}
          details={
            "Dubai, a modern marvel in the desert, dazzles with its futuristic skyline, luxurious shopping, and iconic landmarks like the Burj Khalifa, epitomizing opulence and innovation."
          }
          price={950}
        />

        <Card
          photo={venice}
          name={"Venice Ita"}
          details={
            "Venice, the floating masterpiece, weaves a romantic spell with its intricate canals, ornate architecture, and timeless charm, making every corner a picturesque delight."
          }
          price={1150}
        />

        <Card
          photo={sydney}
          name={"Sydney Aus"}
          details={
            "Sydney, a vibrant Australian gem, captivates with its iconic Sydney Opera House set against the stunning backdrop of Sydney Harbour, offering a blend of urban energy and natural beauty."
          }
          price={950}
        />

        <Card
          photo={tokyo}
          name={"Tokyo Jpa"}
          details={
            "Tokyo, a dynamic metropolis, harmonizes traditional temples and futuristic technology, where bustling markets and serene gardens create a captivating blend of modernity and culture."
          }
          price={980}
        />
      </div>
    </section>

    <section id="about" className="container">
      <h2>About Us</h2>
      <h3>Unlocking Unforgettable Adventures: Your Journey Begins with Our Travel Agency</h3>
      <p>Are you ready to turn your travel dreams into reality? Look no further! At our travel agency, we specialize in curating exceptional experiences that ignite wanderlust and create lasting memories. Embark on a journey where every detail is meticulously crafted to suit your desires, ensuring your adventure is nothing short of extraordinary.</p>
      <h3>Personalized Planning for Your Perfect Getaway</h3>
      <p>Gone are the days of generic travel packages. With our agency, your trip is as unique as you are. Our expert travel advisors take the time to understand your preferences, interests, and budget, tailoring each itinerary to reflect your individuality. Whether you're seeking a romantic escape, a family-friendly holiday, an adrenaline-fueled adventure, or a serene retreat, we've got you covered.</p>
      <h3>Seamless Travel Experiences</h3>
      <p>Bid farewell to the hassles of planning and organizing. Our travel agency handles all the logistics, from flights and accommodations to transportation and activities. We have an extensive network of trusted partners and suppliers worldwide, ensuring you receive top-notch services and unparalleled access to exclusive experiences. Your only task is to immerse yourself in the journey.</p>
      <h3>Global Destinations, Local Expertise</h3>
      <p>Dreaming of sipping espresso in a charming Italian cafe, exploring ancient temples in Kyoto, or snorkeling in the crystal-clear waters of the Maldives? Our agency boasts a portfolio of destinations that span the globe, each selected for its cultural richness, natural beauty, and unique allure. With our deep-rooted local connections, you'll uncover hidden gems and authentic encounters that go beyond the ordinary tourist path.</p>
      <h3>Safety and Support</h3>
      <p>our well-being is our utmost priority. We stay updated with the latest travel advisories and ensure that your adventures are not only exciting but also safe. From comprehensive travel insurance options to 24/7 assistance during your journey, we provide peace of mind so you can fully embrace the thrill of exploration.</p>
      <h3>Creating Lasting Memories</h3>
      <p>Travel is not just about visiting places; it's about collecting moments. Whether it's watching the sunrise over a misty mountaintop, savoring the flavors of a new cuisine, or forming connections with fellow travelers, our agency crafts opportunities for you to savor the richness of each experience. These memories will stay with you long after your journey ends.</p>
      <h3>Begin Your Next Chapter</h3>
      <p>Your next adventure awaits, and our travel agency is here to make it extraordinary. Let us transform your aspirations into an itinerary that reflects your dreams. Unveil new horizons, embrace diverse cultures, and let the world's wonders become your playground. Contact us today and let the journey of a lifetime begin. Your story, enriched by travel, starts here.</p>
    </section>
    <Contact/>
    <Footer/>
  </React.StrictMode>
);
