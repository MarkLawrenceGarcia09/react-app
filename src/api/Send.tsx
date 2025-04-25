import { Resend } from 'resend';

const resend = new Resend('re_5MVcroES_GG58JDGJaQXPq7RUGBnB8pkF');

export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const { name, email, subject, message } = formData;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'markmarkmarklawrence@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};