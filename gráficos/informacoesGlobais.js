const url = 'https://raw.githubusercontent.com/romulopena/ciencia-de-dados/refs/heads/main/basededados/educacao-dados-globais.json'

async function visualizarInformacoesGlobais(){
    const res = await fetch (url)
    const dados = await res.json()
    const pessoasComAcesso = (dados.total_pessoas_com_acesso_a_educacao / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio_dia_estudando)
    const pessoasEstudando = ((pessoasComAcesso / pessoasNoMundo) * 100).toFixed(2)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectadas.`
    
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

visualizarInformacoesGlobais();
