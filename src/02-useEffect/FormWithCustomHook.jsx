// import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  
  const {formState,onInputChange,username,email,password,onResetForm} = useForm({
    username:'',
    email:'',
    password: ''
  })

  // const {username,email,password} = formState;


  return (
    <>
      <h1>Formulario con custom Hook</h1>
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
      <input
        type="password"
        name="password"
        placeholder="contraseña"
        className="form-control mt-2"
        value={password}
        onChange={onInputChange}
      />
      
      <button onClick={onResetForm} className="btn btn-primary mt-2">Reset</button>
      
    </>
  );
};
