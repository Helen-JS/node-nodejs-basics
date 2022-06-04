import * as fs from 'fs';
import * as path from 'path';
import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const copy = async () => {
    let folder = path.join(__dirname, 'files');
    let folderCopy = path.join(__dirname, 'files_copy');
    let err = 'FS operation failed';
    fs.access(folder, (error) => {
        if (error) {
            throw new Error(err);
        } else {
            fs.access(folderCopy, (error) => {
                if (error) {
                    fs.cp(folder, folderCopy, {recursive: true}, () => {
                        console.log('Files were successfully copied!');
                    })
                } else {
                    throw new Error(err);
                }
            })
        }
    })
};

copy();
