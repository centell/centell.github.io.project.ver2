export default (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
  case 'GET':
    res.status(200).json({ id });
    break;
  case 'POST':
    res.status(200).json({ id });
    break;
  default:
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};
