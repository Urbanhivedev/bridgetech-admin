// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from './firebase';

const uploadFile = (file, filePath) => {
  return new Promise(async (resolve, reject) => {
    // const storageRef = storage.ref(storage, filePath);
    const storageRef = storage.ref(filePath);
    const ref = storageRef.child(filePath);
    try {
      // await uploadBytes(storageRef, file);
       await ref.put(file);
      // const url = await getDownloadURL(storageRef);
      const url = await storageRef.child(filePath).getDownloadURL();
      resolve(url);
    } catch (error) {
      reject(error);
    }
  });
};

export default uploadFile;


