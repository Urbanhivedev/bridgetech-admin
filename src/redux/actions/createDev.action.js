import {createProfilePending, createProfileSuccess, createProfileFailed, 
  fetchProfilePending, fetchProfileSuccess, fetchProfileFailed} from '../reducers/createDev.slice';
import { v4 as uuidv4 } from 'uuid';
import { db, fb, auth, storage } from '../../config/firebase';
import uploadFile from 'config/uploadFile';
import { fetchUserData } from './auth.action';




export const uploadImage = (profile, user, file, resetForm) => async (dispatch) => {
  const imageName = uuidv4() + '.' + file?.name?.split('.')?.pop();
  console.log('File Name: ', imageName);
  dispatch(createProfilePending());
  const uploadTask = storage.ref(`profile_images/${imageName}`).put(file);
  uploadTask.on(
    "state_changed",
    snapshot => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      // setProgress(progress);
    },
    error => {
      console.log(error);
    },
    () => {
      storage
        .ref("profile_images")
        .child(imageName)
        .getDownloadURL()
        .then(url => {
          console.log('Image URL: ', url);
          dispatch(createProfile(profile, user, file, resetForm, url));
        });
    }
  );
}

export const createProfile = (profile, user, file, resetForm, url) => async (dispatch) => {
  console.log('All data: ',{profile, user, url});
  dispatch(createProfilePending());
  var userRef = db.collection("users").doc(fb.auth().currentUser.uid);
  const profileData = userRef.update({
      uid: fb.auth().currentUser.uid,
      //** i need to put first name and last name in the firebase database */
      intro: profile.intro,
      skillset: profile.skillset,
      city: profile.city,
      skills_needed: profile.skills_needed,
      isTechnical: profile.isTechnical,
      lookingFor: profile.lookingFor,
      photoUrl: url,
  })
  .then(() => {
    const msg = 'Profile successfully updated!';
    dispatch(createProfileSuccess( { profileData, msg }));
    dispatch(fetchProfile());
    // dispatch(fetchUserData(fb.auth().currentUser.uid));
      console.log("Profile successfully updated!");
      // resetForm();
  })
  .catch((error) => {
    var errorMessage = error.message;
    console.log('Error creating profile', errorMessage);
    dispatch(createProfileFailed({ errorMessage }));
  });

}

  export const fetchProfile = () => async (dispatch) => {
    var docRef = db.collection("users").doc(fb.auth().currentUser.uid);
    // dispatch(fetchProfilePending());
    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            const profileData = doc.data();
            console.log('Profile Data ', profileData.intro);
            if(profileData.intro != undefined){
            dispatch(fetchProfileSuccess({ profileData }));
             }
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
      var errorMessage = error.message;
      console.log('Error creating profile', errorMessage);
      // dispatch(fetchProfileFailed({ errorMessage }));
    });
      };

