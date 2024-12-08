// Inicialização do Swiper
/*const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});
*/

// Funções do Modal
function openModal(title, description, imageSrc) {
    const modal = document.getElementById('eventModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalImage = document.getElementById('modalImage');

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = imageSrc;
    modalImage.alt = title;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('eventModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('eventModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Fechar modal com tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// script de comunicação do backend,evalidação do form.
/*tirei os comentarios
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    fetch('process_form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('Mensagem enviada com sucesso!');
            this.reset();
        } else {
            alert('Erro ao enviar mensagem. Por favor, tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar mensagem. Por favor, tente novamente.');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const submitButton = form.querySelector('button[type="submit"]');
    const buttonText = submitButton.querySelector('.button-text');
    const spinner = submitButton.querySelector('.spinner');

    function showLoading(show) {
        submitButton.disabled = show;
        spinner.classList.toggle('hidden', !show);
        buttonText.classList.toggle('hidden', show);
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = 'form-message';
        }, 5000);
    }

    function validateForm() {
        const name = form.querySelector('[name="name"]').value.trim();
        const email = form.querySelector('[name="email"]').value.trim();
        const message = form.querySelector('[name="message"]').value.trim();
        let isValid = true;

        // Reset error messages
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

        if (name.length < 2) {
            document.getElementById('name-error').textContent = 'Nome deve ter pelo menos 2 caracteres';
            isValid = false;
        }

        if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
            document.getElementById('email-error').textContent = 'Email inválido';
            isValid = false;
        }

        if (message.length < 10) {
            document.getElementById('message-error').textContent = 'Mensagem deve ter pelo menos 10 caracteres';
            isValid = false;
        }

        return isValid;
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        showLoading(true);

        try {
            const formData = new FormData(form);
            const response = await fetch('process_contact.php', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.status === 'success') {
                showMessage(data.message, 'success');
                form.reset();
            } else {
                showMessage(data.message || 'Erro ao enviar mensagem', 'error');
            }
        } catch (error) {
            showMessage('Erro ao enviar mensagem. Tente novamente.', 'error');
        } finally {
            showLoading(false);
        }
    });
});
*/