import {fetchAdminUsersPending, fetchAdminUsersSuccess, fetchAdminUsersFailed, fetchRealTimeAdminUsersSuccess, fetchConnectedAdminUserSuccess,
    initiatePending, initiateSuccess, initiateSuccess2, initiateFailed, clearUser} from '../reducers/adminUser.slice';
    import {fetchUsersPending, fetchUsersSuccess,fetchUsersFailed } from '../reducers/user.slice'; /*i got lazy in dispatching rest connections but i will fix it to the proper convention */
  import { db, fb, auth, storage } from '../../config/firebase';
import { sendChat } from './chat.action';
import { result } from 'lodash';
import { clearChat } from 'redux/reducers/chat.slice';
  
    export const fetchAllAdminUsers = (uid) => async (dispatch) => {
            dispatch(fetchAdminUsersPending());
            // db.collection('users').where("uid", "!=", fb.auth().currentUser.uid)
            db.collection('users')
            .get()
            .then((snapshot) => {
                const adminUsers = snapshot.docs.map((doc) => ({ ...doc.data() }));
                console.log('Users, ', adminUsers);
                dispatch(fetchAdminUsersSuccess(adminUsers));
        }).catch((error) => {
                var errorMessage = error.message;
                console.log('Error fetching profile', errorMessage);
                dispatch(fetchAdminUsersFailed({ errorMessage }));
        });
    
};


export const fetchRealTimeUsers = (uid) => async (dispatch) => {
        dispatch(fetchAdminUsersPending());
      
    const unsubscribe = db.collection("users")
    .where("uid", "!=", uid)
    .onSnapshot((querySnapshot) => {
        const adminUsers = [];
        querySnapshot.forEach((doc) => {
        // if(doc.data().uid != uid){
         adminUsers.push(doc.data());
        // }
        });
        dispatch(fetchRealTimeUsersSuccess(users));
        console.log("RealTime Fetched Users: ", users);
    });

    return unsubscribe;
};


