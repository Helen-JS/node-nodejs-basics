import * as fs from 'fs';
import * as path from 'path';
import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const rename = async () => {
    let file = path.join(__dirname, 'files', 'wrongFilename.txt');
    let fileRenamed = path.join(__dirname, 'files', 'properFilename.md');
    let err = 'FS operation failed';
    fs.access(file, (error) => {
        if (error) {
            throw new Error(err);
        } else {
            fs.access(fileRenamed, (error) => {
                if (error) {
                    fs.rename(file, fileRenamed, () => {
                        console.log('File was successfully renamed!');
                    })
                } else {
                    throw new Error(err);
                }
            })
        }
    })
};

rename();
