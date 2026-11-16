import { writeFileSync, existsSync } from 'node:fs';

const target = 'src/app/primeui-license.ts';
const key = process.env.PRIMEUI_LICENSE;

// Ne pas écraser un fichier local existant si aucune variable n'est fournie
if (key || !existsSync(target)) {
  writeFileSync(
    target,
    `export const PRIMEUI_LICENSE: string | undefined = ${key ? JSON.stringify(key) : 'undefined'};\n`,
  );
}
