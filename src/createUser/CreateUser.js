import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { createUser } from '../api/api';

function CreateUser() {
  const queryClient = useQueryClient();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [car, setCar] = useState('');

  const createUserMutation = useMutation(createUser, {
    onSuccess: () => {
        queryClient.invalidateQueries("users")
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    createUserMutation.mutate({
      name: name,
      age: age,
      car: car,
    });
  };

  return (
    <form className="createUser" onSubmit={onSubmit}>
      <div className="createUser_header">Crete new user</div>
      <div>
        <div className="createUser_input">
          <div className="createUser_input__item">Name:</div>
          <input className="createUser__name" name="name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="createUser_input">
          <div className="createUser_input__item">Age:</div>
          <input className="createUser__age" name="age" onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="createUser_input">
          <div className="createUser_input__item">Car:</div>
          <input className="createUser__car" name="car" onChange={(e) => setCar(e.target.value)} />
        </div>
        <button className="createUser_btn">Create</button>
      </div>
    </form>
  );
}

export default CreateUser;
