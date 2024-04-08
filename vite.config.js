import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import axios from 'axios'
import { Routes,Route } from 'react-router-dom'
import 'bootstrap';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
