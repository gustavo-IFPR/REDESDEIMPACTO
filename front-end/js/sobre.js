// Função para navegar entre as páginas
function navigateTo(page) {
    const routes = {
        home: "../../index.html",               // Rota para a página home
        sobre: "./sobre.html",                  // Rota para a página sobre
        negociosSociais: "./negociosSociais.html", // Rota para a página de negócios sociais
        contato: "./contato.html",              // Rota para a página de contato
        ods: "./ods.html",                      // Rota para a página ODS
        login: "./login.html"                   // Rota para a página de login
    };

    // Redireciona para a página correspondente
    if (routes[page]) {
        window.location.href = routes[page];
    } else {
        console.error("Página não encontrada!");
    }
}
