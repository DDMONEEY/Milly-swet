# Plano — Milly Sweets

## Escopo e premissas revisadas

Criar um site público, responsivo e bilíngue para a Milly Sweets, usando apenas informações públicas verificáveis do perfil e facilitando pedidos pelo Instagram ou WhatsApp. A escolha expressa do usuário é **catálogo com pedidos por Instagram/WhatsApp, sem checkout online**; portanto, não haverá carrinho, pagamento no site, Shopify nem coleta de dados por formulário.

A busca pública do perfil informa o nome Milly Sweets, Worcester (Massachusetts), doces brasileiros, sobremesas, bolo no pote e o telefone (774) 608-1016. A página direta do Instagram pede login; fotos, lista detalhada de produtos, preços, horários, raio/condições de entrega, endereço físico e termos comerciais não puderam ser verificados. Não atribuir à confeitaria produtos específicos, preços ou regras não confirmados. Tratar imagens geradas como **ilustrativas**, não como fotografias autênticas do catálogo. Usar o telefone exibido para compor o link wa.me e o perfil público para abrir o Instagram; disponibilidade do canal WhatsApp deve ser confirmada pela própria loja.

## Implementação

Usar o starter existente em React/Vite, com build estático e sem habilitar servidor, banco de dados ou integrações de comércio. A rota `/` conterá uma landing page de marca com navegação, hero, categorias do catálogo, apresentação concisa, instruções para encomendar, perguntas frequentes, informações comerciais transparentes e rodapé com contato e notas sobre políticas. Botões externos abrem conversa do WhatsApp (mensagem inicial pré-preenchida) ou o Instagram. A experiência não simula funcionalidades de carrinho nem inventa preços.

O inglês será o idioma inicial por se tratar de um comércio em Worcester, Massachusetts, e haverá alternância para português do Brasil. Toda a microcopy e os textos de ambas as línguas ficam em arquivo local para revisão. Categorias: Brazilian treats/doces brasileiros, desserts/sobremesas e cake in a cup/bolo no pote, conforme descrição pública. Cada categoria convida a consultar os sabores e a disponibilidade atuais diretamente com a loja.

Políticas comerciais: expor claramente que preço, disponibilidade, retirada/entrega e detalhes de encomenda são confirmados ao conversar com a loja. Incluir privacidade e termos em texto simples que descreve o funcionamento efetivo do site: sem checkout nem formulário, com encaminhamento a canais externos. Não declarar regras de entrega, troca, reembolso ou privacidade da empresa que não foram fornecidas.

## Estrutura do projeto

- `client/index.html`: título, descrição, metadados sociais sem URLs canônicas inventadas e conteúdo inicial legível por buscadores.
- `client/src/pages/Home.tsx`: landing page, conteúdo bilíngue, categorias e links de encomenda.
- `client/src/index.css`: estilos, identidade editorial, acessibilidade visual e breakpoints.
- `client/src/components/`: componentes existentes reutilizados quando fizerem sentido; evitar dependências novas.
- `client/public/images/`: imagens editoriais ilustrativas para o hero, categorias e ícone, incluídas no projeto para funcionarem no Vercel sem armazenamento remoto.
- `client/public/manus-routes.json`: manifesto da única rota pública, `/`.
- `vercel.json`: comandos de instalação e build, saída `dist/public`, limpeza do script de depuração Manus e rewrite SPA para `/index.html`.
- `DEPLOY_VERCEL.md`: instruções para importar o projeto e publicar na conta da usuária.
- `app.config.ts`: metadado do projeto Manus, ignorado pelo build estático do Vercel.
- `plan.md` e `TODO.md`: decisões, premissas e resultados acompanhados.

## Direção de design aprovada — Confeitaria Editorial

**Movimento:** editorial de confeitaria, inspirado em revistas gastronômicas e fotografia de natureza-morta, com artesanato percebido por composição e textura — sem estética infantil.

**Princípios centrais:** fotografia generosa; informação comercial simples e honesta; contraste acolhedor; espaço para o produto e para o texto respirarem.

**Filosofia de cor:** cacau escuro `#5A2A27` como assinatura de confiança e sabor; rosa queimado `#D98F9D` como acento afetuoso; creme morno e pêssego claro como base luminosa; marrom profundo para texto legível.

**Paradigma de layout:** cabeçalho editorial enxuto, hero assimétrico com título tipográfico e imagem ampla, categorias em cartões horizontais de ritmo alternado, seguida de blocos curtos que conduzem às encomendas; grade concentrada apenas onde melhora a comparação das categorias.

**Elementos de assinatura:** selinho inspirado em confeitaria com flor/roseta minimalista; molduras finas e margens largas de revista; pequenos detalhes curvos de glacê como divisores, sem poluir a navegação.

**Interação:** navegação curta e clara; alternância EN/PT acessível; links de encomenda destacados sem formularios ou etapas falsas; botões e links com estados de foco e toque visíveis.

**Animação:** entrada suave e breve dos blocos, leve transição em links e cartões e respeito a `prefers-reduced-motion`; evitar movimento que atrapalhe leitura ou uso móvel.

**Tipografia:** Fraunces em títulos editoriais; DM Sans em navegação, corpo, botões e interface. Títulos fluidos, texto corrido confortável e botões com hierarquia clara.

**Essência da marca:** sobremesas brasileiras e bolo no pote em Worcester, apresentados com calor e uma conexão com sabores brasileiros. Personalidade: acolhedora, doce e expressiva.

**Voz:** convidativa e direta, sem promessas sobre disponibilidade ou prazos. Exemplos: “A little taste of Brazil, made with love.” / “Um pedacinho do Brasil, feito com carinho.” e “Tell us what you’re craving.” / “Conte pra gente o que deu vontade.”

**Wordmark e símbolo:** nome “Milly Sweets” em composição tipográfica Fraunces; ao lado, símbolo original simples de confeitaria (roseta/cupcake abstrato), criado sem texto gerado. Não imitar uma marca ou logo que não foi fornecido.

**Cor de marca:** cacau `#5A2A27`.

## Estrutura de publicação

Manter o site estático para o Preview e a hospedagem externa. A configuração versionada do Vercel usa `pnpm install --frozen-lockfile`, `pnpm build:static`, remove o diretório de depuração Manus do output e publica `dist/public`, com rewrite SPA para `/index.html`. Não é necessário habilitar servidor, banco de dados, variáveis de ambiente nem integração Vercel para esse catálogo. As imagens ilustrativas são arquivos locais do projeto. Registrar a rota `/` antes de iniciar o servidor. Validar tipagem, build, manifesto e assets locais. A publicação externa não foi solicitada: a usuária fará o deploy na própria conta.

Documentação oficial consultada em 13/10/2026: a orientação de Vite da Vercel recomenda um rewrite para `/index.html` para suportar deep links em SPAs; a referência `vercel.json` confirma `installCommand`, `buildCommand`, `outputDirectory` e `rewrites` como propriedades de configuração. Fontes: [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite), [Static Configuration with vercel.json](https://vercel.com/docs/project-configuration/vercel-json) e [Project Configuration](https://vercel.com/docs/project-configuration).

Não foi conectado nem publicado um projeto na conta Vercel; o conector dessa plataforma estava desativado. As instruções para o deploy manual estão em `DEPLOY_VERCEL.md`.
