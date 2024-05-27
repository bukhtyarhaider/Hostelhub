import { cordIcon, facebookIcon, linkedInIcon, twitterIcon } from "./assets";

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
  title: string;
  location: string;
  image: string;
  description: string;
}

export const adCardsData: AdCard[] = [
  {
    title: "Green Valley Hostel",
    location: "Gulberg, Lahore",
    image: "https://picsum.photos/200",
    description:
      "Green Valley Hostel offers a peaceful environment with modern amenities. Located in the heart of Gulberg, Lahore, it provides easy access to shopping centers, restaurants, and public transport. The hostel features spacious rooms, free Wi-Fi, and 24/7 security.",
  },
  {
    title: "Karachi Student Lodge",
    location: "Clifton, Karachi",
    image: "https://picsum.photos/200",
    description:
      "Karachi Student Lodge is situated in the bustling area of Clifton. It offers affordable accommodation with essential facilities like free breakfast, high-speed internet, and a common lounge. The lodge is close to major educational institutions and recreational spots.",
  },
  {
    title: "Sunset Lodge",
    location: "Defence, Karachi",
    image: "https://picsum.photos/200",
    description:
      "Sunset Lodge in Defence, Karachi, offers a serene living environment with modern amenities. The hostel features spacious rooms, free Wi-Fi, and 24/7 security, making it an ideal choice for students and professionals.",
  },
  {
    title: "City View Hostel",
    location: "Johar Town, Lahore",
    image: "https://picsum.photos/200",
    description:
      "City View Hostel is located in Johar Town, Lahore. It provides comfortable accommodation with easy access to shopping centers, restaurants, and public transport. The hostel features well-furnished rooms, a common lounge, and free internet.",
  },
  {
    title: "Liberty Residence",
    location: "Liberty Market, Lahore",
    image: "https://picsum.photos/200",
    description:
      "Liberty Residence offers modern living spaces in Liberty Market, Lahore. It features spacious rooms, high-speed internet, and a communal kitchen. The residence is close to major shopping and dining areas, making it a convenient choice for residents.",
  },
  {
    title: "Seaview Hostel",
    location: "DHA, Karachi",
    image: "https://picsum.photos/200",
    description:
      "Seaview Hostel in DHA, Karachi, provides a luxurious living experience with stunning sea views. The hostel offers well-furnished rooms, a fitness center, and high-speed internet. It is ideal for students and professionals seeking a comfortable and scenic stay.",
  },
  {
    title: "Model Town Inn",
    location: "Model Town, Lahore",
    image: "https://picsum.photos/200",
    description:
      "Model Town Inn offers a peaceful environment with modern amenities in Model Town, Lahore. It provides easy access to shopping centers, restaurants, and public transport. The inn features spacious rooms, free Wi-Fi, and 24/7 security.",
  },
  {
    title: "Crescent Hostel",
    location: "Gulshan-e-Iqbal, Karachi",
    image: "https://picsum.photos/200",
    description:
      "Crescent Hostel is located in Gulshan-e-Iqbal, Karachi, providing affordable accommodation with essential facilities. It features free breakfast, high-speed internet, and a common lounge. The hostel is close to major educational institutions and recreational spots.",
  },
  {
    title: "Garden Town Hostel",
    location: "Garden Town, Lahore",
    image: "https://picsum.photos/200",
    description:
      "Garden Town Hostel provides a comfortable living experience in Garden Town, Lahore. The hostel offers spacious rooms, free Wi-Fi, and a communal kitchen. It is conveniently located near major universities and shopping areas.",
  },
  {
    title: "Clifton Stay",
    location: "Clifton, Karachi",
    image: "https://picsum.photos/200",
    description:
      "Clifton Stay offers modern amenities and a convenient location in Clifton, Karachi. The hostel features well-furnished rooms, high-speed internet, and a common lounge. It is close to major educational institutions and recreational spots.",
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
