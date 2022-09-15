import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
  imgFundo: {
    flexDirection: 'row',
    paddingTop: 30,
    paddingLeft: 12,
    height: 110,
  },
  icone: {
    marginTop: 5,
  },
  textoTitulo: {
    color: '#D9D9D9',
    fontSize: 30,
    lineHeight: 42,
    marginLeft: 8,
  },
  caixaInput: {
    flexDirection: 'row',
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 8,
  },
  caixaTexto: {
    borderColor: 'black',
    borderWidth: 1,
    width: '85%',
    paddingLeft: 12,
  },
  botaoAdicionar: {
    marginLeft: 12,
    justifyContent: 'center',
  },
});
export default estilo;
