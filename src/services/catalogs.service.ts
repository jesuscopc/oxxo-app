import { API } from 'constants/Api.config';
import { ResponseHandler } from 'interfaces/Http.interface';
import { get } from 'utils/http.util';

function getCategories(country: string): Promise<ResponseHandler> {
  const params = { country };
  const customHeaders = {
    'X-RapidAPI-Key': '08262758a0mshad9f2f9f7fe4ee5p17abf1jsnca777cd83d6a',
    'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
  };
  return get(API.CATEGORIES, customHeaders, params);
}

export { getCategories };
