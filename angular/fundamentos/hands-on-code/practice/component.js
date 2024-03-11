// Define a classe do Web Component
class BlogPostCard extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Cria os elementos dentro da sombra do componente
      const cardContainer = document.createElement('div');
      cardContainer.classList.add('blog-card');
  
      const image = document.createElement('img');
      image.src = this.getAttribute('image');
  
      const title = document.createElement('h3');
      title.textContent = this.getAttribute('title');
  
      const summary = document.createElement('p');
      summary.textContent = this.getAttribute('summary');
  
      // Adiciona os elementos ao container do card
      cardContainer.appendChild(image);
      cardContainer.appendChild(title);
      cardContainer.appendChild(summary);
  
      // Adiciona os estilos ao componente
      const style = document.createElement('style');
      style.textContent = `
        .blog-card {
          border-color: ${this.getAttribute('border-color')};
        }
      `;
  
      // Adiciona os elementos ao shadow DOM
      shadow.appendChild(style);
      shadow.appendChild(cardContainer);
    }
  }
  
  // Define o elemento customizado
  customElements.define('blog-post-card', BlogPostCard);
  