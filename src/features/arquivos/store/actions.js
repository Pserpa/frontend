
import http from '@/service/http'

const fetch = async ({ commit }) => {
  const response = await http.get('/categoria')
  if (response != null) {
    const arquivos = response.data
    commit('SET_LIST', arquivos)
  }
}

export default {
  fetch
}
