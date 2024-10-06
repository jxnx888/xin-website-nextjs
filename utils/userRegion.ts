import { headers } from 'next/headers';

export const userRegionHandler = () => {
  const headerList = headers();
  return {
    country: headerList.get('x-vercel-ip-country') || undefined,
    region: headerList.get('x-vercel-ip-country-region') || undefined,
    city: headerList.get('x-vercel-ip-city') || undefined,
  };
};
