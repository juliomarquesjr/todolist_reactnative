import {StyleSheet} from 'react-native';

const estilos = StyleSheet.create({
  tituloTarefa: {
    color: '#1E1E1E',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
  },
  textoItem: {
    fontSize: 18,
  }
});
export default estilos;
