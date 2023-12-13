import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Camilo",
    email: "camilo@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
        ...formState,
        [name]: value
    })
  };

  useEffect(() => {
    // console.log('useEffect called');
  },[])

  useEffect(() => {
    // console.log('formState cambio');
  },[formState])

  useEffect(() => {
    // console.log('email cambio');
  },[email])

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="form-control"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="example@test.com"
        className="form-control mt-2"
        value={email}
        onChange={onInputChange}
      />
      {
        (username === 'Camilo2') && <Message />
      }
      
    </>
  );
};
