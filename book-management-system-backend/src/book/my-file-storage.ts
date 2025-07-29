import * as multer from 'multer';
import * as fs from 'fs';

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    try {
      fs.mkdirSync('uploads');
    } catch (error) {}
    callback(null, 'uploads');
  },
  filename: (req, file, callback) => {
    const uniqueSuffix =
      Date.now() +
      '-' +
      Math.round(Math.random() * 1e9) +
      '-' +
      file.originalname;
    callback(null, file.fieldname + '-' + uniqueSuffix);
  },
});

export { storage };
