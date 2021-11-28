"use strict";
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  sendEmail: async (ctx) => {
    const env = require("dotenv").config();
    const body = ctx.request.body.variables;
    await strapi.plugins["email"].services.email.send({
      to: env.parsed.SMTP_USERNAME,
      from: env.parsed.SMTP_USERNAME,
      subject: "Nouvelle prise de contact",
      html: `<div style="text-align:left">
      <div style="border-bottom: 1px solid red; display: flex; justify-content: space-around; margin: 20px 0 ">
        <div style="display: flex; align-items: center; margin-right: 50px">
          <h3 style="text-decoration: underline; margin-right: 10px">Nom: </h3>
          <p> ${body.user.name}</p>
          </div>
          <div style="display: flex; align-items: center; margin-right: 50px">
          <h3 style="text-decoration: underline; margin-right: 10px">Mail: </h3>
          <a href=mailto:${body.user.email}>${body.user.email}</a>

          </div>
          <div style="display: flex; align-items: center; margin-right: 50px">
          <h3 style="text-decoration: underline; margin-right: 10px">Téléphone: </h3>
          <p> ${body.user.phone}</p>
          </div>
          <div style="display: flex; align-items: center">
          <h3 style="text-decoration: underline; margin-right: 10px">Ville: </h3>
          <p> ${body.user.city}</p>
          </div>

      </div>
      <div>
        <h3 style="text-decoration: underline">Message : </h3><p style="background-color: rgba(135,135,135,0.2); padding: 30px">${body.description}</p>
      </div>
    </div>`,
    }).then(() => {ctx.send({message:'ok'}, 200)}).catch((err) => {ctx.send({message:'ko' + err}, 500)});
  },
};
