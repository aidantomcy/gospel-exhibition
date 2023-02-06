const fetchData = async <T>(url: string, config: RequestInit): Promise<T> => {
  const res = await fetch(url, config);
  const data: Promise<T> = await res.json();

  return data;
};

export default fetchData;
