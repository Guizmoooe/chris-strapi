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
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: env("SMTP_USERNAME"),
        pass: env("SMTP_PASSWORD"),
      },
      domains: ["hotmail.com", "outlook.com", "hotmail.fr", "live.fr"],
      tls: { ciphers: "SSLv3", rejectUnauthorized: false },
      // ... any custom nodemailer options
    },
  },
});
