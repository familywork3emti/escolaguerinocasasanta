const express = require('express');
const cors = require('cors');
const venom = require('venom-bot');

const app = express();
const port = 3333;

// Middleware
app.use(cors());
app.use(express.json());

// Variável global para o cliente do WhatsApp
let whatsappClient = null;

// Inicializar Venom-bot
venom.create({
    session: 'school-contact',
    multidevice: true
})
.then((client) => {
    console.log('Conexão WhatsApp estabelecida');
    whatsappClient = client;
})
.catch((error) => {
    console.error('Erro ao conectar WhatsApp:', error);
});

// Rota para enviar mensagem
app.post('/enviar-mensagem', async (req, res) => {
    try {
        // Número de WhatsApp da escola (substitua pelo número real)
        const numeroEscola = '5511999999999'; // Exemplo: coloque aqui o número real

        // Dados do formulário
        const { 
            nome, 
            email, 
            telefone, 
            mensagem,
            assunto 
        } = req.body;

        // Verificar se o cliente WhatsApp está pronto
        if (!whatsappClient) {
            return res.status(500).json({ 
                erro: 'Cliente WhatsApp não inicializado' 
            });
        }

        // Formatar mensagem
        const mensagemWhatsApp = `
🏫 *Novo Contato Recebido* 🏫

📋 *Detalhes:*
- *Nome:* ${nome}
- *Email:* ${email}
- *Telefone:* ${telefone}
- *Assunto:* ${assunto}

📝 *Mensagem:*
${mensagem}
        `;

        // Enviar mensagem
        await whatsappClient.sendMessage(
            `${numeroEscola}@c.us`, 
            mensagemWhatsApp
        );

        res.status(200).json({ 
            mensagem: 'Formulário enviado com sucesso!' 
        });

    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        res.status(500).json({ 
            erro: 'Erro ao processar formulário' 
        });
    }
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

// Tratamento de erros não capturados
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});