<template>
  <div class="tool-card">
    <h2>JSON Formatter & Validator</h2>
    <p class="tool-desc">Paste your JSON below and format/validate instantly.</p>

    <textarea v-model="input" class="tool-input" placeholder="Paste JSON here..." rows="10"></textarea>

    <div class="button-group">
      <button class="btn-primary" @click="formatJson">Format</button>
      <button class="btn-secondary" @click="clearText">Clear</button>
    </div>

    <pre v-if="output" class="tool-output">{{ output }}</pre>
    <div v-if="error" class="error-msg">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
const output = ref('')
const error = ref('')

const formatJson = () => {
  try {
    output.value = JSON.stringify(JSON.parse(input.value), null, 2)
    error.value = ''
  } catch {
    output.value = ''
    error.value = '❌ Invalid JSON. Please check your input.'
  }
}

const clearText = () => {
  input.value = ''
  output.value = ''
  error.value = ''
}
</script>

<style scoped>
.tool-card {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 0.3rem;
}

.tool-desc {
  color: #555;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.tool-input {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0.8rem;
  font-family: monospace;
  font-size: 0.95rem;
  resize: vertical;
}

.button-group {
  margin-top: 0.8rem;
}

.btn-primary, .btn-secondary {
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #0d6efd;
  color: #fff;
}

.btn-primary:hover {
  background-color: #0b5ed7;
}

.btn-secondary {
  background-color: #6c757d;
  color: #fff;
}

.btn-secondary:hover {
  background-color: #5c636a;
}

.tool-output {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.error-msg {
  color: #dc3545;
  margin-top: 0.5rem;
  font-weight: 500;
}

@media (max-width: 576px) {
  .tool-card {
    padding: 1rem;
  }
}
</style>
