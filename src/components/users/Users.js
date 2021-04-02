import React, { useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

function Users() {
  const { users, loading } = useContext(GithubContext);

  if (loading) return <Spinner />;

  return (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
};

export default Users;
