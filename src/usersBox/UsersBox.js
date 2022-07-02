import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteUser, getAllUsers } from '../api/api';
import User from './User';

function UsersBox() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery('users', getAllUsers);

  const deleteUserMutation = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users")
    }
  })
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="usersBox">
      {data.map((user) => (
        <User user={user} deleteUserMutation={deleteUserMutation} key={user.id}/>
      ))}
    </div>
  );
}

export default UsersBox;
