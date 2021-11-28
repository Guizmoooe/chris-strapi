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
    provider: 'nodemailer',
    providerOptions: {
      host: env('SMTP_HOST', 'example@hotmail.fr'),
      port: env('SMTP_PORT', 587),
      secure: false,
      auth: {
        user: env('SMTP_USERNAME'),
        pass: env('SMTP_PASSWORD'),
      },
      // ... any custom nodemailer options
    },
    settings: {
      defaultFrom: env('SMTP_USERNAME'),
      defaultReplyTo: env('SMTP_USERNAME'),
    },
  },
});
