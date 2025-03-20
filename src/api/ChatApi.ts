import { environment } from '@/config';

export const getAIResponse = async (query: string, session_id: string) => {
  const response = await fetch(environment.BASE_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, session_id }),
  });

  return response;
};
