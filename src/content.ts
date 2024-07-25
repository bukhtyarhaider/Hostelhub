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

// TODO : Dummy data just for testing
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
export const hostelDetailsData = {
  hostel_name: "Downing Hostel",
  reservation_holder_details: {
    holder_name: "Naomi Doe",
    holder_email: "naomi@gmail.com",
    holder_phone_number: "+1 (206) 349 9724",
    start_date: "12-May-2024",
    end_date: "12-May-2026",
  },
  hostel_details: {
    warden_name: "Mr. John Doe",
    warden_email: "warden@downinghostel.com",
    warden_phone_number: "+1 (206) 349 9724",
  },
  reservation_overview: {
    alert:
      "Your profile details have been used for your reservation at “Downing Hostel”. These details can’t be changed manually by your user portal. Contact your warden if you wish to change anything.",
    total_days: "30",
    spent_days: "12",
    remaining_days: "18",
  },
};

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

// TODO : Dummy data just for testing
export const hostelRequestsData = [
  {
    image: "https://picsum.photos/200",
    title: "Downing Hostel",
    location: "123, Downing Street, LA.",
    type: "Single Room",
    price: "PKR 15000",
    status: "Pending",
    decisionDetails: [],
  },
  {
    image: "https://picsum.photos/210",
    title: "Downing Hostel",
    location: "123, Downing Street, LA.",
    type: "Single Room",
    price: "PKR 15000",
    status: "Approved",
    decisionDetails: [
      "We’re pleased to inform you that your request for hostel accommodation has been approved. Please contact your immediate warden for payment and other details.",
    ],
  },
  {
    image: "https://picsum.photos/220",
    title: "Downing Hostel",
    location: "123, Downing Street, LA.",
    type: "Single Room",
    price: "PKR 15000",
    status: "Rejected",
    decisionDetails: [
      "We’re regret to inform you that your request for hostel accommodation have been rejected. Please contact your immediate warden for reason of rejection and other details.",
    ],
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

// TODO : Dummy data just for testing
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

// TODO : Dummy data just for testing
export const hostelNoticeCardsData = [
  {
    title: "Urgent Notice!",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tristique leo sollicitudin volutpat nunc ac. Justo mattis nullam imperdiet aliquam pulvinar. Facilisis potenti pellentesque feugiat in dui. Amet hendrerit aliquam fringilla turpis cursus blandit tortor diam.Amet hendrerit aliquam fringilla turpis cursus blandit tortor diam.",
    detailedDescription: [
      {
        heading: "",
        description:
          "Lorem ipsum dolor sit amet consectetur. Arcu vitae proin nec amet sem. Tortor eu facilisi metus nulla libero. Nisl nunc tellus sodales elit. Mauris elementum velit sit ac ipsum nec accumsan porttitor. Lorem integer tincidunt quisque ipsum euismod. Cursus a vitae est hendrerit orci lacus non quam. Blandit vestibulum ut aliquet ante enim malesuada. Fringilla aliquam rutrum nibh fringilla. Ornare est mauris pellentesque ultrices aliquet lectus in tristique eget. Quis commodo maecenas aenean quam. Sed feugiat turpis magna tellus tristique arcu urna nibh cursus. Mi dignissim scelerisque condimentum congue eget gravida consectetur sed. Nulla ut ut faucibus aliquet lobortis id viverra pharetra. Massa montes tristique dolor porttitor parturient cursus tellus nullam id. Rutrum sed ut vitae sit senectus non penatibus. Volutpat mauris nulla sed fames consequat consequat. Amet in aenean ullamcorper semper mauris aliquam. Sed fermentum rhoncus dis tristique sit neque. Sit leo morbi et quam quam etiam egestas sodales urna",
      },
      {
        heading: "Lorem ipsum dolor",
        description:
          "Lorem ipsum dolor sit amet consectetur. Arcu vitae proin nec amet sem. Tortor eu facilisi metus nulla libero. Nisl nunc tellus sodales elit. Mauris elementum velit sit ac ipsum nec accumsan porttitor. Lorem integer tincidunt quisque ipsum euismod. Cursus a vitae est hendrerit orci lacus non quam. Blandit vestibulum ut aliquet ante enim malesuada. Fringilla aliquam rutrum nibh fringilla",
      },
      {
        heading: "Lorem ipsum dolor",
        description:
          "Lorem ipsum dolor sit amet consectetur. Arcu vitae proin nec amet sem. Tortor eu facilisi metus nulla libero. Nisl nunc tellus sodales elit. Mauris elementum velit sit ac ipsum nec accumsan porttitor. Lorem integer tincidunt quisque ipsum euismod. Cursus a vitae est hendrerit orci lacus non quam. Blandit vestibulum ut aliquet ante enim malesuada. Fringilla aliquam rutrum nibh fringilla. Ornare est mauris pellentesque ultrices aliquet lectus in tristique eget. Quis commodo maecenas aenean quam. Sed feugiat turpis magna tellus tristique arcu urna nibh cursus. Mi dignissim scelerisque condimentum congue eget gravida consectetur sed. Nulla ut ut faucibus aliquet lobortis id viverra pharetra. Massa montes tristique dolor porttitor parturient cursus tellus nullam id. Rutrum sed ut vitae sit senectus non penatibus. Volutpat mauris nulla sed fames consequat consequat. Amet in aenean ullamcorper semper mauris aliquam. Sed fermentum rhoncus dis tristique sit neque. Sit leo morbi et quam quam etiam egestas sodales urna.",
      },
    ],
    wardenSign: "Warden Signature",
    date: "12-May-2024",
    newNotice: true,
  },
  {
    title: "Urgent Notice!",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tristique leo sollicitudin volutpat nunc ac. Justo mattis nullam imperdiet aliquam pulvinar. Facilisis potenti pellentesque feugiat in dui. Amet hendrerit aliquam fringilla turpis cursus blandit tortor diam.Amet hendrerit aliquam fringilla turpis cursus blandit tortor diam.",
    detailedDescription: [
      {
        heading: "",
        description:
          "Lorem ipsum dolor sit amet consectetur. Arcu vitae proin nec amet sem. Tortor eu facilisi metus nulla libero. Nisl nunc tellus sodales elit. Mauris elementum velit sit ac ipsum nec accumsan porttitor. Lorem integer tincidunt quisque ipsum euismod. Cursus a vitae est hendrerit orci lacus non quam. Blandit vestibulum ut aliquet ante enim malesuada. Fringilla aliquam rutrum nibh fringilla. Ornare est mauris pellentesque ultrices aliquet lectus in tristique eget. Quis commodo maecenas aenean quam. Sed feugiat turpis magna tellus tristique arcu urna nibh cursus. Mi dignissim scelerisque condimentum congue eget gravida consectetur sed. Nulla ut ut faucibus aliquet lobortis id viverra pharetra. Massa montes tristique dolor porttitor parturient cursus tellus nullam id. Rutrum sed ut vitae sit senectus non penatibus. Volutpat mauris nulla sed fames consequat consequat. Amet in aenean ullamcorper semper mauris aliquam. Sed fermentum rhoncus dis tristique sit neque. Sit leo morbi et quam quam etiam egestas sodales urna",
      },
      {
        heading: "Lorem ipsum dolor",
        description:
          "Lorem ipsum dolor sit amet consectetur. Arcu vitae proin nec amet sem. Tortor eu facilisi metus nulla libero. Nisl nunc tellus sodales elit. Mauris elementum velit sit ac ipsum nec accumsan porttitor. Lorem integer tincidunt quisque ipsum euismod. Cursus a vitae est hendrerit orci lacus non quam. Blandit vestibulum ut aliquet ante enim malesuada. Fringilla aliquam rutrum nibh fringilla",
      },
      {
        heading: "Lorem ipsum dolor",
        description:
          "Lorem ipsum dolor sit amet consectetur. Arcu vitae proin nec amet sem. Tortor eu facilisi metus nulla libero. Nisl nunc tellus sodales elit. Mauris elementum velit sit ac ipsum nec accumsan porttitor. Lorem integer tincidunt quisque ipsum euismod. Cursus a vitae est hendrerit orci lacus non quam. Blandit vestibulum ut aliquet ante enim malesuada. Fringilla aliquam rutrum nibh fringilla. Ornare est mauris pellentesque ultrices aliquet lectus in tristique eget. Quis commodo maecenas aenean quam. Sed feugiat turpis magna tellus tristique arcu urna nibh cursus. Mi dignissim scelerisque condimentum congue eget gravida consectetur sed. Nulla ut ut faucibus aliquet lobortis id viverra pharetra. Massa montes tristique dolor porttitor parturient cursus tellus nullam id. Rutrum sed ut vitae sit senectus non penatibus. Volutpat mauris nulla sed fames consequat consequat. Amet in aenean ullamcorper semper mauris aliquam. Sed fermentum rhoncus dis tristique sit neque. Sit leo morbi et quam quam etiam egestas sodales urna.",
      },
    ],
    wardenSign: "Warden Signature",
    date: "12-May-2024",
    newNotice: true,
  },
  {
    title: "Urgent Notice!",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tristique leo sollicitudin volutpat nunc ac. Justo mattis nullam imperdiet aliquam pulvinar. Facilisis potenti pellentesque feugiat in dui. Amet hendrerit aliquam fringilla turpis cursus blandit tortor diam.Amet hendrerit aliquam fringilla turpis cursus blandit tortor diam.",
    detailedDescription: [
      {
        heading: "",
        description:
          "Lorem ipsum dolor sit amet consectetur. Arcu vitae proin nec amet sem. Tortor eu facilisi metus nulla libero. Nisl nunc tellus sodales elit. Mauris elementum velit sit ac ipsum nec accumsan porttitor. Lorem integer tincidunt quisque ipsum euismod. Cursus a vitae est hendrerit orci lacus non quam. Blandit vestibulum ut aliquet ante enim malesuada. Fringilla aliquam rutrum nibh fringilla. Ornare est mauris pellentesque ultrices aliquet lectus in tristique eget. Quis commodo maecenas aenean quam. Sed feugiat turpis magna tellus tristique arcu urna nibh cursus. Mi dignissim scelerisque condimentum congue eget gravida consectetur sed. Nulla ut ut faucibus aliquet lobortis id viverra pharetra. Massa montes tristique dolor porttitor parturient cursus tellus nullam id. Rutrum sed ut vitae sit senectus non penatibus. Volutpat mauris nulla sed fames consequat consequat. Amet in aenean ullamcorper semper mauris aliquam. Sed fermentum rhoncus dis tristique sit neque. Sit leo morbi et quam quam etiam egestas sodales urna",
      },
      {
        heading: "Lorem ipsum dolor",
        description:
          "Lorem ipsum dolor sit amet consectetur. Arcu vitae proin nec amet sem. Tortor eu facilisi metus nulla libero. Nisl nunc tellus sodales elit. Mauris elementum velit sit ac ipsum nec accumsan porttitor. Lorem integer tincidunt quisque ipsum euismod. Cursus a vitae est hendrerit orci lacus non quam. Blandit vestibulum ut aliquet ante enim malesuada. Fringilla aliquam rutrum nibh fringilla",
      },
      {
        heading: "Lorem ipsum dolor",
        description:
          "Lorem ipsum dolor sit amet consectetur. Arcu vitae proin nec amet sem. Tortor eu facilisi metus nulla libero. Nisl nunc tellus sodales elit. Mauris elementum velit sit ac ipsum nec accumsan porttitor. Lorem integer tincidunt quisque ipsum euismod. Cursus a vitae est hendrerit orci lacus non quam. Blandit vestibulum ut aliquet ante enim malesuada. Fringilla aliquam rutrum nibh fringilla. Ornare est mauris pellentesque ultrices aliquet lectus in tristique eget. Quis commodo maecenas aenean quam. Sed feugiat turpis magna tellus tristique arcu urna nibh cursus. Mi dignissim scelerisque condimentum congue eget gravida consectetur sed. Nulla ut ut faucibus aliquet lobortis id viverra pharetra. Massa montes tristique dolor porttitor parturient cursus tellus nullam id. Rutrum sed ut vitae sit senectus non penatibus. Volutpat mauris nulla sed fames consequat consequat. Amet in aenean ullamcorper semper mauris aliquam. Sed fermentum rhoncus dis tristique sit neque. Sit leo morbi et quam quam etiam egestas sodales urna.",
      },
    ],
    wardenSign: "Warden Signature",
    date: "12-May-2024",
    newNotice: false,
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
