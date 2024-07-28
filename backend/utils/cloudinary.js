
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name:'dyol3ss07' ,

  api_key:  196373885819599,
  api_secret: 'RvkYvE_TTY_CBN-oI-Pk5YtZ5UE',
});

export default cloudinary;
