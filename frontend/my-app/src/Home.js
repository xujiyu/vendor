import ReactGoogleSlides from "react-google-slides";

function Home(props) {
    return (
        <ReactGoogleSlides
          width={640}
          height={480}
          slidesLink="https://docs.google.com/presentation/d/11qUS4fKUddxg0wYe0uAn3Xr5I4b5TRenO2yzgNh2a30/present?slide=id.p"
          slideDuration={3}
          showControls
          loop
        />
    );
}

export default Home;