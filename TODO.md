# Milly Sweets — acompanhamento

## Entregue no Preview

### Página editorial bilíngue
- [x] Criar a página responsiva da Milly Sweets em inglês e português do Brasil, com alternância de idioma, navegação, apresentação, categorias, instruções de pedido e rodapé.
- [x] Aplicar o estilo aprovado “Confeitaria Editorial”: cacau `#5A2A27`, rosa queimado `#D98F9D`, Fraunces nos títulos e apresentação editorial acolhedora.
- [x] Informar Worcester, Massachusetts, e restringir a descrição pública às categorias encontradas no perfil: doces brasileiros, sobremesas e bolo no pote.

### Catálogo sem checkout
- [x] Mostrar as categorias “Brazilian treats/doces brasileiros”, “desserts/sobremesas” e “cake in a cup/bolo no pote”.
- [x] Em cada categoria, orientar o cliente a perguntar sabores e disponibilidade diretamente à loja; não inventar nomes de produtos, preços, variantes ou estoque.
- [x] Identificar as imagens do site como ilustrativas, não como fotos do catálogo real.
- [x] Conforme a escolha do usuário, não incluir carrinho, checkout, pagamento online nem Shopify.

### Pedidos e contato
- [x] Ligar os botões de pedido ao WhatsApp, usando o telefone público exibido no perfil `(774) 608-1016`, com mensagem inicial de consulta.
- [x] Ligar os botões sociais ao perfil `@milly__sweets` no Instagram.
- [x] Explicar que preços, menu, disponibilidade, horários, retirada/entrega e demais detalhes devem ser confirmados com a loja antes de concluir o pedido.

### Informações e transparência
- [x] Incluir informações de privacidade e termos compatíveis com um site que não coleta pedidos ou pagamentos por formulário/checkout e encaminha conversas a serviços externos.
- [x] Incluir notas para a confirmação direta de detalhes de entrega/retirada e sobre alterações, cancelamentos e reembolsos, sem afirmar regras comerciais que não foram verificadas.
- [x] Não apresentar horário, endereço físico, fotos autênticas, sabores, preço, serviço/raio de entrega ou regras de troca como fatos quando não foram verificados.

### SEO e Preview
- [x] Incluir conteúdo comercial significativo no HTML inicial, metadados e manifesto da rota `/`.
- [x] Servir imagens e favicon do próprio projeto para não depender do armazenamento Manus ao hospedar externamente.
- [x] Registrar diagnóstico TypeScript, concluir `pnpm check` e `pnpm build:static` com sucesso e validar por HTTP a página e `/manus-routes.json`.
- [x] Manter o servidor de Preview ativo. Publicação externa não foi solicitada.

### Preparação para Vercel
- [x] Configurar `vercel.json` com instalação reproduzível via `pnpm install --frozen-lockfile`, build `pnpm build:static && rm -rf dist/public/__manus__`, diretório `dist/public` e rewrite SPA para `/index.html`.
- [x] Remover o endpoint de configuração de plataforma Manus do HTML/build público da aplicação.
- [x] Colocar as cinco imagens ilustrativas em `client/public/images/` para que sejam servidas pelo próprio deploy Vercel.
- [x] Documentar o fluxo de importação e deploy em `DEPLOY_VERCEL.md`.
- [ ] Executar o deploy e confirmar o domínio quando a usuária importar o projeto para uma conta/repositório Vercel. A conta do Vercel não foi conectada neste ajuste.

## A confirmar para substituir as categorias por um menu real

- [ ] Fornecer/confirmar lista de produtos, nomes, sabores, fotos oficiais, preços, opções/tamanhos e disponibilidade. O perfil direto exige login e os dados detalhados não apareceram na busca pública.
- [ ] Confirmar que `(774) 608-1016` aceita mensagens WhatsApp e que esse é o contato correto para pedidos.
- [ ] Fornecer as regras oficiais de horários, retirada/entrega, área atendida, formas de pagamento, alterações, cancelamentos, trocas, reembolsos e quaisquer termos próprios da loja.
- [ ] Se desejar, fornecer o domínio definitivo da Vercel para configurar `og:image` e `twitter:image` absolutos para cartões de compartilhamento social.
