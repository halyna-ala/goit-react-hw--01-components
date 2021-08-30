import PropTypes from "prop-types";
import { Container, Title, List, ListItem, Span } from "components/statistics/Statistic"


const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => (
          <ListItem key={id} label={label}>
            <Span Type={label}>{label}</Span>
            <Span>{percentage}%</Span>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

Statistics.propTypes = {
  tittle: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;