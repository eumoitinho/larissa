# 🎉 Birthday Animation - Next.js

Uma animação interativa de aniversário criada com Next.js, TypeScript e GSAP.

## 🚀 Características

- ✨ Animações suaves com GSAP
- 📱 Design responsivo
- 🎨 Interface moderna e interativa
- 🔄 Botão de replay para repetir a animação
- 🖼️ Imagens otimizadas com Next.js Image

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **GSAP** - Biblioteca de animação
- **CSS3** - Estilos e responsividade
- **Google Fonts** - Tipografia (Work Sans)

## 📦 Instalação

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o projeto em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 🎯 Como Usar

1. A animação inicia automaticamente quando a página carrega
2. Aguarde a sequência completa de animações
3. Clique em "Or click, if you want to watch it again." para repetir

## 📱 Responsividade

O projeto é totalmente responsivo e funciona em:
- 💻 Desktop
- 📱 Mobile
- 📟 Tablet

## 🎨 Personalização

Para personalizar o conteúdo, edite o objeto `customizeData` no arquivo `src/app/page.tsx`:

```typescript
const customizeData = {
  greeting: "Hey",
  name: "Lydia",
  greetingText: "I really like your name btw!",
  // ... outros campos
};
```

## 🚀 Deploy

Para fazer o deploy do projeto:

```bash
npm run build
npm start
```

## 📄 Licença

Este projeto está sob a licença MIT.