export const initiateConnection = (type, user1, user2) => (dispatch) => {
    dispatch(fetchConnection(user1, user2, type));
};


  export const fetchConnection = (user1, user2, type) => async (dispatch) => {
        var connect = db.collection("connections")
        connect = connect.where("user1", "==", user1)
        connect = connect.where("user2", "==", user2)
        // connect = connect.where("type", "==", type)
        connect.get()
        .then((querySnapshot) => {
            if(querySnapshot.empty){
                console.log("No such document");
                const res = db.collection('connections').add({
                user1: user1,
                user2: user2, 
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
                        user1: user1,
                        user2: user2,
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
                 var errorMessage = 'You have already invited this user';
                 console.log('Error Msg: ', errorMessage);
                 dispatch(initiateFailed({ errorMessage }));
                }else if(type == 1 && doc.data().type == 0){
                 var errorMessage = 'You cannot invite, untill you undo this user from skipped';
                 console.log('Error Msg: ', errorMessage);
                 dispatch(initiateFailed({ errorMessage }));
                }else if(type == 0 && doc.data().type == 0){
                  //update Firestore
                  console.log('Type is 0: and doc data is : 0');
                db.collection("connections").doc(docID).set({
                user1: doc.data().user1,
                user2: doc.data().user2,
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
    .where("user1", "==", uid)
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

export const rollOverConnections = () => async (dispatch) => {
    const collection = await db.collection("users").get()
    
    collection.forEach(doc=> {
      doc.ref
        .update({
          usedConnection: 0
        })
        .then(() => {
            
           console.log('Users have been updated ');
            
          })
          .catch((error) => {
            var errorMessage = error.message;
            console.log('Error resetting connections', errorMessage);
          });
    })



 /*QUICK STATE UPDATE */
 db.collection('users')
 .get().then((snapshot) => {
     const updatedUsers = snapshot.docs.map((doc) => ({ ...doc.data() }));
     console.log('Users, ', updatedUsers);
     dispatch(fetchAdminUsersSuccess(updatedUsers)); /*YOU DONT NEED TO HAVE A USER LIST THAT ONLY ADMINS CAN SEE GO AND REFACTOR SO THAT THERE IS ONLY ONE USER LIST */
     dispatch(fetchUsersSuccess(updatedUsers));
}).catch((error) => {
     var errorMessage = error.message;
     console.log('Error fetching profile', errorMessage);
     dispatch(fetchAdminUsersFailed({ errorMessage }));
});
/*QUICK STATE UPDATE END*/

  }



export const fetchRealTimeConnections2 = (uid) => async (dispatch) => {
    const unsubscribe = db.collection("connections")
    .where("user2", "==", uid)
    .onSnapshot((querySnapshot) => {
        const connects = [];
        querySnapshot.forEach((doc) => {
        // if(doc.data().uid != uid){
         connects.push(doc.data());
        // }
        });
        dispatch(initiateSuccess2(connects));
        console.log("connections fetched for user2: ", connects);
    });

    return unsubscribe;
};


    export const fetchConnectedUsers = (uid) => async (dispatch) => {

        var unsubscribe = db.collection("connections")
        unsubscribe = unsubscribe.where("user1", "==", uid)
        unsubscribe = unsubscribe.where("invited_amt", "==", 1)
        // const unsubscribe = db.collection("connections")
        // .where("user1", "==", uid)
        unsubscribe.onSnapshot((querySnapshot) => {
            const users = [];
            querySnapshot.forEach((doc) => {
            // if(doc.data().uid != uid){
            users.push(doc.data().user2);
            // }
            });
            // dispatch(fetchRealTimeUsersSuccess(users));
            console.log("Connected Users ID: ", users);
            if(users.length > 0){
                db.collection('users')
                .where('uid', 'in', users)
                .get()
                .then((snapshot) => {
                    const connectedUsers = snapshot.docs.map((doc) => ({ ...doc.data() }));
                    console.log('Connected Users Data, ', connectedUsers);
                    dispatch(fetchConnectedUserSuccess(connectedUsers));
            }).catch((error) => {
                    var errorMessage = error.message;
                    console.log('Error Connected Users Data', errorMessage);
                    dispatch(fetchUsersFailed({ errorMessage }));
            });
        
            }
    
        });
    
        return unsubscribe;
        };
    

        export const fetchConnectedUsers2 = (uid) => async (dispatch) => {
        
            var unsubscribe = db.collection("connections")
            unsubscribe = unsubscribe.where("user2", "==", uid)
            unsubscribe = unsubscribe.where("invited_amt", "==", 1)
            // const unsubscribe = db.collection("connections")
            // .where("user1", "==", uid)
            unsubscribe.onSnapshot((querySnapshot) => {
                const users = [];
                querySnapshot.forEach((doc) => {
                // if(doc.data().uid != uid){
                users.push(doc.data().user1);
                // }
                });
                // dispatch(fetchRealTimeAdminUsersSuccess(users));
                console.log("Connected AdminUsers ID for AdminUser2 : ", users);
                if(users.length > 0){
                    db.collection('users')
                    .where('uid', 'in', users)
                    .get()
                    .then((snapshot) => {
                        const connectedAdminUsers = snapshot.docs.map((doc) => ({ ...doc.data() }));
                        console.log('Connected AdminUsers Data for AdminUser2, ', connectedAdminUsers);
                        dispatch(fetchConnectedAdminUserSuccess(connectedAdminUsers));
                }).catch((error) => {
                        var errorMessage = error.message;
                        console.log('Error Connected AdminUsers Data for user 2', errorMessage);
                        dispatch(fetchAdminUsersFailed({ errorMessage }));
                });
            
                }
        
            });
        
            return unsubscribe;
            };
        
       

            export const updateConnection = (user1, user2, status, history) => async (dispatch) => {
                var connect = db.collection("connections")
                connect = connect.where("user1", "==", user1)
                connect = connect.where("user2", "==", user2)
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
                                    user1: doc.data().user1,
                                    user2: doc.data().user2,
                                    type: doc.data().type,
                                    status: status,
                                    invited_amt:  doc.data().invited_amt,
                                    skipped_amt: doc.data().skipped_amt,
                                    }).then(() => {
                                    console.log('updated connections');
                                    alert('Accepted Connection Successfully');
                                    dispatch(clearAdminUser());
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
                                    console.log('AdminUser1 is ',user1)
                                    console.log('AdminUser2 is ',user2)
                                    var chats = db.collection("chats")
                                    chats = chats.where("user1", "==", user1)
                                    chats = chats.where("user2", "==", user2)
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
                                              dispatch(clearAdminUser());
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



           





        // export const fetchConnectedAdminUsers = (uid) => async (dispatch) => {
        //     //     dispatch(fetchAdminUsersPending());
            
        //     var unsubscribe = db.collection("connections")
        
        //      //We define an async function
        //      async function getConnections() {
        //         const isAdminUser1 = unsubscribe.where("user1", "==", uid).get();
        //         const isAdminUser2= unsubscribe.where("user2", "==", uid).get();
        
        //         const [user1QuerySnapshot, user2QuerySnapshot] = await Promise.all([
        //           isAdminUser1,
        //           isAdminUser2
        //         ]);
        
        //         const user1Array = user1QuerySnapshot.docs;
        //         const user2Array = user2QuerySnapshot.docs;
        
        //         const usersArray = user1Array.concat(user2Array);
        
        //         return usersArray;
        //       }
        
        
        //       //We call the asychronous function
        //       const users = [];
        //       getConnections().then(result => {
        //         result.forEach(doc => {
        //           users.push(doc.data().user2);
        //           console.log("Connected AdminUsers ID: ", users);
                  
        //         });
        //     }).then(() => {
        //         console.log('Unto the next query: ', users);
        //         if(users.length > 0){
        //             db.collection('users')
        //             .where('uid', 'in', users)
        //             .get()
        //             .then((snapshot) => {
        //                 const connectedAdminUsers = snapshot.docs.map((doc) => ({ ...doc.data() }));
        //                 console.log('Connected AdminUsers Data, ', connectedAdminUsers);
        //                 dispatch(fetchConnectedAdminUserSuccess(connectedAdminUsers));
        //         }).catch((error) => {
        //                 var errorMessage = error.message;
        //                 console.log('Error Connected AdminUsers Data', errorMessage);
        //                 dispatch(fetchUsersFailed({ errorMessage }));
        //         });
        //         }

        //     });
        
        //     return unsubscribe;
        //     };
        