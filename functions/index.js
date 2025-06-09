// index.js
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { setGlobalOptions } = require("firebase-functions/v2");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

// GLOBAL OPTIONS
setGlobalOptions({ region: "southamerica-east1" });

// FIREBASE ADMIN INIT
initializeApp();
const db = getFirestore();

// GOOGLE SHEETS AUTH
const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

// GOOGLE SHEETS SPREADSHEET ID
const SPREADSHEET_ID = "1GKkqM2QqnYD7jwv2P84HPl1SkkCQ5inRNq0H5WqDo8E";

// NODEMAILER CONFIG
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "no-reply@yabaconsultoria.com.br", // troque se quiser
    pass: "gbpu xweq xhwt xufg", // app password
  },
});

// MAIN FUNCTION → quando lead novo criado no Firestore
exports.sendEmailAndSheetOnLead = onDocumentCreated(
  {
    region: "southamerica-east1",
    document: "leads/{leadId}",
  },
  async (event) => {
    const data = event.data.data();
    if (!data) {
      console.error("Erro: Nenhum dado no documento!");
      return;
    }

    // === 1) ENVIAR PARA GOOGLE SHEETS ===
    try {
      const client = await auth.getClient();
      const sheets = google.sheets({ version: "v4", auth: client });

      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: "Leads!A1",
        valueInputOption: "RAW",
        requestBody: {
          values: [
            [
              data.nome || "",
              data.email || "",
              data.telefone || "",
              data.tipo || "",
              data.museu || "",
              data.data || "",
              data.detalhamento || "",
              new Date().toISOString(),
            ],
          ],
        },
      });

      console.log("✅ Lead salvo no Google Sheets!");
    } catch (err) {
      console.error("Erro ao salvar no Google Sheets:", err);
    }

    // === 2) ENVIAR EMAIL ===
    try {
      const mailOptions = {
        from: "no-reply@yabaconsultoria.com.br",
        to: "comercial@afloracultural.com.br",
        subject: "Aflora Eventos - Novo Lead Recebido!",
        text: `
        Novo lead recebido:

        - Nome: ${data.nome}
        - Email: ${data.email}
        - Telefone: ${data.telefone}
        - Tipo de evento: ${data.tipo}
        - Museu de interesse: ${data.museu}
        - Data desejada: ${data.data}
        - Detalhamento: ${data.detalhamento}

        Recebido em: ${new Date().toLocaleString("pt-BR")}
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log("✅ E-mail enviado para comercial@afloracultural.com.br!");
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
    }
  }
);
