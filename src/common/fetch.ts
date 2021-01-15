type TodoResponseItem = {
  id: number;
  item: string;
};

export type TodoResponse = TodoResponseItem[];

export const fetcher = (url: string): Promise<TodoResponse> => {
  return fetch(url).then((res) => {
    if (res.status === 500) {
      throw new Error(`${res.status} ${res.statusText}`);
    }
    return res.json();
  });
};

export const fetcherOption = {
  revalidateOnFocus: false,
};
