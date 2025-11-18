import axios from 'axios'

const api = axios.create({
  baseURL: 'https://proweb.leoproti.com.br/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Interceptor para tratamento de erros
api.interceptors.response.use(
  response => response,
  error => {
    console.error('Erro na requisição:', error)
    return Promise.reject(error)
  }
)

// Funções para consumo da API
export const buscarTodosAlunos = async () => {
  try {
    const response = await api.get('/alunos')
    return response.data
  } catch (error) {
    throw new Error('Erro ao buscar alunos: ' + error.message)
  }
}

export const buscarAlunoPorId = async (id) => {
  try {
    const response = await api.get(`/alunos/${id}`)
    return response.data
  } catch (error) {
    throw new Error('Erro ao buscar aluno: ' + error.message)
  }
}

export default api