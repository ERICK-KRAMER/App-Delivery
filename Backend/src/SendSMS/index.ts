import twilio from "twilio";
import { Response, Request } from "express";

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;

const client = twilio(accountSid, authToken);

const sendSMS = async (to: string, message: string) => {
  return client.messages.create({
    body: message,
    to: to,
    from: twilioNumber
  });
};

export const SendSMS = async (req: Request, res: Response) => {
  const { to, message } = req.body;
  const messagingResponse = new twilio.twiml.MessagingResponse();
  messagingResponse.message(`Your text to me was ${ message }. Webhooks are neat :)`);

  try {
    await sendSMS(to, message);
    res.set("Content-Type", "text/xml");
    res.send(messagingResponse.toString());
  } catch (error) {
    console.error("Erro ao enviar SMS:", error);
    res.status(500).send("Erro ao enviar SMS");
  }
};