import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

const resendApiKey = process.env.RESEND_API_KEY || "";
const ownerEmail = process.env.OWNER_EMAIL || "";
const fromEmail = process.env.FROM_EMAIL || "no-reply@example.com";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

app.get("/", (_req, res) => {
  res.type("text/plain").send("Email server is running. Try GET /health or POST /api/contact.");
});

app.get("/health", (_req, res) => {
  return res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body || {};
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ ok: false, error: "Missing required fields" });
  }
  if (!resend || !ownerEmail) {
    console.error("Email service not configured: resendApiKey or ownerEmail missing");
    return res.status(500).json({ ok: false, error: "Email service not configured" });
  }
  try {
    const html = `
      <div>
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;font-family:inherit;">${message}</pre>
      </div>
    `;
    const resp = await resend.emails.send({
      from: fromEmail,
      to: ownerEmail,
      subject: `[Contact] ${subject}`,
      html,
      reply_to: email,
    });
    if (resp?.error) {
      console.error("Resend send error:", resp.error);
      return res.status(500).json({ ok: false, error: resp.error.message || "Send failed" });
    }
    return res.json({ ok: true });
  } catch (err) {
    console.error("Unexpected send error:", err);
    return res.status(500).json({ ok: false, error: "Unexpected error" });
  }
});

const port = process.env.EMAIL_SERVER_PORT ? Number(process.env.EMAIL_SERVER_PORT) : 8787;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Email server listening on http://localhost:${port}`);
});


