export interface Profile {
  name: string;
  profileImageUrl: string;
}

export interface CustomGalleryProps {
  title: string;
  subTitle: string;
  images: string[];
  wardenProfile: Profile;
  location: string;
}
