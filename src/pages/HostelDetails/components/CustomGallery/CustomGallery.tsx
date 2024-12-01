import { useState } from "react";
import styles from "./CustomGallery.module.scss";
import { locationIcon } from "../../../../assets";
import { CustomGalleryProps } from "./CustomGalleryProps";

const CustomGallery = ({
  title,
  subTitle,
  images,
  wardenProfile,
  location,
}: CustomGalleryProps) => {
  const [galleryImages, setGalleryImages] = useState<string[]>(images);

  function moveToZeroIndex(index: number) {
    if (index < 0 || index >= galleryImages.length) {
      throw new Error("Index out of bounds");
    }

    const updatedImages = [...galleryImages];
    const element = updatedImages.splice(index, 1)[0];
    updatedImages.unshift(element);

    setGalleryImages(updatedImages);
  }

  return (
    <div className={styles.CustomGalleryContainer}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            {galleryImages.length > 0 ? (
              <img src={galleryImages[0]} alt="Main" />
            ) : (
              <div className={styles.noImagePlaceholder}>
                No hostel photos available yet
              </div>
            )}
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.topContent}>
            <div className={styles.profileCard}>
              <div className={styles.profile}>
                <div className={styles.profilePicWrapper}>
                  {wardenProfile?.profileImageUrl ? (
                    <img
                      src={wardenProfile.profileImageUrl}
                      alt="Warden Profile"
                    />
                  ) : (
                    <div className={styles.avatarPlaceholder}>
                      {wardenProfile?.name?.charAt(0) ?? "W"}
                    </div>
                  )}
                </div>
                <div className={styles.profileContent}>
                  <h2>{wardenProfile.name ?? "Warden Name"}</h2>
                  <p>Hostel Warden</p>
                </div>
              </div>
            </div>
            {/* Location Card */}
            <div className={styles.LocationCard}>
              <h2>Location</h2>
              <p>
                <span>
                  <img src={locationIcon} alt="Location Icon" />
                </span>
                {location}
              </p>
            </div>
          </div>
          <div className={styles.imagesList}>
            {Array.isArray(galleryImages) &&
              galleryImages.slice(1).map((image: string, index: number) => (
                <div
                  className={styles.imgWrapper}
                  onClick={() => {
                    moveToZeroIndex(index + 1);
                  }}
                  key={index}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subTitle}>{subTitle}</p>
      </div>
    </div>
  );
};

export default CustomGallery;
