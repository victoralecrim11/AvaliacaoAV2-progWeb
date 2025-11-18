import React, { useState, useCallback } from 'react';
import { View, ActivityIndicator, Alert, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Card, Button } from 'react-native-paper';
import api from '../services/api';
import { estilos } from '../components/estilos';
import { tema } from '../components/tema';


// Tela de Detalhes do Aluno
const TelaDetalhesAluno = ({ route, navigation }) => {
  const { alunoId } = route.params || {};
  const [aluno, setAluno] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useFocusEffect(
    useCallback(() => {
        const buscarDetalhes = async () => {
        try {
            setCarregando(true);
            setErro(null);
            const response = await api.get(`/alunos/${alunoId}`);
            setAluno(response.data || null);
        } catch (err) {
            setErro('Não foi possível carregar os detalhes do aluno.');
            console.error(err);
        } finally {
            setCarregando(false);
        }
        };

        if (alunoId) {
            buscarDetalhes();
        }
    }, [alunoId])
  );
  
  const confirmarExclusao = () => {
    if (!aluno) return;
    Alert.alert(
      'Confirmar Exclusão',
      `Você tem certeza que deseja excluir o aluno ${aluno.nome}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', onPress: excluirAluno, style: 'destructive' }
      ]
    );
  };

  const excluirAluno = async () => {
    try {
      await api.delete(`/alunos/${alunoId}`);
      navigation.goBack();
    } catch (err) {
      Alert.alert('Erro', 'Não foi possível excluir o aluno.');
      console.error(err);
    }
  };


  if (carregando) {
    return (
      <View style={estilos.centralizado}>
        <ActivityIndicator animating={true} size="large" />
        <Text style={estilos.textoInfo}>Carregando detalhes...</Text>
      </View>
    );
  }

  if (erro || !aluno) {
    return (
      <View style={estilos.centralizado}>
        <Text style={estilos.textoErro}>{erro}</Text>
      </View>
    );
  }

  return (
    <View style={estilos.container}>
      <Card style={estilos.card}>
        <Card.Title title={aluno.nome} />
        <Card.Content>
          <View style={estilos.linhaDetalhe}>
             <Text style={estilos.labelDetalhe}>ID:</Text>
             <Text>{aluno.id}</Text>
          </View>
           <View style={estilos.linhaDetalhe}>
             <Text style={estilos.labelDetalhe}>CPF:</Text>
             <Text>{aluno.cpf}</Text>
          </View>
           <View style={estilos.linhaDetalhe}>
             <Text style={estilos.labelDetalhe}>Curso:</Text>
             <Text>{aluno.curso}</Text>
          </View>
        </Card.Content>
        <Card.Actions>
            <Button onPress={() => navigation.navigate('FormularioAluno', { alunoId: aluno.id })}>Editar</Button>
            <Button onPress={confirmarExclusao} textColor={tema.colors.error}>Excluir</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default TelaDetalhesAluno;
