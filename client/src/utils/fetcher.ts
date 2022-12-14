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
    return { error: null, data: response };
  } catch (e: any) {
    console.log(e);
    return { error: e, data: {} };
  }
};
