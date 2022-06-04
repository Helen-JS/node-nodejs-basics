import * as fs from 'fs';
import * as path from 'path';
import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const remove = async () => {
    let file = path.join(__dirname, 'files', 'fileToRemove.txt');
    let err = 'FS operation failed';
    fs.access(file, (error) => {
        if (error) {
            throw new Error(err);
        } else {
            fs.unlink(file, () => {
                console.log('File was successfully removed!');
            })
        }
    })
};

remove();
