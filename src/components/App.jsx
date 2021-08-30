import Profile from "components/social-profile/User";
import FriendList from "components/friend-list/FriendList";
import Statistics from "components/statistics/Statistic"


import user from "../components/social-profile/user.json";
import friends from "../components/friend-list/friends.json";
import statistical from "../components/statistics/statistical-data.json";
import transaction from "../components/transaction-history";

export default function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistical} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Container>
  );
}