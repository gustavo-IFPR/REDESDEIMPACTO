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

    loadProfile();
});

async function loadProfile() {
    // Recupera as informações do usuário do localStorage
    const user = JSON.parse(localStorage.getItem('user')); 

    if (!user || !user.id) {
        alert('Usuário não encontrado. Faça login novamente.');
        window.location.href = './login.html'; // Redireciona para login se não encontrar o usuário
        return;
    }

    try {
        // Faz a requisição ao backend usando o ID
        const response = await fetch(`http://localhost:3000/perfil?id=${user.id}`);
        if (!response.ok) {
            throw new Error('Erro ao carregar o perfil.');
        }

        const data = await response.json();

        // Preenche os campos do formulário com os dados do banco
        document.getElementById('nome').value = data.nome || '';
        document.getElementById('cidade').value = data.cidade || '';
        document.getElementById('senha').value = data.senha || '';
        document.getElementById('email').value = data.email || '';
        document.getElementById('emailComercial').value = data.emailComercial || '';
        document.getElementById('celular').value = data.celular || '';
        document.getElementById('site').value = data.site || '';
        document.getElementById('redeSocial').value = data.redeSocial || '';
        document.getElementById('ramo').value = data.ramos_id || '';
    } catch (error) {
        console.error('Erro ao carregar o perfil:', error);
        alert('Erro ao carregar o perfil.');
    }
}

async function submitForm() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || !user.id) {
        alert('Usuário não encontrado. Faça login novamente.');
        window.location.href = './login.html';
        return;
    }

    const formData = new FormData();
    formData.append('id', user.id);
    formData.append('nome', document.getElementById('nome').value);
    formData.append('cidade', document.getElementById('cidade').value);
    formData.append('senha', document.getElementById('senha').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('emailComercial', document.getElementById('emailComercial').value);
    formData.append('celular', document.getElementById('celular').value);
    formData.append('site', document.getElementById('site').value);
    formData.append('redeSocial', document.getElementById('redeSocial').value);
    formData.append('ramo', document.getElementById('ramo').value);

    const avatarInput = document.getElementById('avatar');
    if (avatarInput.files[0]) {
        formData.append('avatar', avatarInput.files[0]); // Adiciona o arquivo apenas se for enviado
    }

    try {
        const response = await fetch('http://localhost:3000/perfil', {
            method: 'PUT',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Erro ao atualizar o perfil.');
        }

        alert('Perfil atualizado com sucesso!');
    } catch (error) {
        console.error('Erro ao atualizar o perfil:', error);
        alert('Erro ao atualizar o perfil.');
    }
}


async function excluirConta() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || !user.id) {
        alert('Usuário não encontrado. Faça login novamente.');
        window.location.href = './login.html';
        return;
    }

    if (!confirm('Tem certeza de que deseja excluir sua conta? Esta ação é irreversível.')) {
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/excluir', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: user.id }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erro ao excluir a conta.');
        }

        alert('Conta excluída com sucesso.');
        localStorage.clear(); // Limpa o localStorage
        window.location.href = '../../index.html'; // Redireciona para a página inicial
    } catch (error) {
        console.error('Erro ao excluir conta:', error);
        alert('Erro ao excluir conta: ' + error.message);
    }
}