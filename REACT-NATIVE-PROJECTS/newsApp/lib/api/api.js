import axios from "axios";

const api = axios.create({
  baseURL: "https://newsapi.org/v2",
});

// Função para obter notícias por categoria
export async function getNewsByCategory(category) {
  try {
    const response = await api.get(`/everything`, {
      params: {
        q: category,
        apiKey: "74dbbc29322d422a9f084de0e2720076",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar notícias por categoria:", error);
    throw error; // Re-lançar o erro para que o chamador possa lidar com ele
  }
}

// Função para obter notícias por consulta
export async function getNewsByQuery(query) {
  try {
    const response = await api.get(`/everything`, {
      params: {
        q: query,
        apiKey: "74dbbc29322d422a9f084de0e2720076",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar notícias por consulta:", error);
    throw error; // Re-lançar o erro
  }
}
