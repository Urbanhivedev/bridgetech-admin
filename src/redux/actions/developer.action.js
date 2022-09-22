import {fetchDevelopersPending, fetchDevelopersSuccess, fetchDevelopersFailed, fetchRealTimeDevelopersSuccess, fetchConnectedDeveloperSuccess,
    initiatePending, initiateSuccess, initiateSuccess2, initiateFailed, clearDeveloper} from '../reducers/developer.slice';
  import { db, fb, auth, storage } from '../../config/firebase';
import { sendChat } from './chat.action';
import { result } from 'lodash';
import { clearChat } from 'redux/reducers/chat.slice';
  
    export const fetchAllDevelopers = ( ) => async (dispatch) => {
            dispatch(fetchDevelopersPending());
            // db.collection('Developers').where("uid", "!=", fb.auth().currentDeveloper.uid)
            db.collection('developers')
            .get()
            .then((snapshot) => {
                const developers = snapshot.docs.map((doc) => ({ ...doc.data() }));
                console.log('Developers, ', developers);
                dispatch(fetchDevelopersSuccess(developers));
        }).catch((error) => {
                var errorMessage = error.message;
                console.log('Error fetching profile', errorMessage);
                dispatch(fetchDevelopersFailed({ errorMessage }));
        });
    
};

 /*i havent done any of the actions here yet, here and below */
export const fetchRealTimeDevelopers = (uid) => async (dispatch) => {
        dispatch(fetchDevelopersPending());
      
    const unsubscribe = db.collection("developers")
   .where("uid", "!=", uid)  
    .onSnapshot((querySnapshot) => {
        const developers = [];
        querySnapshot.forEach((doc) => {
        // if(doc.data().uid != uid){
         developers.push(doc.data());
        // }
        });
        dispatch(fetchRealTimeDevelopersSuccess(developers));
        console.log("RealTime Fetched Developers: ", developers);
    });

    return unsubscribe;
};


export const initiateConnection = (type, developer1, developer2) => (dispatch) => {
    dispatch(fetchConnection(developer1, developer2, type));
};


  export const fetchConnection = (developer1, developer2, type) => async (dispatch) => {
        var connect = db.collection("connections")
        connect = connect.where("developer1", "==", developer1)
        connect = connect.where("developer2", "==", developer2)
        // connect = connect.where("type", "==", type)
        connect.get()
        .then((querySnapshot) => {
            if(querySnapshot.empty){
                console.log("No such document");
                const res = db.collection('connections').add({
                developer1: developer1,
                developer2: developer2, 
                type: type, 
                status: 'pending', 
                invited_amt: type == 1 ? 1 : 0, 
                skipped_amt: type == 0 ? 1 : 0,
                })
                .then((docRef) => {
                  console.log("created new connection successfully!");
                  const messageText = 'Hello, I will like to connect with you. Kindly accept my Invite. Cheers!';
                  dispatch(sendChat({
                        messageText,
                        developer1: developer1,
                        developer2: developer2,
                      }))
                })
                .catch((err) => {
                  var errorMessage = error.message;
                  console.log('error creating new connection: ', errorMessage);
                });
            }else{
                //update record

                 console.log('Type is: ', type);
                querySnapshot.forEach((doc) => {

                console.log('Fetched Doc: ', doc.data());
                // console.log('Doc ID: ', doc.id);
                const docID = doc.id;
                const docType = doc.data().type;
                const skipped_amt = doc.data().skipped_amt;
                const invited_amt = doc.data().invited_amt;

                if(type == 1 && doc.data().type == 1 || type == 0 && doc.data().type == 1){
                 var errorMessage = 'You have already invited this developer';
                 console.log('Error Msg: ', errorMessage);
                 dispatch(initiateFailed({ errorMessage }));
                }else if(type == 1 && doc.data().type == 0){
                 var errorMessage = 'You cannot invite, untill you undo this developer from skipped';
                 console.log('Error Msg: ', errorMessage);
                 dispatch(initiateFailed({ errorMessage }));
                }else if(type == 0 && doc.data().type == 0){
                  //update Firestore
                  console.log('Type is 0: and doc data is : 0');
                db.collection("connections").doc(docID).set({
                developer1: doc.data().developer1,
                developer2: doc.data().developer2,
                type: docType,
                status: doc.data().status,
                invited_amt:  type == 1 ? invited_amt + 1 : invited_amt,
                skipped_amt: type == 0 ? skipped_amt + 1 : skipped_amt,
                }).then(() => {
                console.log('updated connect');
                })
                .catch((error) => {
                var errorMessage = error.message;
                console.log('error updating connect: ', errorMessage);
                });

               }

                });
                
            }
        })
        .catch((error) => {
            console.log("Error fetching connections: ", error.message);
        });
};
  

