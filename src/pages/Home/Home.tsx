import { useState } from "react";
import homeStyles from "./Home.module.scss";
import { AdCard as AdCardItem, adCardsData } from "../../content";
import { Filters } from "../../components/Filters/Filters";
import AdCard from "../../components/AdCard/AdCard";
import CTA from "../../components/CTA/CTA";
import NoHostelFound from "../../components/NoHotelFound/NoHotelFound";
import { useNavigate } from "react-router-dom";
import { HomeProps } from "./HomeProps";

const Home = ({
  authUser,
  toggleRegisterModal,
  toggleSignInModal,
}: HomeProps) => {
  const navigate = useNavigate();
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
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index}>
              {index === 3 && !authUser && (
                <CTA
                  primaryText="Sign in, search more"
                  secondaryText="Unlock hundreds of new hostels with just a single Sign Up!"
                  onPrimaryBtn={() => {
                    toggleSignInModal();
                  }}
                  onSecondaryBtn={() => {
                    toggleRegisterModal();
                  }}
                />
              )}
              <AdCard
                title={item.title}
                description={item.description}
                image={item.image}
                location={item.location}
                onShowDetails={() => {
                  navigate(`/hostel-details/${item.id}`);
                }}
              />
            </div>
          ))
        ) : (
          <NoHostelFound />
        )}
      </div>
    </div>
  );
};

export default Home;
