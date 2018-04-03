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

firebase.initializeApp(config);
firebase.auth().signInAnonymously()

// CREATE a new woof in Firebase
firebase.database().ref('woof').set({

}

function createWoofInDatabase (woof) {
  // TODO create a new record in Firebase
  firebase.database().ref('woof').push({
    "woofs": {
      "b95d5042-843c-9951-703a-09d3e0974d05": {
        "created_at": 1491613778000,
        "text": "That homework looks hard. Want me to eat it?"
      }
    }
})
}

// READ from Firebase when woofs are added, changed, or removed
// Write a function for each 'on' method and call addWoofRow,
// updateWoofRow, and deleteWoofRow to update the page. Make
// sure to pass the right parameters (hint: these functions are
// defined in woofer-ui.js).
function readWoofsInDatabase () {
  // TODO read new, changed, and deleted Firebase records
  firebase.database().ref('woof')
.on('child_added', function (SnapshotWoofs) {
  console.log(SnapshotWoofs.val())
})
firebase.database().ref('woof')
.on('child_changed', function (SnapshotWoofs) {
  console.log(SnapshotWoofs.val())
})
firebase.database().ref('woof')
.on('child_removed', function (SnapshotWoofs) {
  console.log(SnapshotWoofs.val())
})
}

// UPDATE the woof in Firebase
function updateWoofInDatabase (woofKey, woofText) {
  // TODO update the record in Firebase
}

// DELETE the woof from Firebase
function deleteWoofFromDatabase (woofKey) {
  // TODO delete the record from Firebase
  firebase.database().ref('woof').child(woofKey).remove()
}

// Load all of the data
readWoofsInDatabase()
