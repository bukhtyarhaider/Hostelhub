import styles from './Services.module.scss';

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <h1>Our Services</h1>
      <p>At HostelHub, we offer a range of services to ensure a smooth and reliable hostel booking experience. Explore our services below to find out more about what we offer:</p>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h2>Hostel Search and Comparison</h2>
          <p>Find the perfect hostel by browsing through our extensive listings. Compare options based on location, pricing, amenities, and guest reviews.</p>
        </div>

        <div className={styles.card}>
          <h2>Easy Online Booking</h2>
          <p>Book your room in just a few clicks with our secure booking system. No hidden fees, transparent pricing, and instant confirmation.</p>
        </div>

        <div className={styles.card}>
          <h2>User Reviews and Ratings</h2>
          <p>Read genuine reviews from other travelers to make an informed choice. Ratings and feedback provide valuable insights into the hostel experience.</p>
        </div>

        <div className={styles.card}>
          <h2>Free Wi-Fi</h2>
          <p>Stay connected with free Wi-Fi at select hostels. Whether you need to catch up on work or connect with loved ones, we've got you covered.</p>
        </div>

        <div className={styles.card}>
          <h2>Customer Support</h2>
          <p>Our customer support team is here to assist you with any questions or issues, from booking inquiries to post-stay feedback.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
