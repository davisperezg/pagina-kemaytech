import mail from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";

const sendGridKey = process.env.SENDGRID_API_KEY || "";

mail.setApiKey(sendGridKey);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let message = "";

  if (req.body.RUC) {
    message = `
    RUC: ${req.body.RUC}\r\n
    Unidades: ${req.body.Unidades}\r\n
    Correo: ${req.body.Correo}\r\n
    Mensaje: ${req.body.Mensaje}\r\n
  `;
  } else {
    message = `
    Nombres: ${req.body.Nombres}\r\n
    Apellidos: ${req.body.Apellidos}\r\n
    Correo: ${req.body.Correo}\r\n
    Celular: ${req.body.Celular}\r\n
    Mensaje: ${req.body.Mensaje}\r\n
  `;
  }

  const data = {
    to: "ventas@kemaytechnology.com",
    from: "ventas@kemaytechnology.com",
    subject: `Nuevo mensaje de ${
      req.body.RUC ? "kemay/precios/empresa" : "kemay/contactanos"
    }`,
    text: message,
  };

  mail
    .send(data)
    .then(() => {
      res.status(200).json({ message: "ok" });
    })
    .catch((error) => {
      res.status(200).json({ message: error.response.body });
    });
}
