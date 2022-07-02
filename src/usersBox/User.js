import React from 'react';

function User({ user, deleteUserMutation }) {
  return (
    <div className="user">
      <div className="user_item">
        <div className="user_item__category">Name:</div> {user.name}
      </div>
      <div className="user_item">
        <div className="user_item__category">Age:</div>
        {user.age}
      </div>
      <div className="user_item">
        <div className="user_item__category">Car:</div>
        {user.car}
      </div>
      <button className='user_deleteBtn' onClick={() => deleteUserMutation.mutate(user.id)}>Delete</button>
    </div>
  );
}

export default User;
