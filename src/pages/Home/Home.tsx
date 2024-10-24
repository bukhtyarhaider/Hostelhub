// Import necessary hooks and components
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import homeStyles from "./Home.module.scss";
import { Filters } from "../../components/Filters/Filters";
import AdCard from "../../components/AdCard/AdCard";
import CTA from "../../components/CTA/CTA";
import NoHostelFound from "../../components/NoHotelFound/NoHotelFound";
import { HomeProps } from "./HomeProps";
import { fetchHostel } from "../../services/firebase";
import { Hostel } from "../../types/types";
import { ClipLoader } from "react-spinners";

const Home = ({
  authUser,
  toggleRegisterModal,
  toggleSignInModal,
}: HomeProps) => {
  const navigate = useNavigate();
  const [hostelData, setHostelData] = useState<Hostel[]>([]);
  const [filteredData, setFilteredData] = useState<Hostel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAllHostels = async () => {
      setIsLoading(true);
      try {
        const allHostels = await fetchHostel();
        if (allHostels.length) {
          setHostelData(allHostels);
          setFilteredData(allHostels);
        }
      } catch (error) {
        console.error("Error fetching hostels:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllHostels();
  }, []);

  // Filter hostel data based on provided criteria
  const handleFilterChange = (filters: {
    name: string;
    location: string;
    type: string;
  }) => {
    const { name, location, type } = filters;

    const filtered = hostelData.filter(
      (item) =>
        (!name || item.name.toLowerCase().includes(name.toLowerCase())) &&
        (!location ||
          item.location.toLowerCase().includes(location.toLowerCase())) &&
        (!type || item.type.toLowerCase().includes(type.toLowerCase()))
    );

    setFilteredData(filtered);
  };

  // Render method
  return (
    <div className={homeStyles.homeContainer}>
      <Filters onFilterChange={handleFilterChange} />

      <div className={homeStyles.cardsContainer}>
        {isLoading ? (
          <div className={homeStyles.loaderContainer}>
            <ClipLoader size={50} color={"blue"} />
          </div>
        ) : filteredData.length > 0 ? (
          filteredData.map((hostel, index) => (
            <div key={hostel.id}>
              {index === 3 && !authUser && (
                <CTA
                  primaryText="Sign in, search more"
                  secondaryText="Unlock hundreds of new hostels with just a single Sign Up!"
                  onPrimaryBtn={toggleSignInModal}
                  onSecondaryBtn={toggleRegisterModal}
                />
              )}
              <AdCard
                title={hostel.name}
                description={hostel.description}
                image={hostel.images[0]}
                location={hostel.location}
                // onShowDetails={() => navigate(`/hostel-details/${hostel.id}`)}
                onShowDetails={() =>
                  navigate("/hostel-details", {
                    state: {
                      hostelDetails: hostel,
                    },
                  })
                }
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
