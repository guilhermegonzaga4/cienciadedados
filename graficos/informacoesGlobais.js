const url =  '/https://raw.githubusercontent.com/guilhermegonzaga4/cienciadedados/refs/heads/main/base-de-dados/esportes-dados-globais.json'

async function visualizarInformacoesGlobais(){
    const res = await fetch (url)
    const dados = await res.json()
    const pessoasPraticandoEsporte = (dados.total_pessoas_que_praticam_esportes_regularmente / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio_semana_praticando_esportes)
    const minutos = Math.round((dados.tempo_medio_semana_praticando_esportes - horas) * 100)
    const porcentagemPraticandoEsportes = ((pessoasPraticandoEsportes / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasPraticandoEsporte} bilhões</span> estão praticando esportes em alguma ocupação e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> Praticando esportes.<br>Porém, ainda existe aproximadamente <span>${porcentagemPraticandoEsportes}%</span> de pessoas praticando esportes .`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

visualizarInformacoesGlobais()
