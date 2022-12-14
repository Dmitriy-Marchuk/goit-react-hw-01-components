import PropTypes from 'prop-types';
import css from './Profile.module.css'

export default function Profile({ avatar, username, tag, location, followers, views, likes }) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.avatar} src={avatar} alt="" />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
        <ul className={css.stats}>
          <li className={css.statsElement}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{followers}</span>
          </li>
          <li className={css.statsElement}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{views}</span>
          </li>
          <li className={css.statsElement}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{likes}</span>
          </li>
        </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
}

