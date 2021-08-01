import { API } from 'constants/Api.config';
import { get } from 'utils/http.util';

function getCategories(): Promise<any> {
  return get(API.CATEGORIES);
}

export { getCategories };
