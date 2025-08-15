/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE: string;
  readonly VITE_EMAILJS_TEMPLATE: string;
  readonly VITE_EMAILJS_PUBLIC: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
