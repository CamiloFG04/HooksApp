import { Loading, Character } from "../03-examples/components";
import { useCounter,useFetch } from "../hooks";

export const Layout = () => {
  const {counter,increment} = useCounter(1)

  const { data, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );
  
  const {name,status} = !!data && data
  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <hr />

      {
        isLoading ? <Loading/> : <Character name={name} status={status} />
      }
        
      <button onClick={()=> increment()} disabled={isLoading} className="btn btn-success">Next Character</button>
    </>
  );
};
