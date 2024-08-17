interface ImportMetaEnv {
  readonly BASE_URL: string;
  // boshqa o'zgaruvchilarni ham shu yerda e'lon qilishingiz mumkin
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