export const fetchRealTimeConnections = (uid) => async (dispatch) => {
    const unsubscribe = db.collection("connections")
    .where("developer1", "==", uid)
    .onSnapshot((querySnapshot) => {
        const connects = [];
        querySnapshot.forEach((doc) => {
        // if(doc.data().uid != uid){
         connects.push(doc.data());
        // }
        });
        dispatch(initiateSuccess(connects));
        console.log("connections fetched: ", connects);
    });

    return unsubscribe;
};

export const fetchRealTimeConnections2 = (uid) => async (dispatch) => {
    const unsubscribe = db.collection("connections")
    .where("developer2", "==", uid)
    .onSnapshot((querySnapshot) => {
        const connects = [];
        querySnapshot.forEach((doc) => {
        // if(doc.data().uid != uid){
         connects.push(doc.data());
        // }
        });
        dispatch(initiateSuccess2(connects));
        console.log("connections fetched for developer2: ", connects);
    });

    return unsubscribe;
};


    export const fetchConnectedDevelopers = (uid) => async (dispatch) => {

        var unsubscribe = db.collection("connections")
        unsubscribe = unsubscribe.where("developer1", "==", uid)
        unsubscribe = unsubscribe.where("invited_amt", "==", 1)
        // const unsubscribe = db.collection("connections")
        // .where("developer1", "==", uid)
        unsubscribe.onSnapshot((querySnapshot) => {
            const developers = [];
            querySnapshot.forEach((doc) => {
            // if(doc.data().uid != uid){
            developers.push(doc.data().developer2);
            // }
            });
            // dispatch(fetchRealTimeDevelopersSuccess(developers));
            console.log("Connected developers ID: ", developers);
            if(developers.length > 0){
                db.collection('developers')
                .where('uid', 'in', developers)
                .get()
                .then((snapshot) => {
                    const connectedDevelopers = snapshot.docs.map((doc) => ({ ...doc.data() }));
                    console.log('Connected Developers Data, ', connectedDevelopers);
                    dispatch(fetchConnectedDeveloperSuccess(connectedDevelopers));
            }).catch((error) => {
                    var errorMessage = error.message;
                    console.log('Error Connected Developers Data', errorMessage);
                    dispatch(fetchDevelopersFailed({ errorMessage }));
            });
        
            }
    
        });
    
        return unsubscribe;
        };
    

        export const fetchConnectedDevelopers2 = (uid) => async (dispatch) => {
        
            var unsubscribe = db.collection("connections")
            unsubscribe = unsubscribe.where("developer2", "==", uid)
            unsubscribe = unsubscribe.where("invited_amt", "==", 1)
            // const unsubscribe = db.collection("connections")
            // .where("developer1", "==", uid)
            unsubscribe.onSnapshot((querySnapshot) => {
                const developers = [];
                querySnapshot.forEach((doc) => {
                // if(doc.data().uid != uid){
                developers.push(doc.data().developer1);
                // }
                });
                // dispatch(fetchRealTimeDevelopersSuccess(developers));
                console.log("Connected Developers ID for Developer2 : ", developers);
                if(developers.length > 0){
                    db.collection('developers')
                    .where('uid', 'in', developers)
                    .get()
                    .then((snapshot) => {
                        const connectedDevelopers = snapshot.docs.map((doc) => ({ ...doc.data() }));
                        console.log('Connected Developers Data for Developer2, ', connectedDevelopers);
                        dispatch(fetchConnectedDeveloperSuccess(connectedDevelopers));
                }).catch((error) => {
                        var errorMessage = error.message;
                        console.log('Error Connected Developers Data for developer 2', errorMessage);
                        dispatch(fetchDevelopersFailed({ errorMessage }));
                });
            
                }
        
            });
        
            return unsubscribe;
            };
        
       

            export const updateConnection = (developer1, developer2, status, history) => async (dispatch) => {
                var connect = db.collection("connections")
                connect = connect.where("developer1", "==", developer1)
                connect = connect.where("developer2", "==", developer2)
                connect.get()
                .then((querySnapshot) => {
                    if(querySnapshot.empty){
                        console.log("No such document, cannot update connections");
                    }else{
                    // check for status type
                        //update record
                        querySnapshot.forEach((doc) => {
                            const docID = doc.id;
                            if(status == 'accepted'){
                                db.collection("connections").doc(docID).set({
                                    developer1: doc.data().developer1,
                                    developer2: doc.data().developer2,
                                    type: doc.data().type,
                                    status: status,
                                    invited_amt:  doc.data().invited_amt,
                                    skipped_amt: doc.data().skipped_amt,
                                    }).then(() => {
                                    console.log('updated connections');
                                    alert('Accepted Connection Successfully');
                                    dispatch(clearDeveloper());
                                    dispatch(clearChat());
                                    window.location.href = '/candidates';
                                    })
                                    .catch((error) => {
                                    var errorMessage = error.message;
                                    console.log('error updating connections: ', errorMessage);
                                    });
                             }else{
                                db.collection("connections").doc(docID).delete().then(() => {
                                    console.log("Connection successfully deleted!");
                                    //delete chats
                                    //first select chat collections
                                    console.log('Developer1 is ',developer1)
                                    console.log('Developer2 is ',developer2)
                                    var chats = db.collection("chats")
                                    chats = chats.where("developer1", "==", developer1)
                                    chats = chats.where("developer2", "==", developer2)
                                    chats.get()
                                    .then((querySnapshot) => {
                                        // const docArr = [];
                                        // Once we get the results, begin a batch
                                        var batch = db.batch();
                                        querySnapshot.forEach((doc) => {
                                            // docArr.push(doc.id);
                                            // console.log('Doc ID: ',docArr);
                                            // For each doc, add a delete operation to the batch
                                             batch.delete(doc.ref);  
                                        });
                                        // Commit the batch
                                         return batch.commit();
                                        }).then(function() {
                                            // Delete completed!
                                              console.log("Chats successfully deleted!");
                                              alert('Rejected Connection Successfully');
                                              dispatch(clearDeveloper());
                                              dispatch(clearChat());
                                              window.location.href = '/candidates';
                                        })
                                    
                                    .catch((error) => {
                                        console.log("Error fetching chats doc: ", error.message);
                                    });

                                }).catch((error) => {
                                    console.error("Error removing connection: ", error.message);
                                });
                            }
                            });
                    }
                })
                .catch((error) => {
                    console.log("Error fetching connections: ", error.message);
                });
              }



           





        // export const fetchConnectedDevelopers = (uid) => async (dispatch) => {
        //     //     dispatch(fetchDevelopersPending());
            
        //     var unsubscribe = db.collection("connections")
        
        //      //We define an async function
        //      async function getConnections() {
        //         const isDeveloper1 = unsubscribe.where("developer1", "==", uid).get();
        //         const isDeveloper2= unsubscribe.where("developer2", "==", uid).get();
        
        //         const [developer1QuerySnapshot, developer2QuerySnapshot] = await Promise.all([
        //           isDeveloper1,
        //           isDeveloper2
        //         ]);
        
        //         const developer1Array = developer1QuerySnapshot.docs;
        //         const developer2Array = developer2QuerySnapshot.docs;
        
        //         const developersArray = developer1Array.concat(developer2Array);
        
        //         return developersArray;
        //       }
        
        
        //       //We call the asychronous function
        //       const developers = [];
        //       getConnections().then(result => {
        //         result.forEach(doc => {
        //           developers.push(doc.data().developer2);
        //           console.log("Connected Developers ID: ", developers);
                  
        //         });
        //     }).then(() => {
        //         console.log('Unto the next query: ', developers);
        //         if(developers.length > 0){
        //             db.collection('developers')
        //             .where('uid', 'in', developers)
        //             .get()
        //             .then((snapshot) => {
        //                 const connectedDevelopers = snapshot.docs.map((doc) => ({ ...doc.data() }));
        //                 console.log('Connected Developers Data, ', connectedDevelopers);
        //                 dispatch(fetchConnectedDeveloperSuccess(connectedDevelopers));
        //         }).catch((error) => {
        //                 var errorMessage = error.message;
        //                 console.log('Error Connected Developers Data', errorMessage);
        //                 dispatch(fetchDevelopersFailed({ errorMessage }));
        //         });
        //         }

        //     });
        
        //     return unsubscribe;
        //     };
        