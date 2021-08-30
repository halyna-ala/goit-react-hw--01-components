import PropTypes from "prop-types";
import {
  Container,
  Description,
  Image,
  Name,
  List,
  Span,
} from "./Profile.styled";


const Profile = (props) => {
  const { name, tag, location, avatar,
      stats: { followers, views, likes },
    } = props;
    
  return (
    <Container>
      <Description>
        <Image src={avatar} alt="Аватар пользователя" />
        <Name>{name}</Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>

      <List>
        <li>
          <Span>Followers</Span>
          <Span>{followers}</Span>
        </li>
        <li>
          <Span>Views</Span>
          <Span>{views}</Span>
        </li>
        <li>
          <Span>Likes</Span>
          <Span>{likes}</Span>
        </li>
      </List>
    </Container>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;