import AxiosHTTP from '../axios';

const URL = 'https://core.ac.uk:443/api-v2/search/articles?page=1&pageSize=10&apiKey=JswoejUrL6xKtBQOEfamIN9V1kl3HhvD';

class ArticlesRequests {
  articlesRequest = async () => {
    const response = await AxiosHTTP.Request({
      url: `${URL}`,
      method: 'GET',
    })

    return response;
  }
}

export default (new ArticlesRequests());