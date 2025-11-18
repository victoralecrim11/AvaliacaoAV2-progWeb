import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import api from '../services/api';
import { estilos } from '../components/estilos';

// Tela de Formulário para Inserir/Editar Aluno
const TelaFormularioAluno = ({ route, navigation }) => {
    const { alunoId } = (route && route.params) || {};
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [carregando, setCarregando] = useState(false);
    
    const ehEdicao = alunoId !== undefined;

    useEffect(() => {
        if (ehEdicao) {
            navigation.setOptions({ title: 'Editar Aluno' });
            const buscarAluno = async () => {
                try {
                    setCarregando(true);
                    const response = await api.get(`/alunos/${alunoId}`);
                    const { nome, curso } = response.data;
                    setNome(nome);
                    setCurso(curso);
                } catch (error) {
                    Alert.alert("Erro", "Não foi possível carregar os dados do aluno.");
                } finally {
                    setCarregando(false);
                }
            };
            buscarAluno();
        } else {
             navigation.setOptions({ title: 'Novo Aluno' });
        }
    }, [alunoId, navigation, ehEdicao]);
    
    const salvar = async () => {
        if(!nome || !curso) {
            Alert.alert("Atenção", "Todos os campos são obrigatórios.");
            return;
        }

        const alunoData = { nome, curso };

        try {
            if (ehEdicao) {
                await api.put(`/alunos/${alunoId}`, alunoData);
                Alert.alert("Sucesso", "Aluno atualizado com sucesso!");
            } else {
                await api.post('/alunos', alunoData);
                 Alert.alert("Sucesso", "Aluno criado com sucesso!");
            }
            navigation.goBack();
        } catch (error) {
             Alert.alert("Erro", "Ocorreu um erro ao salvar o aluno.");
            console.error(error);
        }
    };
    
    if (carregando) {
        return (
            <View style={estilos.centralizado}>
                <ActivityIndicator animating={true} size="large" />
            </View>
        );
    }

    return (
        <View style={estilos.containerForm}>
            <TextInput
                label="Nome"
                value={nome}
                onChangeText={setNome}
                style={estilos.input}
                mode="outlined"
            />
            <TextInput
                label="Curso"
                value={curso}
                onChangeText={setCurso}
                style={estilos.input}
                mode="outlined"
            />
            <Button mode="contained" onPress={salvar} style={estilos.botaoSalvar}>
                Salvar
            </Button>
        </View>
    );
};

export default TelaFormularioAluno;
