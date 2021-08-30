import PropTypes from "prop-types";
import { List, ListItem, Image, Name, Status } from "components/friend-list/friendList.module.css";


const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <ListItem key={id}>
          <Status isOnline={isOnline}></Status>
          <Image src={avatar} alt={name} width="48" />
          <Name>{name}</Name>
        </ListItem>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;

