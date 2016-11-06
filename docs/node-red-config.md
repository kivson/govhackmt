A aplicação Node-RED foi utilizada como ferramenta de integração entre a API do Facebook e a Watson.

# Configurando Node-RED
Utilizando o Node RED foram implementados EndPoints de API que por sua vez foram configurados na pagina do facebook
para permititr que a aplicação possa receber cada mensagem enviada para a pagina no facebook.

As mensagens, recebidas no formato do Facebook, são então processadas e convertidas para um formato entendível pela
api de conversação do Watson. 

O Watson responde com um json contendo a mensagem de resposta, bem como outros meta dados da classificação da pergunta.
A partir disso uma mensagem de resposta é formatada e enviada para o usuário pela api do Facebook, e os dados e metadados
da pergunta e da resposta do Watson são armazenados em um banco para posterior analise.

O arquivo node_red.json contém a configuracão do Node-RED.
