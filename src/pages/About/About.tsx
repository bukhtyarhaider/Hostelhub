import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Us</h1>
      <p>
        Welcome to <strong>HostelHub.com</strong>!
      </p>
      <p>
        At HostelHub, we are your trusted partner for discovering, comparing,
        and booking affordable and comfortable hostel accommodations. Whether
        you are a student seeking a welcoming home away from home, a backpacker
        embarking on an exciting adventure, or a professional traveling on a
        budget, HostelHub is dedicated to simplifying your journey with a fast,
        user-friendly, and hassle-free experience.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to transform the hostel booking experience. By providing
        a seamless platform with comprehensive details, real-time availability,
        and verified reviews, HostelHub empowers travelers to make confident,
        informed decisions and discover accommodations that perfectly suit their
        needs.
      </p>

      <h2>Why Choose HostelHub?</h2>
      <ul>
        <li>
          <strong>Extensive Listings:</strong> We collaborate with a vast
          network of hostels across numerous cities, offering diverse options
          tailored to every preference and budget.
        </li>
        <li>
          <strong>Transparent Pricing:</strong> No hidden costs or
          surprises—what you see is exactly what you pay.
        </li>
        <li>
          <strong>Secure Bookings:</strong> Your safety is our top priority.
          HostelHub employs advanced security measures to safeguard your
          information.
        </li>
        <li>
          <strong>Authentic Reviews and Ratings:</strong> Make confident
          decisions with insights from genuine traveler experiences.
        </li>
      </ul>

      <h2>Our Core Values</h2>
      <p>
        Transparency, trust, and community are the pillars of HostelHub. We are
        committed to building a platform that not only connects you to
        exceptional hostels but also fosters meaningful connections among
        travelers.
      </p>

      <h2>Stay Connected</h2>
      <p>
        Your feedback drives us to improve continuously. Follow us on social
        media and share your thoughts on how we can enhance your booking
        experience. Together, let’s make every journey memorable.
      </p>
    </div>
  );
};

export default About;
