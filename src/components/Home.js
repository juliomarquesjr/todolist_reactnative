import React, { useState } from 'react';
import {Text} from 'react-native';

import Topo from './Topo';
import Lista from './Lista'

const Home = () => {
const [listaTarefas, setListaTarefas] = useState([])

  return (
    <React.Fragment>
      <Topo listaTarefas={listaTarefas} setListaTarefas={setListaTarefas} />
      <Lista listaTarefas={listaTarefas} setListaTarefas={setListaTarefas}/>
    </React.Fragment>
  );
};
export default Home;
