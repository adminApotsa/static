import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Add this "allowedHosts" section
    allowedHosts: [
      // Copy the specific address from your error message
      '7de7453ca738.ngrok-free.app',
      // OR better yet, allow all ngrok-free.app subdomains
      '.ngrok-free.app' 
    ]
  }
})
