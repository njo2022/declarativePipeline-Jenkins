import { fastify } from "../index.js";

export const userIdToken = function (token) {
  const { id } = fastify.jwt.decode(token);
  return id;
};
