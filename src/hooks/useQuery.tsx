import { useCallback } from 'react';
import { create } from 'zustand';
type State = {
  [key: string]: {
    isLoading: boolean;
    data?: any;
  };
};

export function useQuery(key: string, func: () => Promise<any>) {
  const query = create<State>((set) => ({
    [key]: {
      isLoading: false,
      data: [],
      updateState: () =>
        set((state) => ({ [key]: { ...state[key], ...data } })),
    },
  }));

  const {
    [key]: { isLoading, data },
  } = query();
  const requestQuery = useCallback(async () => {
    query.setState(() => ({
      [key]: {
        isLoading: true,
      },
    }));
    try {
      const response = await func();

      console.log(response);
      query.setState(() => ({
        [key]: {
          isLoading: false,
          data: response,
        },
      }));
    } catch (error) {
      // if (options) {
      console.error(error);
      // }
    }
  }, [func, key, query]);

  console.log('useQuery', { data, isLoading });
  return {
    requestQuery,
    isLoading,
    data,
  };
}
