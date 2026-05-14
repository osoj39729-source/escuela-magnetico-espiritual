import os
import re

def fix_structural_service():
    maps_dir = r'F:\trincado\src\data\maps'
    service_path = r'F:\trincado\src\services\structuralService.ts'
    
    # 1. Leer qué variables exportan realmente los archivos
    real_exports = {}
    for root, dirs, files in os.walk(maps_dir):
        if 'structure.ts' in files:
            folder_name = os.path.basename(root)
            with open(os.path.join(root, 'structure.ts'), 'r', encoding='utf-8') as f:
                content = f.read()
                # Buscar export const ALGO = 
                match = re.search(r'export\s+const\s+([A-Z0-9_]+)\s*=', content)
                if match:
                    real_exports[folder_name] = match.group(1)

    print(f"Exportaciones reales encontradas: {len(real_exports)}")
    
    # 2. Reemplazar en structuralService.ts
    with open(service_path, 'r', encoding='utf-8') as f:
        service_content = f.read()
        
    for folder, real_export in real_exports.items():
        # Buscar cómo se importaba antes
        # import { X } from '../data/maps/folder/structure'
        import_pattern = rf'import\s+{{\s*([A-Z0-9_]+)\s*}}\s+from\s+[\'"]\.\./data/maps/{folder}/structure[\'"]'
        match = re.search(import_pattern, service_content)
        if match:
            old_export = match.group(1)
            if old_export != real_export:
                print(f"Corrigiendo {folder}: {old_export} -> {real_export}")
                # Reemplazar la importación
                service_content = service_content.replace(
                    f'import {{ {old_export} }} from \'../data/maps/{folder}/structure\'',
                    f'import {{ {real_export} }} from \'../data/maps/{folder}/structure\''
                )
                service_content = service_content.replace(
                    f'import {{ {old_export} }} from "../data/maps/{folder}/structure"',
                    f'import {{ {real_export} }} from "../data/maps/{folder}/structure"'
                )
                # Reemplazar su uso en STRUCTURAL_MAPS
                service_content = re.sub(rf'\b{old_export}\b', real_export, service_content)
                
    with open(service_path, 'w', encoding='utf-8') as f:
        f.write(service_content)
        
    print("Sutura estructural completada.")

if __name__ == '__main__':
    fix_structural_service()
