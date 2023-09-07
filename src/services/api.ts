import axios from 'axios';

interface appResponse {
  data: Object;
}

export async function login(email: string, password: string): Promise<appResponse> {
  return await axios.get(`https://api.lyrics.ovh/v1/${email}/${password}`);
}
