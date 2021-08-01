import { useEffect, useState } from 'react';
import { API } from 'constants/Api.config';
import { get } from 'utils/http.util';

type IApiProduct = {
  data: Array<any>;
  loading: boolean;
  error: any;
};

const UseApiProduct = (category: string, keyword?: string): IApiProduct => {
  const [state, setState] = useState<IApiProduct>({
    data: [],
    loading: false,
    error: null
  });
  const getCategoryProducts = async (category: string, keyword?: string) => {
    setState({ ...state, loading: true });
    const params = {
      categoryID: category,
      country: 'MX',
      page: '1',
      keyword
    };
    const customHeaders = {
      'X-RapidAPI-Key': '08262758a0mshad9f2f9f7fe4ee5p17abf1jsnca777cd83d6a',
      'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
    };
    try {
      const result = await get(API.PRODUCTS, customHeaders, params);
      setState({ data: result.data.docs, loading: false, error: null });
    } catch (error) {
      setState({ ...state, loading: false, error });
    }
  };

  useEffect(() => {
    getCategoryProducts(category, keyword);
  }, [category, keyword]);

  return state;
};

export default UseApiProduct;
