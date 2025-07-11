document.addEventListener('DOMContentLoaded', () => {
  // Newsletter form
  const form = document.getElementById('newsletter-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const email = document.getElementById('newsletter-email').value;
      document.getElementById('newsletter-message').textContent = `Thank you, ${email}! You are now subscribed.`;
      form.reset();
    });
  }

  // Site search (placeholder functionality)
  const searchForm = document.getElementById('site-search');
  if (searchForm) {
    searchForm.addEventListener('submit', e => {
      e.preventDefault();
      const query = document.getElementById('search-input').value;
      alert(`Search for: ${query}`);
      searchForm.reset();
    });
  }

  // Directory (placeholder data loading)
  const dir = document.getElementById('directory-categories');
  if (dir) {
    const categories = ['Analytics', 'Chatbots', 'Image Generation'];
    categories.forEach(cat => {
      const div = document.createElement('div');
      div.className = 'directory-category';
      div.innerHTML = `<h2>${cat}</h2><ul><li>Tool A</li><li>Tool B</li></ul>`;
      dir.appendChild(div);
    });
  }

  // Marketplace chat
  const chatForm = document.getElementById('chat-form');
  if (chatForm) {
    chatForm.addEventListener('submit', e => {
      e.preventDefault();
      const input = document.getElementById('chat-input');
      const msg = document.createElement('div');
      msg.className = 'message';
      msg.textContent = input.value;
      document.getElementById('messages').appendChild(msg);
      input.value = '';
      document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
    });
  }

  // Blog posts (placeholder)
  const postsContainer = document.getElementById('posts');
  if (postsContainer) {
    const posts = [
      { title: 'Introducing Our AI Tools Hub', date: 'July 1, 2025', excerpt: 'Welcome to our new AI Tools website. Here’s what to expect...' },
      { title: 'Top 5 AI Analytics Tools', date: 'June 25, 2025', excerpt: 'An overview of the best analytics tools in the market...' }
    ];
    posts.forEach(post => {
      const art = document.createElement('article');
      art.innerHTML = `<h2>${post.title}</h2><small>${post.date}</small><p>${post.excerpt}</p><a href="#">Read more</a>`;
      postsContainer.appendChild(art);
    });
  }
});