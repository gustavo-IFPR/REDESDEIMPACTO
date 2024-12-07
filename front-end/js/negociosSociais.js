document.addEventListener("DOMContentLoaded", async () => {
    await loadRamos();
    await loadCidades();
    await loadAllBusinesses();
});

// Carregar os ramos de atuação
async function loadRamos() {
    try {
        const response = await fetch('http://localhost:3000/ramos');
        if (!response.ok) throw new Error("Erro ao carregar ramos.");

        const ramos = await response.json();
        const selectRamo = document.getElementById('selectRamo');

        ramos.forEach(ramo => {
            const option = document.createElement('option');
            option.value = ramo.id;
            option.textContent = ramo.ramo;
            selectRamo.appendChild(option);
        });
    } catch (error) {
        console.error("Erro ao carregar ramos:", error);
    }
}

// Carregar as cidades dos negócios cadastrados
async function loadCidades() {
    try {
        const response = await fetch('http://localhost:3000/cidades');
        if (!response.ok) throw new Error("Erro ao carregar cidades.");

        const cidades = await response.json();
        const selectCidade = document.getElementById('selectCidade');

        cidades.forEach(cidade => {
            const option = document.createElement('option');
            option.value = cidade;
            option.textContent = cidade;
            selectCidade.appendChild(option);
        });
    } catch (error) {
        console.error("Erro ao carregar cidades:", error);
    }
}

async function searchBusiness() {
    const searchQuery = document.getElementById('searchQuery').value;
    const ramo = document.getElementById('selectRamo').value;
    const cidade = document.getElementById('selectCidade').value;

    try {
        const response = await fetch('http://localhost:3000/negocios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ searchQuery, ramo, cidade }),
        });

        if (!response.ok) throw new Error("Erro ao buscar negócios.");

        const businesses = await response.json();
        displayResults(businesses);
    } catch (error) {
        console.error("Erro ao buscar negócios:", error);
    }
}

function displayResults(businesses) {
    const resultsSection = document.getElementById('results');
    resultsSection.innerHTML = ''; // Limpa os resultados anteriores

    if (businesses.length === 0) {
        resultsSection.textContent = "Nenhum negócio encontrado.";
        return;
    }

    businesses.forEach(business => {
        const item = document.createElement('div');
        item.classList.add('business-item');

        // Define o avatar ou uma imagem padrão
        const avatarSrc = business.avatar ? business.avatar : 'default.jpg';

        // Verifica se a rede social tem o prefixo necessário para redirecionamento
        const socialLink = business.redeSocial ? `${business.redeSocial}` : "#";

        item.innerHTML = `
            <img src="${avatarSrc}" alt="${business.nome}">
            <h3>${business.nome}</h3>
            <p><strong>Cidade:</strong> ${business.cidade}</p>
            <p><strong>Ramo de Atuação:</strong> ${business.ramo}</p>
            <p><strong>E-mail Comercial:</strong> 
                <a href="mailto:${business.emailComercial}" style="color: #FF1493;">
                    ${business.emailComercial || "Não informado"}
                </a>
            </p>
            <p><strong>Celular:</strong> 
                <a href="tel:${business.celular}" style="color: #FF1493;">
                    ${business.celular || "Não informado"}
                </a>
            </p>
            <p><strong>Rede Social:</strong> 
                <a href="${socialLink}" target="_blank" style="color: #FF1493;">
                    ${business.redeSocial || "Não informado"}
                </a>
            </p>
            <a href="${business.site}" target="_blank" style="color: #FF1493;"><strong>Visitar site</strong></a>
        `;

        resultsSection.appendChild(item);
    });
}



// Carregar todos os negócios
async function loadAllBusinesses() {
    try {
        const response = await fetch('http://localhost:3000/negocios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ searchQuery: '', ramo: '', cidade: '' }),
        });

        if (!response.ok) throw new Error("Erro ao carregar negócios.");

        const businesses = await response.json();
        displayResults(businesses);
    } catch (error) {
        console.error("Erro ao carregar negócios:", error);
    }
}