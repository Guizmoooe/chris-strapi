module.exports = ({ env }) => ({
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("CLOUDINARY_CLOUD_NAME"),
      api_key: env("CLOUDINARY_KEY"),
      api_secret: env("CLOUDINARY_SECRET"),
    },
  },
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: env("SMTP_HOST", "smtp-mail.outlook.com"),
      port: env("SMTP_PORT", 465),
      secure: env("SECURE_SMTP", true),
      auth: {
        user: env("SMTP_USERNAME"),
        pass: env("SMTP_PASSWORD"),
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
      // ... any custom nodemailer options
    },
    settings: {
      defaultFrom: env("SMTP_USERNAME"),
      defaultReplyTo: env("SMTP_USERNAME"),
    },
  },
});
