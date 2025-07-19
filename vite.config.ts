@@ .. @@
 // https://vitejs.dev/config/
 export default defineConfig({
+  root: '.',
   plugins: [react()],
   optimizeDeps: {
     exclude: ['lucide-react'],
   },
 });