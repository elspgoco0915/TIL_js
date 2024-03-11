// ProfileコンポーネントをProfileという名前付きエクスポートしている
export const Profile = () => {
  return (
    <img
    src="https://i.imgur.com/QIrZWGIs.jpg"
    alt="Katherine Johnson"
    />
  );
}

// Galleryコンポーネントをデフォルトエクスポートしている
const Gallery = () => {
  return (
    <section>
      <h1>amazing</h1>
      <Profile />
    </section>
  );
}
export default Gallery;