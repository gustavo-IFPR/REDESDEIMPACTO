async function submitContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/contato', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erro ao enviar a mensagem.');
        }

        alert('Mensagem enviada com sucesso!');
        document.getElementById('contactForm').reset();
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        alert('Erro ao enviar mensagem. Por favor, tente novamente.');
    }
}