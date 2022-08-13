import PropTypes from 'prop-types';
import css from './Friend.module.css';

export default function Friend({ avatar, isOnline, name }) {
    return (
        <>  
            {isOnline ? <span className={css.active} ></span> : <span className={css.noActive} ></span> }
            <img className={css.avatar} alt="User avatar" width="48" src={avatar} />
            <p className={css.name}>{name}</p>
        </>
    )
}

Friend.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
}
