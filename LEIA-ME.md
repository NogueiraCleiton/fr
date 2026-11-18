# Site FR Elétrica & Automação — v6 (16/11/2026)

## Estrutura de pastas (raiz do repositório)

```
/
├── index.html                  ← página principal
├── obrigado.html               ← página após envio do formulário (noindex, usa style.css)
├── 404.html                    ← página de erro (noindex, caminhos absolutos /assets/...)
├── favicon.ico                 ← TEM que ficar na raiz
├── site.webmanifest            ← ícones para Android/Chrome
├── robots.txt
├── sitemap.xml
├── CNAME                       ← frautomacao.com.br
├── .nojekyll                   ← arquivo vazio: GitHub Pages publica os arquivos sem processar (Jekyll)
└── assets/
    ├── css/style.css
    ├── js/main.js
    ├── icons/
    │   ├── favicon-16.png        16×16
    │   ├── favicon-32.png        32×32
    │   ├── apple-touch-icon.png  180×180 (iPhone)
    │   ├── icon-192.png          192×192 (Android)
    │   └── icon-512.png          512×512 (Android / logo no Google)
    └── img/
        ├── logo-fr-eletrica-automacao.png       topo (versão p/ fundo escuro)
        ├── og-fr-eletrica.jpg                   1200×630, prévia no WhatsApp/Facebook
        ├── quadro-banco-capacitores-gravatai.jpg  foto da abertura
        ├── manutencao-eletrica-industrial.jpg   cartão Manutenção e diagnóstico
        ├── montagem-quadros-eletricos.jpg       cartão Quadros e painéis
        ├── inspecao-termografica-quadros.jpg    cartão Inspeção e confiabilidade
        ├── painel-maquina-industrial.jpg        cartão Máquinas industriais
        └── cleiton-nogueira-tecnico-automacao.jpg  seção Quem está à frente
```

Os caminhos no `index.html` e no `obrigado.html` são **relativos** (`assets/...`), então funcionam tanto em `frautomacao.com.br` quanto em `nogueiracleiton.github.io/fr/`. O `404.html` usa `/assets/...` porque o GitHub serve essa página em qualquer endereço.

**Trocar uma imagem:** mantenha o mesmo nome de arquivo (ou atualize o `src` no index.html, no `sitemap.xml` e, para a foto da abertura, no `<link rel="preload">` do `<head>`). Nomes em minúsculas, sem acento e com hífen ajudam o Google Imagens. Prefira JPG até ~200 KB; a foto da abertura pode ter até 1200 px de largura.

## Onde editar cada coisa

| O quê | Onde |
| --- | --- |
| Título e descrição no Google | `index.html` → `<title>` e `<meta name="description">` |
| Verificação do Search Console | `index.html` → descomente `google-site-verification` |
| Dados da empresa para o Google (telefone, cidades, serviços) | `index.html` → bloco `application/ld+json` |
| Link das avaliações | `index.html` → comentário "TROCAR o href" na seção Avaliações |
| CNPJ (jan/2027) | rodapé `<address class="nap">` e, se quiser, `"taxID"` no JSON-LD |
| Cores, fontes, espaçamentos | `assets/css/style.css` (variáveis em `:root`; tema escuro a partir de "Tema escuro (v3)") |
| Visual do obrigado.html e do 404.html | `assets/css/style.css` → bloco "Páginas simples" no final |
| Menu mobile, cartões de laudos, preenchimento do formulário | `assets/js/main.js` |

## SEO local — o que já está no código
- Título com o serviço + cidade: "Manutenção Elétrica Industrial em Gravataí/RS".
- Descrição com 159 caracteres (não é cortada no Google).
- H1 com "Região Metropolitana de Porto Alegre"; cidades atendidas escritas no texto do contato.
- Dados estruturados `Electrician` + `LocalBusiness` com cidade, coordenadas de Gravataí, área atendida (9 cidades + RS), telefone, e-mail, catálogo de serviços e fundador (`Person`).
- Endereço/telefone/e-mail (NAP) no rodapé em `<address>`, **iguais ao Perfil da Empresa no Google** — mantenha idênticos em todo lugar.
- Meta geo (BR-RS, Gravataí), `hreflang pt-BR`, canonical, Open Graph com texto alternativo da imagem.
- Imagens com nomes descritivos, texto alternativo com o serviço e a cidade, `width`/`height` e carregamento preguiçoso (exceto abertura e foto do fundador).
- Foto da abertura pré-carregada e fontes com `display=swap` (melhor nota no Core Web Vitals).
- Sitemap com as imagens.

## SEO local — o que depende de você (maior impacto)
1. **Perfil da Empresa no Google (Google Meu Negócio):** colocar `https://frautomacao.com.br` no campo site, categoria principal "Eletricista" ou "Serviço de manutenção industrial", serviços listados iguais ao site, área de atendimento com as mesmas cidades, fotos de serviços toda semana.
2. Pedir avaliação a cada cliente atendido, citando o serviço e a cidade ("manutenção do quadro em Gravataí").
3. Search Console: verificar o domínio, enviar `https://frautomacao.com.br/sitemap.xml` e usar "Inspeção de URL › Solicitar indexação".
4. Testar os dados estruturados em https://search.google.com/test/rich-results
5. Mesmo nome, telefone e site no Instagram, LinkedIn e em cadastros (Apontador, guias industriais da região).
6. Depois do lançamento: páginas próprias por serviço (ex.: `/laudo-nr13-gravatai.html`) aumentam muito as chances de aparecer em buscas específicas.

## Publicação (GitHub Pages + Registro.br)
1. Substitua todo o conteúdo do repositório `nogueiracleiton/fr` pelo conteúdo desta pasta (pode apagar a pasta antiga `img/`).
2. Settings › Pages: branch `main`, pasta `/ (root)`. Custom domain: `frautomacao.com.br` → Enforce HTTPS.
3. Registro.br › DNS: registros A `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` e CNAME `www` → `nogueiracleiton.github.io`.
4. Formulário: no primeiro envio de teste, confirme o e-mail "Activate Form" do FormSubmit em frautomacaors@gmail.com.
