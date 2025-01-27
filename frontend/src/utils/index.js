import {surpriseMePrompts} from '../constants/index.js'
import FileSaver from 'file-saver';

export const getRandomPrompt = (prompt) => {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];
    if (randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}

export async function downloadImage(_id,photo){
    FileSaver.saveAs(photo,`${_id}.jpg`);
}