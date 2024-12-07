// Função para realizar o login
async function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Validação de campos vazios
    if (!email || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    try {
        // Enviar os dados para o backend
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Erro ao realizar login.");
        }

        // Login bem-sucedido
        const data = await response.json();
        alert("Login realizado com sucesso!");

        // Salvar o estado de login e os dados do usuário no localStorage
        localStorage.setItem('loggedIn', 'true'); // Indica que o usuário está logado
        localStorage.setItem('user', JSON.stringify(data)); // Salva os dados do usuário
        
        window.location.href = '../../index.html'; // Redirecionar para a página inicial
    } catch (error) {
        alert("Erro ao realizar login: " + error.message);
    }
}