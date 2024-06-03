import { cordIcon, facebookIcon, linkedInIcon, twitterIcon } from "./assets";
import { DataType } from "./pages/HostelDetails/components/DetailsTable/DetailsTableProps";

export const navItems = [
  {
    name: "Search",
    url: "/search",
  },
  {
    name: "My Requests",
    url: "/my-requests",
  },
  {
    name: "My Hostel",
    url: "/my-hostel",
  },
];

export interface AdCard {
  id: number;
  title: string;
  location: string;
  image: string;
  description: string;
}

export const adCardsData: AdCard[] = [
  {
    id: 1,
    title: "Green Valley Hostel",
    location: "Gulberg, Lahore",
    image: "https://picsum.photos/200",
    description:
      "Green Valley Hostel offers a peaceful environment with modern amenities. Located in the heart of Gulberg, Lahore, it provides easy access to shopping centers, restaurants, and public transport. The hostel features spacious rooms, free Wi-Fi, and 24/7 security.",
  },
  {
    id: 2,
    title: "Karachi Student Lodge",
    location: "Clifton, Karachi",
    image: "https://picsum.photos/200",
    description:
      "Karachi Student Lodge is situated in the bustling area of Clifton. It offers affordable accommodation with essential facilities like free breakfast, high-speed internet, and a common lounge. The lodge is close to major educational institutions and recreational spots.",
  },
  {
    id: 3,
    title: "Sunset Lodge",
    location: "Defence, Karachi",
    image: "https://picsum.photos/200",
    description:
      "Sunset Lodge in Defence, Karachi, offers a serene living environment with modern amenities. The hostel features spacious rooms, free Wi-Fi, and 24/7 security, making it an ideal choice for students and professionals.",
  },
  {
    id: 4,
    title: "City View Hostel",
    location: "Johar Town, Lahore",
    image: "https://picsum.photos/200",
    description:
      "City View Hostel is located in Johar Town, Lahore. It provides comfortable accommodation with easy access to shopping centers, restaurants, and public transport. The hostel features well-furnished rooms, a common lounge, and free internet.",
  },
  {
    id: 5,
    title: "Liberty Residence",
    location: "Liberty Market, Lahore",
    image: "https://picsum.photos/200",
    description:
      "Liberty Residence offers modern living spaces in Liberty Market, Lahore. It features spacious rooms, high-speed internet, and a communal kitchen. The residence is close to major shopping and dining areas, making it a convenient choice for residents.",
  },
  {
    id: 6,
    title: "Seaview Hostel",
    location: "DHA, Karachi",
    image: "https://picsum.photos/200",
    description:
      "Seaview Hostel in DHA, Karachi, provides a luxurious living experience with stunning sea views. The hostel offers well-furnished rooms, a fitness center, and high-speed internet. It is ideal for students and professionals seeking a comfortable and scenic stay.",
  },
  {
    id: 7,
    title: "Model Town Inn",
    location: "Model Town, Lahore",
    image: "https://picsum.photos/200",
    description:
      "Model Town Inn offers a peaceful environment with modern amenities in Model Town, Lahore. It provides easy access to shopping centers, restaurants, and public transport. The inn features spacious rooms, free Wi-Fi, and 24/7 security.",
  },
  {
    id: 8,
    title: "Crescent Hostel",
    location: "Gulshan-e-Iqbal, Karachi",
    image: "https://picsum.photos/200",
    description:
      "Crescent Hostel is located in Gulshan-e-Iqbal, Karachi, providing affordable accommodation with essential facilities. It features free breakfast, high-speed internet, and a common lounge. The hostel is close to major educational institutions and recreational spots.",
  },
  {
    id: 9,
    title: "Garden Town Hostel",
    location: "Garden Town, Lahore",
    image: "https://picsum.photos/200",
    description:
      "Garden Town Hostel provides a comfortable living experience in Garden Town, Lahore. The hostel offers spacious rooms, free Wi-Fi, and a communal kitchen. It is conveniently located near major universities and shopping areas.",
  },
  {
    id: 10,
    title: "Clifton Stay",
    location: "Clifton, Karachi",
    image: "https://picsum.photos/200",
    description:
      "Clifton Stay offers modern amenities and a convenient location in Clifton, Karachi. The hostel features well-furnished rooms, high-speed internet, and a common lounge. It is close to major educational institutions and recreational spots.",
  },
];

