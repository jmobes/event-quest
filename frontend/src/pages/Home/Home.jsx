import "./Home.css";
import SearchIcon from "@material-ui/icons/Search";
import NearMeIcon from "@material-ui/icons/NearMe";
import TextInput from "../../components/TextInput/TextInput";

const Home = () => {
  return (
    <section className="home">
      <h2 className="home__title">
        <span className="home__title--1">Start Your Adventure</span>
        <span className="home__title--2">Let us help with ideas</span>
      </h2>
      <TextInput />
    </section>
  );
};

export default Home;
