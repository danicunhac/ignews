import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Daniel" },
    { id: 2, name: "Hierro" },
    { id: 3, name: "Gab" },
  ];

  return response.json(users);
};