// TODO : Dummy data just for testing
export const hostelDetailsTableData: DataType[] = [
  {
    key: 1,
    roomNumber: "DH-01",
    roomType: "Bunker Room",
    numberOfBeds: "04",
    washroom: "01",
    seatsAvailable: "02",
    roomPricePerSeat: "Rs. 14,000",
  },
  {
    key: 2,
    roomNumber: "DH-01",
    roomType: "Bunker Room",
    numberOfBeds: "04",
    washroom: "01",
    seatsAvailable: "02",
    roomPricePerSeat: "Rs. 14,000",
  },
  {
    key: 3,
    roomNumber: "DH-01",
    roomType: "Bunker Room",
    numberOfBeds: "04",
    washroom: "01",
    seatsAvailable: "02",
    roomPricePerSeat: "Rs. 14,000",
  },
  {
    key: 4,
    roomNumber: "DH-01",
    roomType: "Bunker Room",
    numberOfBeds: "04",
    washroom: "01",
    seatsAvailable: "02",
    roomPricePerSeat: "Rs. 14,000",
  },
  {
    key: 5,
    roomNumber: "DH-01",
    roomType: "Bunker Room",
    numberOfBeds: "04",
    washroom: "01",
    seatsAvailable: "02",
    roomPricePerSeat: "Rs. 14,000",
  },
  {
    key: 6,
    roomNumber: "DH-01",
    roomType: "Bunker Room",
    numberOfBeds: "04",
    washroom: "01",
    seatsAvailable: "02",
    roomPricePerSeat: "Rs. 14,000",
  },
];

export const hostelDetailsDescriptionData = {
  title: "Description",
  description: [
    "Lorem ipsum dolor sit amet consectetur. Lobortis quis ornare est velit cursus quam gravida tellus lobortis. Eget ut adipiscing convallis fames pretium sed pellentesque sit eget. Tristique dignissim vel tortor adipiscing quis ultricies. Massa odio duis risus orci maecenas in massa eget eget.",
    "Lorem ipsum dolor sit amet consectetur. Vitae sagittis eget diam lacus. Sapien cras mauris sollicitudin dolor nec enim imperdiet.",
    "Lorem ipsum dolor sit amet consectetur. At nibh pretium turpis tellus. Sit gravida non praesent nunc. Congue aliquam convallis malesuada amet diam orci vitae at vel. Maecenas sapien vestibulum morbi placerat id. Posuere venenatis mauris quam nisl aenean sed nulla vel. Tellus aliquet curabitur risus quis molestie iaculis pretium viverra vulputate. Libero porttitor quam vestibulum congue luctus amet. Et eget pharetra quis ac adipiscing eros sagittis justo lacus. Nibh cras tempus aenean mauris gravida lectus. Volutpat tincidunt enim arcu turpis est varius condimentum ut. Duis congue nunc faucibus turpis porttitor.",
    "Lorem ipsum dolor sit amet consectetur. In dictum ipsum quis ullamcorper elit malesuada eget augue. Vel sed neque vulputate lectus urna faucibus ac pellentesque.",
  ],
};

export const howToBookData = [
  {
    title: "Browse Through A Pool Of Choices",
    Description:
      "Lorem ipsum dolor sit amet consectetur. Lobortis quis ornare est velit cursus quam gravida tellus lobortis. Eget ut adipiscing convallis fames pretium sed pellentesque sit eget. Tristique dignissim vel tortor adipiscing quis ultricies. Massa odio duis risus orci maecenas in massa eget eget.",
  },
  {
    title: "Contact Warden",
    Description:
      "Lorem ipsum dolor sit amet consectetur. At nibh pretium turpis tellus. Sit gravida non praesent nunc. Congue aliquam convallis malesuada amet diam orci vitae at vel. Maecenas sapien vestibulum morbi placerat id. Posuere venenatis mauris quam nisl aenean sed nulla vel. Tellus aliquet curabitur risus quis molestie iaculis pretium viverra vulputate. Libero porttitor quam vestibulum congue luctus amet. Et eget pharetra quis ac adipiscing eros sagittis justo lacus. Nibh cras tempus aenean mauris gravida lectus. Volutpat tincidunt enim arcu turpis est varius condimentum ut. Duis congue nunc faucibus turpis porttitor.",
  },
  {
    title: "Pay For Hostel",
    Description:
      "Lorem ipsum dolor sit amet consectetur. In dictum ipsum quis ullamcorper elit malesuada eget augue. Vel sed neque vulputate lectus urna faucibus ac pellentesque.",
  },
];

export const socialIcons = [
  {
    icon: twitterIcon,
    url: "/",
  },
  {
    icon: linkedInIcon,
    url: "/",
  },
  {
    icon: facebookIcon,
    url: "/",
  },
  {
    icon: cordIcon,
    url: "/",
  },
];
