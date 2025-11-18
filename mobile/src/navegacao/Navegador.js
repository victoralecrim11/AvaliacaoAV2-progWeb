import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaListaAlunos from '../telas/TelaListaAlunos';
import TelaDetalhesAluno from '../telas/TelaDetalhesAluno';
import TelaFormularioAluno from '../telas/TelaFormularioAluno';
import BarraSuperiorCustomizada from '../components/BarraSuperiorCustomizada';

const Stack = createNativeStackNavigator();

export default function NavegadorPrincipal () {
  return (
    <Stack.Navigator
      initialRouteName="ListaAlunos"
      screenOptions={{
        header: (props) => <BarraSuperiorCustomizada {...props} />,
      }}
    >
      <Stack.Screen
        name="ListaAlunos"
        component={TelaListaAlunos}
        options={{ title: 'Lista de Alunos' }}
      />
      <Stack.Screen
        name="DetalhesAluno"
        component={TelaDetalhesAluno}
        options={{ title: 'Detalhes do Aluno' }}
      />
       <Stack.Screen
        name="FormularioAluno"
        component={TelaFormularioAluno}
        // O título é definido dinamicamente na própria tela
      />
    </Stack.Navigator>
  );
};


