// Função para redirecionar com base no destino
function navigateTo(page) {
    let paths = {
        home: './index.html',
        sobre: './front-end/html/sobre.html',
        negociosSociais: './front-end/html/negociosSociais.html',
        contato: './front-end/html/contato.html',
        ods: './front-end/html/ods.html',
        login: './front-end/html/login.html',
        perfil: './front-end/html/perfil.html',
    };

    // Redireciona para a página especificada
    if (paths[page]) {
        window.location.href = paths[page];
    } else {
        console.error(`Página "${page}" não encontrada.`);
    }  
}

// Verifica se o usuário está logado e atualiza o menu
function updateMenu() {
    const isLoggedIn = localStorage.getItem('loggedIn');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const perfilBtn = document.getElementById('perfilBtn')

    if (isLoggedIn === 'true') {
        // Se estiver logado, esconder o botão de login e mostrar o botão de logout
        loginBtn.style.display = 'none';
        perfilBtn.style.display = "inline-block";
        logoutBtn.style.display = 'inline-block';
    } else {
        // Se não estiver logado, mostrar o botão de login e esconder o botão de logout
        loginBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
        perfilBtn.style.display = "none";
    }
}

// Função de logout
function logout() {
    // Remove a chave de login do localStorage
    localStorage.removeItem('loggedIn');
    localStorage.clear();
    // Atualiza o menu
    updateMenu();
    // Redireciona para a página inicial
    window.location.href = './index.html';
}

// Chama a função de atualização do menu quando a página é carregada
window.onload = updateMenu;