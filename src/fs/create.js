import * as fs from 'fs';
import * as path from 'path';
import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const create = async () => {
    let file = path.join(__dirname, 'files', 'fresh.txt')
    // if (fs.exists(file)) {
    //     throw 'FS operation failed';
    // }
    let err = 'FS operation failed';
    fs.access(file, (err) => {
        if (err) {
            console.error(err)
            return
        }
    })

    fs.appendFile(file, 'I am fresh and young', () => {
        console.log('File was successfully created!');
    })
};

create();
