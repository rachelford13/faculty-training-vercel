export default function handler(req, res) {
  const who = process.env.GREETING_NAME || "world";
  res.status(200).json({
    message: `Hello, ${who}!`,
    method: req.method,
    timestamp: new Date().toISOString()
  });
}
