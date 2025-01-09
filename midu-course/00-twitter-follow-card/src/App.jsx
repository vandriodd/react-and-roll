import TwitterFollowCard from "./TwitterFollowCard";
import "./App.css";

export default function App() {
  const users = [
    {
      username: "vandriodd",
      name: "Luz Saavedra",
      isFollowing: false,
    },
    {
      username: "nachop51",
      name: "Ignacio Peralta",
      isFollowing: true,
    },
    {
      username: "micaelapicco",
      name: "Micaela Picco",
      isFollowing: true,
    },
  ];

  return (
    <section className="App">
      {users.map(({ username, name, isFollowing }) => (
        <TwitterFollowCard
          key={username}
          userName={username}
          name={name}
          initialIsFollowing={isFollowing}
        />
      ))}
    </section>
  );
}
