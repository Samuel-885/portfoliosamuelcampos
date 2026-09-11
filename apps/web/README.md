# Portfólio — Samuel Campos

Landing page com Next.js 16, React 19, TypeScript, Tailwind CSS 4 e react-icons. Tema escuro, conteúdo em português e inglês, sem backend ou banco de dados.

## Executar

Na raiz do monorepo:

```sh
pnpm install
pnpm --filter web dev
```

Ou execute `pnpm dev` dentro de `apps/web`. Abra http://localhost:3000.

```sh
pnpm --filter web typecheck
pnpm --filter web lint
pnpm --filter web build
pnpm --filter web start
```

## Personalizar

Edite `data/portfolio.ts`:

- `githubUrl` e `linkedinUrl`: URLs reais dos perfis.
- `cvUrl`: caminho do PDF, por exemplo `/samuel-campos-cv.pdf`.
- `photoUrl`: foto real em `/foto.webp`, exibida com `next/image` e `object-fit: cover`.
- `projects[].githubUrl`: URL opcional do repositório de cada projeto; o botão só aparece quando preenchida.
- `projects[].storeUrl` e `projects[].liveUrl`: links reais da Chrome Web Store e dos projetos online, já configurados.
- `projects[].image`: screenshot principal de cada projeto.
- `projects[].images`: imagens adicionais; no DenTools, alimentam a navegação por screenshots com botões anterior/próximo, sem biblioteca de carrossel. A imagem principal é exibida primeiro, sem duplicatas. A segunda imagem do Caça-Palavras fica disponível no array.
- `translations`: todos os textos em PT/EN.

Os caminhos configurados são relativos a `public/`: `foto.webp`, `samuel-campos-cv.pdf`, `projects/dentools/dentools-01.png` até `dentools-06.png`, `projects/fonoapp/fonoapp.png`, `projects/lista-compras/lista-compras.png` e `projects/caca-palavras/caca-palavras-01.png` e `caca-palavras-02.png`. Mantenha os nomes exatos, sem extensões duplicadas. Screenshots usam `next/image` com `object-fit: contain` para preservar todo o conteúdo.

Beauty SaaS é apresentado como escopo em desenvolvimento, com stack e recursos planejados. Ainda não possui frontend/interface; seu card nunca exibe screenshot, placeholder de screenshot ou botão de demo, mesmo se imagens forem configuradas. DenTools tem destaque secundário, versão, autoria, sete ferramentas e link para a Chrome Web Store. Os outros três projetos têm cards menores e links para suas aplicações online. Não foram presumidas stacks para Lista de Compras e Caça-Palavras.

Sem imagens configuradas, os quatro projetos com interface mantêm espaços reservados para screenshots reais. Links de projeto não preenchidos são omitidos. Foto, CV e perfis pessoais continuam configurados no topo do arquivo; os controles de perfis/CV permanecem desabilitados enquanto estiverem vazios.

A numeração dos projetos é gerada a partir da posição no array. Para alterar a ordem, basta reordenar `projects`. A contagem de ferramentas do DenTools é derivada de sua lista de recursos.

O idioma inicial é português. A troca acontece na página, sem rotas extras ou biblioteca de internacionalização; atualiza também o atributo `lang` e o título do documento. O HTML inicial e os metadados para buscadores são em português.

## Deploy

Use Node.js 20.9 ou superior compatível com Next.js e pnpm 9.15.9. O build usa `next/font` para hospedar Geist; o ambiente precisa de acesso ao Google Fonts durante o build.

Na Vercel, importe o monorepo e selecione `apps/web` como Root Directory, com o preset Next.js. Habilite o acesso a arquivos fora do Root Directory para resolver o workspace e o lockfile da raiz. Build: `pnpm build`. Nenhuma variável de ambiente é necessária.

Em hospedagem Node.js, instale as dependências na raiz, execute `pnpm --filter web build` e inicie com `pnpm --filter web start`. A plataforma deve fornecer HTTPS e a porta adequada (`PORT`).

## Estrutura

- `app/`: página, layout, metadata, ícone e estilos responsivos.
- `components/`: seções e componentes compartilhados.
- `data/portfolio.ts`: configuração, projetos, tipos e traduções.

As animações usam CSS e respeitam `prefers-reduced-motion`. O menu suporta teclado, Escape e fechamento ao selecionar uma âncora.
