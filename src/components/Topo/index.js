import React, {useState} from 'react';
import {
  Alert,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import useTextos from '../../hooks/useTextos';
import Icon from 'react-native-vector-icons/FontAwesome';
import estilo from './estilos';

import fundoTopo from '../../assets/img/fundotopo.jpg';

const Topo = ({listaTarefas, setListaTarefas}) => {
  const [tarefa, setTarefa] = useState();
  const textos = useTextos();

  function adicionarTarefa() {
    const novaListaTarefas = [...listaTarefas];
    novaListaTarefas.push(tarefa);
    setListaTarefas(novaListaTarefas);
    Alert.alert(textos.alertTitulo, textos.alertTexto);

    setTarefa('');
  }

  return (
    <React.Fragment>
      <ImageBackground style={estilo.imgFundo} source={fundoTopo}>
        <Icon style={estilo.icone} name="list" size={40} color="white" />
        <Text style={estilo.textoTitulo}>{textos.tituloApp}</Text>
      </ImageBackground>
      <View style={estilo.caixaInput}>
        <TextInput
          style={estilo.caixaTexto}
          placeholder={textos.placeholderCadastro}
          value={tarefa}
          onChangeText={setTarefa}
        />
        <TouchableOpacity
          style={estilo.botaoAdicionar}
          onPress={adicionarTarefa}>
          <Icon
            style={estilo.icone}
            name="plus-circle"
            size={46}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};
export default Topo;
