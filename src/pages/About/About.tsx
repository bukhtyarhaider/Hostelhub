import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Us</h1>
      <p>Welcome to <strong>HostelHub.com</strong>!</p>
      <p>
        HostelHub is your ultimate platform for finding, comparing, and booking affordable and comfortable hostel accommodations. Whether you're a student looking for a home away from home, a backpacker exploring new destinations, or a professional on a budget, HostelHub is here to make your search simple, fast, and stress-free.
      </p>
      <h2>Our Mission</h2>
      <p>
        We are on a mission to redefine the hostel booking experience. By offering a user-friendly platform with detailed information, real-time availability, and verified reviews, HostelHub aims to help travelers make informed choices and discover the perfect place to stay without hassle.
      </p>
      <h2>Why Choose HostelHub?</h2>
      <ul>
        <li><strong>Comprehensive Listings:</strong> We partner with hostels across multiple cities to bring you a wide variety of options tailored to fit every preference and budget.</li>
        <li><strong>Transparent Pricing:</strong> With no hidden fees, we ensure that the price you see is the price you pay.</li>
        <li><strong>Secure Bookings:</strong> Your safety is our priority. HostelHub uses secure booking systems to ensure your information is always protected.</li>
        <li><strong>User Reviews and Ratings:</strong> Gain insights from fellow travelers and make decisions based on genuine experiences.</li>
      </ul>
      <h2>Our Values</h2>
      <p>
        At HostelHub, we believe in transparency, trust, and community. We strive to build a platform that doesn’t just connect you to hostels but fosters connections among travelers.
      </p>
      <h2>Connect with Us</h2>
      <p>Your feedback matters! Connect with us on social media, and let us know how we can make your booking experience even better.</p>
    </div>
  );
}

export default About;
