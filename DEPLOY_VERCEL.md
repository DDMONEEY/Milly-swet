# Hospedar a Milly Sweets no Vercel

O projeto está configurado para publicação **estática** no Vercel. Não usa servidor, banco de dados, variáveis de ambiente nem checkout.

## Importar pelo painel do Vercel

1. Tenha este projeto em um repositório Git seu ou baixe e extraia o pacote ZIP do projeto.
2. No painel da Vercel, escolha **Add New → Project** e importe o repositório, ou envie o projeto pelo fluxo CLI compatível com o seu setup.
3. Se a Vercel solicitar o framework, escolha **Vite**. Deixe o diretório raiz como a raiz deste projeto, onde estão `package.json` e `vercel.json`.
4. A configuração versionada `vercel.json` define:
   - Instalação: `pnpm install --frozen-lockfile`
   - Build: `pnpm build:static && rm -rf dist/public/__manus__` (build Vite e remoção de um script de depuração exclusivo do Manus)
   - Pasta de saída: `dist/public`
   - Rewrite SPA: requisições da aplicação vão para `/index.html`.
5. Inicie a publicação e valide a URL atribuída pela Vercel.

## Publicar pelo ZIP usando a CLI

Se recebeu o ZIP em vez de um repositório Git, extraia-o, abra um terminal na pasta do projeto e use sua própria sessão da Vercel:

```bash
npm install --global vercel
vercel login
pnpm install --frozen-lockfile
vercel --prod
```

Na primeira execução, a CLI pode pedir para criar ou vincular um projeto e confirmar as configurações. Use a raiz deste projeto. O `vercel.json` fornece os comandos e as rotas de build. Essas etapas de login/publicação são realizadas por você na sua máquina e na sua conta.

O projeto fixa `pnpm@10.18.0` em `package.json` e inclui `pnpm-lock.yaml`. A instalação/build também pode ser validada localmente com `pnpm install --frozen-lockfile`, `pnpm check` e `pnpm build:static`.

## Conteúdo já preparado

As cinco artes ilustrativas estão em `client/public/images/` e são copiadas pelo build para `dist/public/images/`. Assim, a página não depende mais do armazenamento do Manus para as imagens e o ícone. `client/public/manus-routes.json` também é incluído na saída. Os links de encomenda levam ao Instagram e ao WhatsApp; não há carrinho ou checkout.

## Depois que a Vercel fornecer o domínio

O HTML mantém título e descrição social. Não define `og:image` nem `twitter:image` com o domínio temporário do Preview. Se quiser cartões com imagem em redes sociais, configure os dois metadados em `client/index.html` com o domínio definitivo e `/images/hero.webp`, então gere novo build e deploy.

**Nenhuma conexão à conta Vercel nem publicação foi feita por este ajuste.** O site foi preparado para que você faça o deploy na sua conta.
