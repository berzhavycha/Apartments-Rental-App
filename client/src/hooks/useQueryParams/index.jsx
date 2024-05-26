import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useQueryParams = (initialParams) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState(() => {
    const paramsObject = {};
    for (const [key, value] of searchParams.entries()) {
      paramsObject[key] = value;
    }
    return { ...initialParams, ...paramsObject };
  });

  useEffect(() => {
    const newSearchParams = new URLSearchParams();
    for (const key in params) {
      if (params[key] !== null && params[key] !== undefined) {
        newSearchParams.set(key, params[key]);
      }
    }
    setSearchParams(newSearchParams);
  }, [params, setSearchParams]);

  return [params, setParams];
};
