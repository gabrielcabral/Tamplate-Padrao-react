import React , { useState , useEffect, useMemo , useCallback} from 'react';



function App() {
  const [tech , setTech] = useState([
  ]);
  const [newTech , setNewTech] = useState('');

  const addTech = useCallback(() =>{
    setTech([...tech, newTech ]);
    setNewTech('');
    setNewTech('');
    setNewTech('');
  },[ newTech , tech ]);

 useEffect(() => {
   const storageTech = localStorage.getItem('tech');
   if(storageTech){
     setTech(JSON.parse(storageTech));
   }
 }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);


 const teckSize =  useMemo(() => tech.length, [tech]);

  return (
    <>
    <ul>
      { tech.map( t=>(
        <li key={t}>{t}</li>
      ))}

    </ul>
    <strong> você tem {teckSize} Tecnologias</strong><br></br>

    <input type="text" onChange={e => setNewTech(e.target.value)}/>
    <button type="button" onClick={addTech}>Adiccionar</button>
    </>
  );
}

export default App;
