import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Where the main inquiry email goes.
const TO_EMAIL = 'coach@fitfable.in'

// Everyone who should get a silent (BCC) copy — recipients can't see each other here.
const BCC_EMAILS = ['akshayraj.fitness4@gmail.com', 'sridevi.ishar@gmail.com']

// This must be an address on a domain you've verified in Resend (e.g. inquiries@fitfable.in).
// Until you verify a domain, Resend will only let you send to your own account email —
// see the README for the one-time setup steps.
const FROM_EMAIL = 'FitFable Website <inquiries@fitfable.in>'

type InquiryPayload = {
  inquiryType: 'enterprise' | 'individual'
  fields: Record<string, string>
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as InquiryPayload
    const { inquiryType, fields } = body

    if (!fields || typeof fields !== 'object') {
      return NextResponse.json({ success: false, error: 'Invalid submission.' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          error:
            'Email sending is not configured yet. Add RESEND_API_KEY in your Vercel project settings — see README.',
        },
        { status: 500 },
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const subject =
      inquiryType === 'enterprise'
        ? 'New FitFable Enterprise Inquiry'
        : 'New FitFable Coaching Inquiry'

    const replyTo =
      (fields['Email'] as string) || (fields['Work email'] as string) || undefined

    const rows = Object.entries(fields)
      .filter(([, value]) => value && String(value).trim().length > 0)
      .map(
        ([label, value]) =>
          `<tr><td style="padding:6px 16px 6px 0;color:#6b6b6b;font-family:sans-serif;font-size:13px;vertical-align:top;white-space:nowrap;">${escapeHtml(
            label,
          )}</td><td style="padding:6px 0;font-family:sans-serif;font-size:13px;color:#0f0f0f;">${escapeHtml(
            String(value),
          )}</td></tr>`,
      )
      .join('')

    const html = `
      <div style="font-family:sans-serif;max-width:560px;">
        <h2 style="font-size:18px;color:#0f0f0f;">${subject}</h2>
        <table style="border-collapse:collapse;width:100%;margin-top:12px;">${rows}</table>
      </div>
    `

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      bcc: BCC_EMAILS,
      replyTo,
      subject,
      html,
    })

    if (result.error) {
      return NextResponse.json({ success: false, error: result.error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ success: false, error: 'Server error, please try again.' }, { status: 500 })
  }
}
