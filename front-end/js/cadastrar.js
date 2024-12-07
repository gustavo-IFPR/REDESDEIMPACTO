// Função para redirecionar à página inicial
function redirectToHome() {
    window.location.href = 'index.html';
}

// Carregar os ramos de atuação assim que a página de cadastro for aberta
document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Fazendo a requisição para obter os ramos
        const response = await fetch('http://localhost:3000/ramos');
        if (!response.ok) {
            throw new Error(`Erro ao buscar ramos: ${response.status}`);
        }

        const data = await response.json();
        const fieldSelect = document.getElementById("ramo");

        // Preenchendo o select com os ramos
        data.forEach(ramo => {
            const option = document.createElement("option");
            option.value = ramo.id;
            option.textContent = ramo.ramo;
            fieldSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Erro ao carregar os ramos:", error);
    }
});

// Função para cadastrar o usuário
async function register() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const cidade = document.getElementById("cidade").value;
    const ramo = document.getElementById("ramo").value;

    if (!nome || !email || !senha || !cidade || !ramo) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Dados do formulário
    const userData = {
        nome: nome,
        email: email,
        senha: senha,
        cidade: cidade,
        ramo_id: ramo,
    };

    try {
        // Enviando os dados para o backend
        const response = await fetch('http://localhost:3000/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erro desconhecido ao cadastrar.');
        }

        alert("Cadastro realizado com sucesso!");
        window.location.href = './login.html';
    } catch (error) {
        alert("Erro ao cadastrar: " + error.message);
    }
}
