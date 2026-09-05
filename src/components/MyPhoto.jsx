import styles from "./MyPhoto.module.css";

function MyPhoto() {
  return (
    <img
      src="/profile_picture.jpg"
      alt="Not able to load the photo"
      className={styles.profilephoto}
    />
  );
}

export default MyPhoto;
