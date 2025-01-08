import TwitterFollowCard from "./TwitterFollowCard";
import "./App.css";

export default function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        userName="vandriodd"
        name="Luz Saavedra"
        isFollowing={false}
      />
      <TwitterFollowCard
        userName="nachop51"
        name="Ignacio Peralta"
        isFollowing
      />
      <TwitterFollowCard
        userName="micaelapicco"
        name="Micaela Picco"
        isFollowing
      />
    </section>
  );
}
