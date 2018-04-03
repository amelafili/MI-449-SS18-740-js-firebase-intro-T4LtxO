// TODO Sign into the database anonymously
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyA2IUr2isGiuzv8zDqvO94bKpjGcnwVQ3s',
  authDomain: 'woofer-js.firebaseapp.com',
  databaseURL: 'https://woofer-js.firebaseio.com',
  projectId: 'woofer-js',
  storageBucket: '',
  messagingSenderId: '633003409490'
}

// allows the user to enter info without credentials
firebase.initializeApp(config)
firebase.auth().signInAnonymously()

// CREATE a new woof in Firebase

function createWoofInDatabase (woof) {
  // TODO create a new record in Firebase
  firebase.database().ref('woofs').push({
    created_at: woof.created_at,
    text: woof.text
  })
}

// READ from Firebase when woofs are added, changed, or removed
// Write a function for each 'on' method and call addWoofRow,
// updateWoofRow, and deleteWoofRow to update the page. Make
// sure to pass the right parameters (hint: these functions are
// defined in woofer-ui.js).
function readWoofsInDatabase () {
  // TODO read new, changed, and deleted Firebase records
  // add
  firebase.database().ref('woofs')
  .on('child_added', function (SnapshotWoofs) {
    addWoofRow(SnapshotWoofs.key, SnapshotWoofs.val())
  })

  // update
  firebase.database().ref('woofs')
  .on('child_changed', function (SnapshotWoofs) {
    updateWoofRow(SnapshotWoofs.key, SnapshotWoofs.val())
  })

  // remove
  firebase.database().ref('woofs')
  .on('child_removed', function (SnapshotWoofs) {
    deleteWoofRow(SnapshotWoofs.key)
  })
}

// UPDATE the woof in Firebase
function updateWoofInDatabase (woofKey, woofText) {
  // TODO update the record in Firebase
  firebase.database().ref('woofs').child(woofKey).child('text').set(woofText)
}

// DELETE the woof from Firebase
function deleteWoofFromDatabase (woofKey) {
  // TODO delete the record from Firebase
  firebase.database().ref('woofs').child(woofKey).remove()
}

// Load all of the data
readWoofsInDatabase()
