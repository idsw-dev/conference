/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_POSTHOG_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
