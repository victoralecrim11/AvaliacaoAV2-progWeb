import { Appbar } from 'react-native-paper';

// Barra de Aplicativo Customizada
const BarraSuperiorCustomizada = ({ navigation, route, options, back }) => {
  const title = options && options.title ? options.title : (route && route.name) || '';
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default BarraSuperiorCustomizada;
