import { useRouter } from 'next/router';
import { useEffect, useState, useContext } from 'react';

import {DataMarketplaceContext} from "../../Context/DataMarketplaceContext"

const Guard = ({ children }) => {
  const [hasPermission, setPermission] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();
  const { hasTokenFromOwner } = useContext(DataMarketplaceContext);

  useEffect(() => {
    const checkPermission = async () => {
      const value = await hasTokenFromOwner();
      console.log(value)
      setPermission(value);
      setLoading(false);
    };
    checkPermission();
  }, []);

  useEffect(() => {
    if (!isLoading && !hasPermission) {
      router.push('/unauthorizedPage');
    }
  }, [hasPermission, isLoading, router]);

  return isLoading ? null : (hasPermission ? children : null);
};

export default Guard;
