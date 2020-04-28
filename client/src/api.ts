const baseUrl = "http://localhost:4242/dev";

export const userToken = async (code: string) => {
  const res = await fetch(`${baseUrl}/users/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code }),
  });
  return await res.json();
};
