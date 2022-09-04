import ImageSlider from "./ImageSlider";

function App() {
  const slides = [
    { url: "http://localhost:3000/Anime1.jpg", title: "op" },
    { url: "http://localhost:3000/Anime2.jpg", title: "beach" },
    { url: "http://localhost:3000/Anime3.jpg", title: "ocean"},
    { url: "http://localhost:3000/Anime4.jpg", title: "jjk" },
    { url: "http://localhost:3000/Anime5.jpg", title: "itadori" },
    { url: "http://localhost:3000/Anime6.jpg", title: "sukuna" },
    { url: "http://localhost:3000/Anime7.jpg", title: "gojo" },
    { url: "http://localhost:3000/Anime8.jpg", title: "luffy" },
    { url: "http://localhost:3000/Anime9.jpg", title: "zoro" },
    { url: "http://localhost:3000/Anime10.jpg", title: "nami" },
  ];

const containerStyles = {
  width: "700px",
  height: "350px",
  margin: "0 auto",
};

  return (
    <div className="App">
      <h1>hello</h1>

      <div style={containerStyles} >
        <ImageSlider slides={slides} />
      </div>

    </div>
  );
}

export default App;
