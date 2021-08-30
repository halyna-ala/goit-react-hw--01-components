import Profile from 'components/social-profile/Profile';
import FriendList from 'components/friend-list/FriendList';
import Statistics from 'components/statistics/Statistic';
import TransactionHistory from 'components/transaction-history/Transaction';

import user from './Data/user.json';
import friends from './Data/friends.json';
import statistical from './Data/statistical-data.json';
import transactions from './Data/transactions.json';

export default function App() {
  return (
    <div>
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
    </div>
  );
}
