function borrarestafuncion(obj, depth = 0, parentKey = '') {
    const indent = ' '.repeat(depth * 2); 
    if (Array.isArray(obj)) {
        obj.forEach((item, index) => {
            const newParentKey = `${parentKey}[${index}]`;  // Concatenar el índice actual
            console.log(`${indent}${newParentKey}:`);
            exploreObject(item, depth + 1, newParentKey); // Pasar el nuevo parentKey
        });
    } else if (typeof obj === 'object' && obj !== null) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                const newParentKey = parentKey ? `${parentKey}.${key}` : key;  // Concatenar con el padre
                console.log(`${indent}${newParentKey}:`);
                exploreObject(obj[key], depth + 1, newParentKey); // Pasar el nuevo parentKey
            }
        }
    } else {
        console.log(`${indent}${parentKey}: ${obj}`); // Mostrar el valor final
    }
}
