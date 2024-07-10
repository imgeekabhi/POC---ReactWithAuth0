import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();
  const [accessToken, setAccessToken] = useState("");
  const auth = useAuth0();
  console.log("auth", auth);
  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: process.env.REACT_APP_AUTH0_AUDIENCE,
          scope: "openid profile email",
        });
        setAccessToken(token);
      } catch (error) {
        console.error("Error getting access token", error);
      }
    };

    if (isAuthenticated) {
      getToken();
    }
  }, [isAuthenticated, getAccessTokenSilently]);
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>Access Token: {accessToken}</p>
        <LogoutButton />
      </div>
    )
  );
};

export default UserProfile;
