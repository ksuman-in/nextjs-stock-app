import nodemailer from "nodemailer";
import { WELCOME_EMAIL_TEMPLATE } from "./templates";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

export const sendWelcomeEmail = async ({
  email,
  intro,
  name,
}: WelcomeEmailData) => {
  const htmlTemplate = WELCOME_EMAIL_TEMPLATE.replace(
    "{{intro}}",
    intro
  ).replace("{{name}}", name);
  const mailOptions = {
    from: `"Stock Analysis" <suman845415@gail.com>`,
    to: email,
    subject: "Welcome to Our Platform!",
    html: htmlTemplate,
  };

  await transporter.sendMail(mailOptions);
};
