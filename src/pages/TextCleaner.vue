<template>
  <div class="tool-card">
    <h2>Text Cleaner</h2>
    <p class="tool-desc">Remove comments, extra spaces, and unwanted characters from your text.</p>

    <textarea v-model="text" class="tool-input" placeholder="Paste your text here..." rows="10"></textarea>

    <div class="button-group">
      <button class="btn-primary" @click="cleanText">Clean Text</button>
      <button class="btn-secondary" @click="clearText">Clear</button>
    </div>

    <pre v-if="result" class="tool-output">{{ result }}</pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')
const result = ref('')

const cleanText = () => {
  result.value = text.value
    .replace(/\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

const clearText = () => {
  text.value = ''
  result.value = ''
}
</script>

<style scoped>
/* same styles as JsonFormatter.vue */
.tool-card {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
}

h2 { font-size: 1.5rem; margin-bottom: 0.3rem; }
.tool-desc { color: #555; font-size: 0.9rem; margin-bottom: 1rem; }

.tool-input {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0.8rem;
  font-family: monospace;
  font-size: 0.95rem;
  resize: vertical;
}

.button-group { margin-top: 0.8rem; }
.btn-primary, .btn-secondary {
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: all 0.3s ease;
}
.btn-primary { background-color: #0d6efd; color: #fff; }
.btn-primary:hover { background-color: #0b5ed7; }
.btn-secondary { background-color: #6c757d; color: #fff; }
.btn-secondary:hover { background-color: #5c636a; }

.tool-output {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
}

@media (max-width: 576px) {
  .tool-card { padding: 1rem; }
}
</style>
