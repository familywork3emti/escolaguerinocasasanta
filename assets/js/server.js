

document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = e.target;
    const statusMessage = document.getElementById('status-message');
    
    // Limpar mensagens anteriores
    statusMessage.textContent = '';
    statusMessage.className = '';


    // Rota para processar o formulário
app.post('/enviar-formulario', async (req, res) => {
    try {
        // ADICIONE AQUI O NÚMERO DO WHATSAPP
        const numeroEscola = '553534411941'; // Substitua pelo número real da escola

        // Dados do formulário
        const {
            nome,
            email,
            telefone,
            mensagem,
            assunto
        } = req.body;

        // Restante do código continua igual...
    } catch (error) {
        // ...
    }
});

    // Coletar dados do formulário
    const formData = {
        nome: form.nome.value,
        email: form.email.value,
        telefone: form.telefone.value,
        assunto: form.assunto.value,
        mensagem: form.mensagem.value
    };

    try {
        // Enviar para o backend
        const response = await fetch('http://localhost:3000/enviar-formulario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
            // Sucesso
            statusMessage.textContent = result.mensagem || 'Mensagem enviada com sucesso!';
            statusMessage.classList.add('success');
            form.reset(); // Limpar formulário
        } else {
            // Erro
            statusMessage.textContent = result.erro || 'Erro ao enviar mensagem';
            statusMessage.classList.add('error');
        }
    } catch (error) {
        // Erro de conexão
        statusMessage.textContent = 'Erro de conexão. Tente novamente.';
        statusMessage.classList.add('error');
        console.error('Erro:', error);
    }
});