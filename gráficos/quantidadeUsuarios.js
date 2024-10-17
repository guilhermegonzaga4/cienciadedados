import { getCSS, tickConfig } from "./common.js"
async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/romulopena/ciencia-de-dados/refs/heads/main/basededados/educacao-etapas-de-ensino.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasInstituicoes = Object.keys(dados)
    const quantidadeAlunos = Object.values(dados)
    
    const data = [
        {
            x: nomeDasInstituicoes,
            y: quantidadeAlunos,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }

        }
    ]
    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Instituições com mais alunos no mundo',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }

        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Tipos de Instituições',
                size: 20,
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'bilhões de alunos ativos',
                size:20,
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)

}
quantidadeUsuarios();