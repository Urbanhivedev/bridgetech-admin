const Users =[{"id":"1","name":"Ben"},{"id":"2","name":"Khloe"},{"id":"3","name":"Ayra"}];
const Connects = [{userId: "1", status:"pending", type: 'skipped'}, {userId: "3", status:"pending", type: 'invited'}];

const connectsById = Object.fromEntries(
  Connects.map(({ userId, status, type }) => [userId, { type, status }])
);
const output = Users.map(({ id, name }) => ({
  name,
  ...(connectsById[id] || { status: '', type: '' })
}));
console.log(output);




//New Solution
// https://stackoverflow.com/questions/73347162/mapping-through-multiple-array-object/73347269#73347269

// const connectsById = Object.fromEntries(
//   connects.map(({ user2, type, status, invited_amt, skipped_amt }) => [user2, { type, status, invited_amt, skipped_amt }])
// );

// const output = allUsers.map(({ uid, name, email, isTechnical, skills_needed, lookingFor, intro, photoUrl, lastActive, skillset, city }) => ({
//   uid, name, email, isTechnical, skills_needed, lookingFor, intro, photoUrl, lastActive, skillset, city,
//   ...(connectsById[uid] || { type: '', status: '', invited_amt: '', skipped_amt: ''})
// }));

// console.log(output);





//Previous Solution
  // const Users =[{"id":"1","name":"Ben"},{"id":"2","name":"Khloe"},{"id":"3","name":"Ayra"}];
  // const Connects = [{userId: "1", status:"pending", type: 'skipped'}, {userId: "3", status:"pending", type: 'invited'}];
  
  // const connectMap = Connects.reduce((map, { userId, type, status }) => {
  //   let connect = map.get(userId) || []
  //   connect.push(type, status)
  //   return map.set(userId, connect)
  // }, new Map())
  
  // const array = Users.map(({ id, name }) => ({
  //   name,
  //   type: (connectMap.get(id) || []).join(', '),
  //   status: (connectMap.get(id) || []).join(', '),
  // }))
  
  // console.info(array)






  //Array Maping

//   https://stackoverflow.com/questions/53385853/javascript-compare-two-arrays-in-map-function