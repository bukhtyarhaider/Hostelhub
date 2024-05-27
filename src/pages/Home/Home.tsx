import { useState } from "react";
import homeStyles from "./Home.module.scss";
import { AdCard as AdCardItem, adCardsData } from "../../content";
import { Filters } from "../../components/Filters/Filters";
import AdCard from "../../components/AdCard/AdCard";
import CTA from "../../components/CTA/CTA";

const Home = () => {
  const [filteredData, setFilteredData] = useState<AdCardItem[]>(adCardsData);

  const handleFilterChange = (filters: {
    hostelName: string;
    location: string;
    type: string;
  }) => {
    const { hostelName, location } = filters;

    const filtered = adCardsData.filter((item) => {
      return (
        (!hostelName ||
          item.title.toLowerCase().includes(hostelName.toLowerCase())) &&
        (!location ||
          item.location.toLowerCase().includes(location.toLowerCase()))
      );
    });

    setFilteredData(filtered);
  };

  return (
    <div className={homeStyles.homeContainer}>
      <Filters onFilterChange={handleFilterChange} />

      <div className={homeStyles.cardsContainer}>
        {filteredData.map((item, index) => (
          <div key={index}>
            {index === 3 && (
              <CTA
                primaryText="Sign in, search more"
                secondaryText="Unlock hundreds of new hostels with just a single Sign Up!"
                onPrimaryBtn={() => {}}
                onSecondaryBtn={() => {}}
              />
            )}
            <AdCard
              title={item.title}
              description={item.description}
              image={item.image}
              location={item.location}
              onShowDetails={() => {}}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
