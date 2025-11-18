import React, { useState, useCallback } from 'react';
import { View, FlatList, ActivityIndicator, Alert, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Card, Button, FAB } from 'react-native-paper';
import api from '../services/api';
import { estilos } from '../components/estilos';
import { tema } from '../components/tema';

// Tela de Lista de Alunos (React Native)
const TelaListaAlunos = ({ navigation }) => {
  const [alunos, setAlunos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  const buscarAlunos = async () => {
    try {
      setCarregando(true);
      setErro(null);
      const response = await api.get('/alunos');
      setAlunos(response.data || []);
    } catch (err) {
      setErro('Falha ao carregar os alunos. Tente novamente mais tarde.');
      console.error(err);
    } finally {
      setCarregando(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      buscarAlunos();
    }, [])
  );

  const confirmarExclusao = (aluno) => {
    Alert.alert(
      'Confirmar Exclusão',
      `Você tem certeza que deseja excluir o aluno ${aluno.nome}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', onPress: () => excluirAluno(aluno.id), style: 'destructive' }
      ]
    );
  };

  const excluirAluno = async (id) => {
    try {
      await api.delete(`/alunos/${id}`);
      // Atualiza a lista removendo o aluno excluído
      setAlunos(atual => atual.filter(a => a.id !== id));
    } catch (err) {
      Alert.alert('Erro', 'Não foi possível excluir o aluno.');
      console.error(err);
    }
  };

  if (carregando) {
    return (
      <View style={estilos.centralizado}>
        <ActivityIndicator animating={true} size="large" />
        <Text style={estilos.textoInfo}>Carregando...</Text>
      </View>
    );
  }

  if (erro) {
    return (
      <View style={estilos.centralizado}>
        <Text style={estilos.textoErro}>{erro}</Text>
      </View>
    );
  }

  const renderHeader = () => (
    <View style={estilos.tabelaHeader}>
      <Text style={[estilos.celula, estilos.cabecalho]}>ID</Text>
      <Text style={[estilos.celulaGrande, estilos.cabecalho]}>Nome</Text>
      <Text style={[estilos.celula, estilos.cabecalho]}>Curso</Text>
      <Text style={[estilos.celulaAcao, estilos.cabecalho]}>Ações</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={estilos.tabelaLinha}>
      <Text style={estilos.celula}>{item.id}</Text>
      <Text style={[estilos.celulaGrande]} numberOfLines={1}>{item.nome}</Text>
      <Text style={estilos.celula}>{item.curso}</Text>
      <View style={estilos.celulaAcao}>
        <TouchableOpacity onPress={() => navigation.navigate('DetalhesAluno', { alunoId: item.id })}>
          <Text style={estilos.acaoTexto}>Ver</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FormularioAluno', { alunoId: item.id })}>
          <Text style={estilos.acaoTexto}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => confirmarExclusao(item)}>
          <Text style={[estilos.acaoTexto, { color: tema.colors.error }]}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
  <View style={estilos.container}>
      {/* 1. Header do FlatList não precisa de ScrollView horizontal, usaremos um ListHeaderComponent */}
      <FlatList
        data={alunos}
        // Usamos ListHeaderComponent para renderizar o cabeçalho
        ListHeaderComponent={() => (
          <ScrollView horizontal={true} contentContainerStyle={{ flexDirection: 'column' }}>
            {renderHeader()}
          </ScrollView>
        )}
        renderItem={({ item }) => (
          <ScrollView horizontal={true} bounces={false}> 
            {/* 2. Cada item é envolto por um ScrollView horizontal */}
            {renderItem({ item })}
          </ScrollView>
        )}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
      
      <FAB
        icon="plus"
        style={estilos.fab}
        onPress={() => navigation.navigate('FormularioAluno', {})}
      />
    </View>
  );
};

export default TelaListaAlunos;