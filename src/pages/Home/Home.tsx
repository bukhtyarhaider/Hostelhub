import homeStyles from "./Home.module.scss";
import { adCardsData } from "../../content";
import Filters from "../../components/Filters/Filters";
import AdCard from "../../components/AdCard/AdCard";
import CTA from "../../components/CTA/CTA";

const Home = () => {
  return (
    <div className={homeStyles.homeContainer}>
      <Filters />

      <div className={homeStyles.cardsContainer}>
        {adCardsData.map((item, index) => (
          <>
            {index === 3 ? (
              <CTA
                primaryText="Sign in, search more"
                secondaryText="Unlock hundreds of new hostels with just a single Sign Up!"
                onPrimaryBtn={() => {}}
                onSecondaryBtn={() => {}}
              />
            ) : (
              <></>
            )}
            <AdCard
              title={item.title}
              description={item.description}
              image={item.image}
              location={item.location}
              onShowDetails={() => {}}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;
