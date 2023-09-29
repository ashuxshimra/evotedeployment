import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  // Use useEffect to perform the redirection
  useEffect(() => {
    // Redirect to the "/login" page
    router.push('/login');
  }, []); // Empty dependency array to run this effect only once

  // This component doesn't render anything, as it redirects immediately.
  return null;
};

export default Login;
