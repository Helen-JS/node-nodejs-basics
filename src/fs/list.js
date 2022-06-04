import * as fs from 'fs';
import * as path from 'path';
import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
    let folder = path.join(__dirname, 'files');
    let err = 'FS operation failed';
    fs.access(folder, (error) => {
        if (error) {
            throw new Error(err);
        } else {
            fs.readdir(folder, (error, files) => {
                files.forEach(file => {
                    console.log(file);
                })
            })
        }
    })
};

list();
