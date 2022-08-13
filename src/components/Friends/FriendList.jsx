import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import Friend from './Friend';

export default function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
          {friends.map(friend => (
              <li className={css.item} key={friend.id}>
                <Friend
                  avatar={friend.avatar}
                  name={friend.name}
                  isOnline={friend.isOnline}
                />
            </li>
              ))}
        </ul>
    )
}

FriendList.propTypes = {
  friends: PropTypes.array,
}