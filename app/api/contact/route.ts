import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { name, email, message } = body as {
      name: string;
      email: string;
      message: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Barcha maydonlarni to'ldiring" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? "your@email.com",
      replyTo: email,
      subject: `Portfolio saytdan yangi xabar: ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #111111; color: #f5f5f5; padding: 40px; border-radius: 16px; border: 1px solid #222222;">
          <div style="margin-bottom: 32px;">
            <h1 style="margin: 0; font-size: 24px; color: #a78bfa; font-weight: 700;">
              📬 Yangi xabar
            </h1>
            <p style="margin: 8px 0 0; color: #6b7280; font-size: 14px;">
              Portfolio sayt orqali keldi
            </p>
          </div>
          
          <div style="background: #1a1a1a; border-radius: 12px; padding: 24px; margin-bottom: 24px; border: 1px solid #2a2a2a;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #2a2a2a; width: 80px;">
                  <span style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Ism</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #2a2a2a;">
                  <span style="color: #f5f5f5; font-size: 15px; font-weight: 500;">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0;">
                  <span style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</span>
                </td>
                <td style="padding: 10px 0;">
                  <a href="mailto:${email}" style="color: #a78bfa; font-size: 15px; text-decoration: none;">${email}</a>
                </td>
              </tr>
            </table>
          </div>

          <div style="background: #1a1a1a; border-radius: 12px; padding: 24px; border: 1px solid #2a2a2a;">
            <p style="margin: 0 0 12px; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Xabar</p>
            <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #222; text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; background: #7c3aed; color: white; padding: 12px 28px; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px;">
              Javob berish
            </a>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Server xatosi yuz berdi" },
      { status: 500 }
    );
  }
}
