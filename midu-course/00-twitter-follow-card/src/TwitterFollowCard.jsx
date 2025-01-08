import PropTypes from "prop-types";

export default function TwitterFollowCard({ userName, name }) {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="Avatar"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}

TwitterFollowCard.propTypes = {
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
