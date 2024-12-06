import { baseQuery } from './baseQuery';

export const get = (url: string, params?: any) => baseQuery({ url, method: 'GET', params });

export const post = (url: string, data: any) =>
  baseQuery({ url, method: 'POST', data });

export const patch = (url: string, data: any) =>
  baseQuery({ url, method: 'PATCH', data });

export const del = (url: string) => baseQuery({ url, method: 'DELETE' });
