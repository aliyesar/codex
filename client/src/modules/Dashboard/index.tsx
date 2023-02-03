import Community from '@components/sections/Community';
import Leaderboard from '@components/sections/Leaderboard';
import Suggestion from '@components/sections/Suggestion';
import List from './components/List';

const Dashboard = () => {
  return (
    <>
      <div className="text-2xl text-primary-400 mb-6">Dashboard</div>
      <div className="flex gap-6 flex-1">
        <List />
        <div className="flex flex-col gap-4 flex-shrink-0 w-sidebar xl:w-[270px] md:hidden">
          <Leaderboard />
          <Community />
          <Suggestion />
        </div>
      </div>
    </>
  );
};

export default Dashboard;