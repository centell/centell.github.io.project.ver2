export default (req, res) => {
  const {
    method,
  } = req;

  switch (method) {
    case 'GET':
      res.status(200).json({ id: '0' });
      break;
    case 'POST':
      res.status(200).json({ id: '0' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
