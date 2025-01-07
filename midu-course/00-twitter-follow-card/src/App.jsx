import "./App.css";

export default function App() {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src="https://unavatar.io/vandriodd"
          alt="Avatar"
        />
        <div className="tw-followCard-info">
          <strong>Luz Saavedra</strong>
          <span className="tw-followCard-infoUserName">@vandriodd</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
