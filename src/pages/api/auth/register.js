async function POST(req, res) {
  const body = req.body;
  console.log("body", body);
  res.status(200).json({ message: "ok" });
}

export default POST;
