import TwitterFollowCard from "./TwitterFollowCard";
import "./App.css";

export default function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        userName="vandriodd"
        name="Luz Saavedra"
        initialIsFollowing={false}
      />
      <TwitterFollowCard
        userName="nachop51"
        name="Ignacio Peralta"
        initialIsFollowing
      />
      <TwitterFollowCard
        userName="micaelapicco"
        name="Micaela Picco"
        initialIsFollowing
      />
    </section>
  );
}
