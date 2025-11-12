<template>
  <div class="app-container">
    <header class="header text-center">
      <h1 class="title">🧰 Web Utility Tools</h1>
      <p class="subtitle">Free online tools for developers and content creators</p>
    </header>

    <nav class="nav-bar d-flex justify-content-center mb-4 flex-wrap gap-2">
      <router-link to="/json-formatter" class="nav-link" active-class="active-link"
        >JSON Formatter</router-link
      >
      <router-link to="/text-cleaner" class="nav-link" active-class="active-link"
        >Text Cleaner</router-link
      >
    </nav>

    <main class="container">
      <router-view />
    </main>

    <footer class="footer text-center mt-5 mb-3">
      <small>© 2025 My Web Tools. All rights reserved.</small>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
  font-family: 'Segoe UI', sans-serif;
}

.header {
  margin-bottom: 1.5rem;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.subtitle {
  color: #555;
  font-size: 0.95rem;
}

.nav-bar .nav-link {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  border: 2px solid #0d6efd;
  border-radius: 8px;
  color: #0d6efd;
  text-decoration: none;
  transition: all 0.3s ease;
}

.nav-bar .nav-link:hover {
  background-color: #0d6efd;
  color: #fff;
}

.active-link {
  background-color: #0d6efd;
  color: #fff;
}

.footer {
  color: #888;
  font-size: 0.8rem;
}

@media (max-width: 576px) {
  .title {
    font-size: 1.5rem;
  }

  .nav-bar {
    flex-direction: column;
  }

  .nav-bar .nav-link {
    width: 100%;
    text-align: center;
  }
}

.nav-bar .nav-link {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  border: 2px solid #0d6efd;
  border-radius: 8px;
  color: #0d6efd;
  text-decoration: none;
  transition: all 0.3s ease;
}

.nav-bar .nav-link:hover {
  background-color: #0d6efd;
  color: #fff;
}

.nav-bar .nav-link.active-link {
  background-color: #0d6efd;
  color: #fff !important; /* fix for selected text */
  border-color: #0d6efd;
}
</style>
