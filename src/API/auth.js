const signUp = async (user) => {
  const url =
    "https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/register";

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await res.json();
  if (res.ok) {
    return data;
  }
  throw new Error(data.msg);
};

const signIn = async (user) => {
  const url = `https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/login`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await res.json();
  if (res.ok) {
    return data;
  }
  throw new Error(data.msg);
};

export { signUp, signIn };
