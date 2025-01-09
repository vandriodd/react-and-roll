import { useState } from "react";
import PropTypes from "prop-types";

export default function TwitterFollowCard({
  userName,
  name,
  initialIsFollowing,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const textButton = isFollowing ? "Siguiendo" : "Seguir";
  const btnClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

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
        <button className={btnClassName} onClick={() => handleFollow()}>
          <span className="tw-followCard-text">{textButton}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}

TwitterFollowCard.propTypes = {
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  initialIsFollowing: PropTypes.bool.isRequired,
};
