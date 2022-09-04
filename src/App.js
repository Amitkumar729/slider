import ImageSlider from "./ImageSlider";

function App() {
  const slides = [
    { url: "http://localhost:3000/Anime1.jpg.jpg", title: "op" },
    { url: "http://localhost:3000/Anime2.jpg.jpg", title: "beach" },
    { url: "http://localhost:3000/Anime3.jpg.jpg", title: "ocean" },
    { url: "http://localhost:3000/Anime4.jpg.jpg", title: "jjk" },
    { url: "http://localhost:3000/Anime7.jpg.jpg", title: "gojo" },
    { url: "http://localhost:3000/Anime8.jpg.jpg", title: "luffy" },
    // { url: "http://localhost:3000/Anime9.jpg.jpg", title: "zoro" },
    { url: "http://localhost:3000/Anime10.jpg.jpg", title: "nami" },
    { url: "http://localhost:3000/Anime11.jpg.jpg", title: "sanzi" },
    { url: "http://localhost:3000/Anime12.jpg.jpg", title: "choper" },
  ];

  const containerStyles = {
    width: "700px",
    height: "350px",
    margin: "0 auto",
  };

  return (
    <div className="App">
      <h1>Anime</h1>

      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default App;
