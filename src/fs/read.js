import * as fs from 'fs';
import * as path from 'path';
import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
    let file = path.join(__dirname, 'files', 'fileToRead.txt');
    let err = 'FS operation failed';
    fs.readFile(file, (error, data) => {
        if (error) {
            throw new Error(err);
        }
        console.log(data.toString());
    })
};

read();
