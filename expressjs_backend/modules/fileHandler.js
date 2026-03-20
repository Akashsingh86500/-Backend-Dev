const fs = require('fs').promises;

const readStudentsFromFile = async () => {
    try {
        const fileData = await fs.readFile('./student.json', 'utf-8');
        
        return JSON.parse(fileData);
    }
    catch (error) {
        console.log(error.message);
    }
};

const writeStudentsToFile = async (records) => {
    try {
        await fs.writeFile('./student.json', JSON.stringify(records));
    }
    catch (error) {
        console.log(error.message);
    }
};

module.exports = { readStudentsFromFile, writeStudentsToFile };