import { Router } from 'express';

export const api = Router();

type Payload = {
  message: string,
};

let payload: Payload = {
  "message": "Like"
};

api.get('/', (_req, res) => {
  res.send(payload);
});
