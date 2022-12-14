interface Response {
  error: string | null;
  data: any;
}

export const fetcher = async (
  url: string,
  mode: string,
  token?: string
): Promise<Response> => {
  try {
    const response = await fetch(url, {
      method: mode,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    const json = await response.json();
    return { error: null, data: json };
  } catch (e: any) {
    return { error: e, data: {} };
  }
};
