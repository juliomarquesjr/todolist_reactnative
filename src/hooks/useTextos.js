import React, {useEffect, useState} from 'react';
import textosApp from '../mocks/textosApp';

const useTextos = () => {
  const [textos, setTextos] = useState(textosApp);

  useEffect(() => {
    const retorno = textosApp;
    setTextos(retorno);
  }, []);

  return textos;
};
export default useTextos;
