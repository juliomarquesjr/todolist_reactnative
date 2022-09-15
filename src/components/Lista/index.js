import React from 'react';
import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';
import useTextos from '../../hooks/useTextos';

import estilos from './estilos';
import Icon from 'react-native-vector-icons/Feather';

const Lista = ({listaTarefas, setListaTarefas}) => {
  const textos = useTextos();

  const Item = ({tarefa, index}) => {
    return (
      <View style={estilos.item}>
        <Text style={estilos.textoItem}>{tarefa}</Text>
        <TouchableOpacity onPress={() => removerTarefa(index)}>
          <Icon name="trash-2" size={28} color="black" />
        </TouchableOpacity>
      </View>
    );
  };

  const removerTarefa = index => {
    const novaLista = [...listaTarefas];
    console.log(novaLista);
    novaLista.splice(index, 1);

    console.log(novaLista);
    setListaTarefas(novaLista);

    Alert.alert("Sucesso!", "Tarefa removida com sucesso.")
  };

  return (
    <>
      <Text style={estilos.tituloTarefa}>{textos.tituloTarefa}</Text>
      <FlatList
        data={listaTarefas}
        renderItem={({item, index}) => <Item tarefa={item} index={index} />}
      />
    </>
  );
};
export default Lista;
