import {useState} from 'react';

interface IUseRequestInterface {
  error: boolean;
  loading: boolean;
  results: any;
}

type TMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export const useRequest = () => {
  const [data, updateData] = useState<IUseRequestInterface>({
    error: false,
    loading: false,
    results: [],
  });

  async function sendRequest(
    url: string,
    method: TMethod = 'GET',
    token: string | null = null,
    body: FormData | null = null,
  ) {
    updateData({...data, loading: true});
    try {
      const options: RequestInit = {method};
      if (token) {
        options.headers = {Authorization: `Bearer ${token}`};
      }
      if (body) {
        options.body = body;
      }
      const response = await fetch(url, options);
      const json = await response.json();
      if (json.error) {
        updateData({
          error: true,
          loading: false,
          results: [],
        });
      } else {
        updateData({
          error: false,
          loading: false,
          results: json,
        });
      }
    } catch (e) {
      updateData({
        error: true,
        loading: false,
        results: [],
      });
    }
  }

  return {data, sendRequest};
};
