# Problema
O Governo do Estado possui muitos orgãos, tais como, a SEDUC, SES e SESP tanto na capital quanto no interior.
Cada orgão é responsável pelas informações que são disponibilizadas.
Infelizmente isso gera uma descentralização, o cidadão precisa entrar em contato com cada um dos orgãos para obter informações.
E nem sempre é fácil encontrar número de telefones, endereço e emails e às vezes quando encontram e ligam ou mandam mensagens, são respondidos apenas no horário de funcionamento do orgão ou acontece uma demora na entrega da informação para o cidadão. Criando um desgaste ou gerando uma má impressão dos serviços oferecidos pelo Governo do Estado.

# Solução
Um canal de comunicação rápido com o cidadão que esteja disponível 24 horas por dias e que sirva para solucionar dúvidas, realizar elogios e fazer reclamações.

# Proposta
Chat bot integrado com redes sociais e painel de controle administrativo para gerência das mensagens e um segundo nível de atendimento.

# MVP
Chat bot simples que fornece informações sobre locais e telefones de serviços publicos e coleta dados de ouvidoria.

# Exemplo de Perguntas
## Horário
- *"Qual horário de funcionamento do `[DETRAN|SEDUC|SESP]`?"*
- *"Quero horário de atendimento do `[DETRAN|SEDUC|SESP]`?"*
- *"Horário de funcionamento do `[DETRAN|SEDUC|SESP]`?"*
 
## Localização
- *"Qual o endereço do `[DETRAN|SEDUC|SESP]`?"*
- *"Quero a localização do `[DETRAN|SEDUC|SESP]`?"*
- *"Onde fica o `[DETRAN|SEDUC|SESP]`?"*
 
## Telefone
- *"Qual o telefone do `[DETRAN|SEDUC|SESP]`?"*
- *"Quero o número do `[DETRAN|SEDUC|SESP]`?"*
- *"Telefone do `[DETRAN|SEDUC|SESP]`?"*
 
## Multas
- *"Qual o valor da multa por dirigir bêbado?"*
- *"Qual o valor da multa por falar ao celular?"*
- *"Valor da Multa por estacionar em vaga reservada?"*

## Elogio
- *"Gostaria de fazer um elogio ao `[DETRAN|SEDUC|SESP]`"*
 
## Reclamação
- *"Gostaria de fazer uma reclamação ao `[DETRAN|SEDUC|SESP]`"*
 
## Exemplo Conversa

```chat
Cidadão - Olá
Governo - Olá! Em que posso ajudar?
Cidadão - Qual o telefone do detran
Governo - O telefone do DETRAN é (65) 3615-4694.
Cidadão - E o endereço do detran?
Governo - O endereço do DETRAN é Av. Doutor Hélio Ribeiro, 1000 - Centro Político Administrativo - CEP: 78048-910 - Cuiabá/MT
Governo - [MAPA]
Cidadão - Gostaria também de fazer um elogio
Governo - Que bom! Escreva ele aqui.
Cidadão - Achei muito boa a iniciativa do detran de enviar o documento do veículo por correio
Governo - Obrigado! Seu elogio será enviado ao setor responsável do DETRAN!
Cidadão - Obrigado pelas informações!
Governo - De nada, se precisar estamos aqui.
```

# Dificuldades encontradas
- Ferramentas novas para a equipe
- Integração entre serviços

# Tecnologias utilizadas
- Watson - API de bots.
- Facebook - API do Messenger
- MongoBD - Armazenamento dos dados
- Angular 2 - Painel administrativo
- node.js - Integração de serviços
- Bluemix - Infraestrutura de serviços

# Roadmap
- Melhorar a inteligencia artificial do bot para melhor categorização dos dados
- Refatorar painel de controle
- Agregar mais serviços e bases de dados
