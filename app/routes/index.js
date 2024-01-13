import { Router } from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readdirSync } from "fs";

const router = Router();

// Usa import.meta.url para obtener la URL del módulo actual
const currentModuleUrl = new URL(import.meta.url);
// Convierte la URL en una ruta de archivo
const currentModulePath = fileURLToPath(currentModuleUrl);
// Obtiene el directorio del módulo actual
const pathRouter = dirname(currentModulePath);

const removeExtension = (fileName) => {
    return fileName.split('.').shift();
};

for (const file of readdirSync(pathRouter)) {
    const skip = ['index.js'].includes(file);

    if (!skip) {
        try {
            const routeModule = await import(`./${file}`);
            const fileWithoutExt = removeExtension(file);
            router.use(`/${fileWithoutExt}`, routeModule.default);
            console.log('CARGA RUTA ---->', fileWithoutExt);
        } catch (error) {
            console.error(`Error loading route ${file}:`, error);
        }
    }
}

router.get('*', (req, res) => {
    res.status(404).send({
        error: 'Not found'
    });
});

export default router;
