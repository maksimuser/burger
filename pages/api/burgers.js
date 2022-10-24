import { burgers } from './data/burgers';

export default function handler(req, res) {
  //   console.log('fetch');
  if (req.method === 'GET') {
    res.status(200).json(burgers);
  }
}
