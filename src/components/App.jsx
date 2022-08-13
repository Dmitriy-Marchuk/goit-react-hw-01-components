import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./Friends/FriendList";
import TransactionsTable from "./Transactions/TransactionsTable";
import user from "./Profile/user.json";
import data from "./Statistics/data.json";
import friends from "./Friends/friends.json";
import transactions from "./Transactions/transactions.json"

export const App = () => {

  return (
    <div className="content-wrapper"
    style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101',
        padding: '30px',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics data={data}
        title="Upload stats"
      />
      
      <FriendList
        friends={friends}
      />

      <TransactionsTable
      transactions={transactions}
      />
    </div>
  );
};
