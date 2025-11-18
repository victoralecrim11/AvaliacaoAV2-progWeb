import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  containerForm: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  centralizado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textoInfo: {
    marginTop: 10,
  },
  textoErro: {
      color: 'red',
      textAlign: 'center',
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
 // *** AJUSTE NO MINWIDTH (AUMENTADO PARA 5 COLUNAS) E NOVAS LARGURAS FIXAS ***
  tabelaHeader: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#e0e0e0',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    minWidth: 580, // Largura suficiente para 5 colunas no celular (40+150+90+120+140)
  },
  tabelaLinha: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
    minWidth: 580, // Deve corresponder ao minWidth da tabelaHeader
  },
  // Tamanho para ID
  celulaPequena: {
    width: 40, 
    paddingHorizontal: 2,
    textAlign: 'center',
  },
  // Tamanho para CPF e Curso (textos médios)
  celula: {
    width: 120, // Ajustado para ser maior que o CPF
    paddingHorizontal: 4,
  },
  // Tamanho para Nome (texto grande)
  celulaGrande: {
    width: 150, 
    paddingHorizontal: 4,
  },
  // Tamanho para CPF (texto médio)
  celulaCPF: {
    width: 90, // Largura adequada para CPF
    paddingHorizontal: 4,
  },
  // Tamanho para Ações
  celulaAcao: {
    width: 140, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  cabecalho: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
  acaoTexto: {
    color: '#1e88e5',
    paddingHorizontal: 0,
    fontSize: 12, // Mantendo a fonte menor para caber
  },
  // ... (restante dos estilos permanece o mesmo)
  linhaDetalhe: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 12,
  },
  labelDetalhe: {
    fontWeight: 'bold',
    marginRight: 8,
    minWidth: 70,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  input: {
    marginBottom: 16,
  },
  botaoSalvar: {
    marginTop: 8,
    paddingVertical: 8
  }
});