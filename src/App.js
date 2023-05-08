import './App.css';
import { useState, createContext } from 'react';

import { Header, Edit, Contents } from './components/imports'

export const Context = createContext()


function App() {
  const [isEdit, setIsEdit] = useState(false)

  const [info, setInfo]= useState({name:'Melkior-Nguyen', age: '26', about:"i'm a front-end developer",url: 'https://i.redd.it/snoovatar/snoo_assets/runways/QjOuJeJtIa0_Asset_328.png', theme:'red'})
  
  const value = {info, setInfo}

  return (
    <Context.Provider value={value}>
      <div className="App">
        {!isEdit ? <Header setIsEdit={setIsEdit} /> : <Edit setIsEdit={setIsEdit} />}
        <Contents/>
      </div>
    </Context.Provider>
  );
}

export default App;
