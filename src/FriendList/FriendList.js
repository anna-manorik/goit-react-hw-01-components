import './friendList.css';
import PropTypes from "prop-types";
import FriendListItem from './FriendListItem';

const FriendList = ({friends}) => (
    <ul class="friend-list">
        {friends.map(friend => {
            return <FriendListItem 
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
        })}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.array,
}

export default FriendList;