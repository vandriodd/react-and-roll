import ProfileCard from "./ProfileCard";

// App component defines the props that it passes to ProfileCard
function App() {
  return (
    <div>
      <h1>Personal Digital Assistants</h1>
      <ProfileCard title="Alexa" handle="@alexa99" />
      <ProfileCard title="Cortana" handle="@cortana32" />
      <ProfileCard title="Siri" handle="@siri01" />
    </div>
  )
}

export default App;