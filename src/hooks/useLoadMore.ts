import {useEffect, useState} from 'react';

export default function useLoadMore<T>(url: string, maxResults: number) {
  interface IState {
    loading: boolean;
    hasMore: boolean;
    error: string | null;
    list: T[];
  }

  const [state, setState] = useState<IState>({
    loading: false,
    hasMore: true,
    error: null,
    list: [],
  });

  useEffect(() => {
    const sendRequest = async () => {
      setState((s: IState) => {
        return {...s, loading: true};
      });

      try {
        const data = await fetch(url);
        const jsonData = await data.json();
        const hasMore = jsonData.length === maxResults;
        setState((s: IState) => {
          return {
            ...s,
            loading: false,
            hasMore,
            list: [...s.list, ...jsonData],
          };
        });
      } catch (e) {
        setState((s: IState) => {
          return {...s, error: `Cannot fetch from url: ${url}`};
        });
      }
    };

    sendRequest();
  }, [url, maxResults]);

  return {...state};
}
