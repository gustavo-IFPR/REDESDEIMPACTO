// Define os caminhos relativos de cada página
const paths = {
    home: '../../index.html',
    sobre: './sobre.html',
    negociosSociais: './negociosSociais.html',
    contato: './contato.html',
    ods: './ods.html',
    login: './login.html',
    perfil: './perfil.html',
};

// Função para redirecionar com base no destino
function navigateTo(page) {
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
    const perfilBtn = document.getElementById('perfilBtn');

    if (isLoggedIn === 'true') {
        loginBtn.style.display = 'none';
        perfilBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'inline-block';
    } else {
        loginBtn.style.display = 'inline-block';
        perfilBtn.style.display = 'none';
        logoutBtn.style.display = 'none';
    }
}

// Função de logout
function logout() {
    localStorage.removeItem('loggedIn');
    localStorage.clear();
    updateMenu();
    window.location.href = paths.home; // Redireciona para a home
}

// Executa o updateMenu ao carregar a página
window.onload = updateMenu;
