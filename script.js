// ===========================================
// SIMPLE MUSIC COLLECTION - ARRAYS LAB
// ===========================================
// Complete each step to practice JavaScript arrays!

// ===========================================
// STEP 1: ARRAY DECLARATION
// ===========================================
// TODO: Create your arrays here

// TODO: Create an array with at least 5 song titles (strings)
// MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
let mySongs = ["OH I DID", "Prada Tune", "PHILLY", "Digits", "Ever Seen"];
    // Add your favorite song titles here as strings
    // Example: "Song Title"


// TODO: Create an array with at least 5 artist names
let myArtists = ["Yeat", "Lucki", "Playboi Carti", "Young Thug", "Beabadoobee"];
    // Add artist names here as strings
    // Example: "Artist Name"


// TODO: Create an array with music genres
let genres = ["Rap", "Trap rap","Rap","Indie rock",];
    // Add music genres here as strings
    // Example: "Rock", "Pop", "Jazz"

// TODO: Create an empty array for favorite songs (this should start empty)
let favorites = [
    // This should start empty - you'll add to it later!
];

// ===========================================
// STEP 2: ARRAY ACCESS
// ===========================================
// TODO: Complete this function to access specific songs

function displaySelectedSongs() {
    // TODO: Get the first song from mySongs (index 0)
    // MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#accessing_array_elements
    let firstSong = mySongs[0]; // Your code here

    // TODO: Get the last song from mySongs
    // HINT: Use mySongs.length - 1 for the last index
    let lastSong = mySongs[mySongs.length - 1]; // Your code here

    // TODO: Get the middle song from mySongs
    // HINT: Use Math.floor(mySongs.length / 2) for middle index
    let middleSong = mySongs[Math.floor(mySongs.length / 2)]; // Your code here

    // DOM operations handled for you - focus on the array logic above
    document.getElementById('first-song').textContent = firstSong;
    document.getElementById('last-song').textContent = lastSong;
    document.getElementById('middle-song').textContent = middleSong;

    showMessage("Displayed first, middle, and last songs!");
}

// ===========================================
// STEP 3: ARRAY PROPERTIES
// ===========================================
// TODO: Complete this function to show array lengths

function showMusicStats() {
    // TODO: Count songs using .length property
    // MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
    let songCount = mySongs.length;

    // TODO: Count artists using .length property
    let artistCount = myArtists.length;

    // TODO: Count genres using .length property
    let genreCount = genres.length;

    // TODO: Count favorites using .length property
    let favoritesCount = favorites.length;

    // Check if arrays are properly filled
    if (mySongs.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add songs to mySongs array");
        return;
    }
    if (myArtists.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add artists to myArtists array");
        return;
    }
    if (genres.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add genres to genres array");
        return;
    }

    // DOM operations handled for you - focus on the array logic above
    document.getElementById('song-count').textContent = songCount;
    document.getElementById('artist-count').textContent = artistCount;
    document.getElementById('genre-count').textContent = genreCount;
    document.getElementById('favorites-count').textContent = favoritesCount;

    showMessage("✅ Updated collection statistics!");
}

// ===========================================
// STEP 4: ARRAY METHODS - ADDING ITEMS
// ===========================================

// TODO: Complete this function to add a song to the end
function addSongToEnd() {
    // TODO: Use .push() method to add "New Song" to mySongs
    // MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
    // Your code here - use mySongs.push("New Song")
    mySongs.push("New Song");

    if (mySongs.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add songs to mySongs array first");
        return;
    }

    // DOM operations handled for you - focus on the array logic above
    updateDisplays();
    showMessage("✅ Added 'New Song' to the end using .push()! New length: " + mySongs.length);
}

// TODO: Complete this function to add a song to the beginning
function addSongToBeginning() {
    // TODO: Use .unshift() method to add "First Song" to mySongs
    // MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
    // Your code here - use mySongs.unshift("First Song")
    mySongs.unshift("First Song");

    if (mySongs.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add songs to mySongs array first");
        return;
    }

    // DOM operations handled for you - focus on the array logic above
    updateDisplays();
    showMessage("✅ Added 'First Song' to the beginning using .unshift()! New length: " + mySongs.length);
}

// TODO: Complete this function to add a random song to favorites
function addRandomToFavorites() {
    // Check if mySongs has any songs first
    if (mySongs.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add songs to mySongs array first");
        return;
    }

    // TODO: Pick a random song from mySongs
    // HINT: Use Math.floor(Math.random() * mySongs.length)
    let randomIndex = Math.floor(Math.random() * mySongs.length);
    let randomSong = mySongs[randomIndex];

    // TODO: Add it to favorites using .push()
    // Your code here - use favorites.push(randomSong)
    favorites.push(randomSong);

    // DOM operations handled for you - focus on the array logic above
    updateDisplays();
    showMessage("✅ Added '" + randomSong + "' to favorites!");
}

// ===========================================
// STEP 5: ARRAY METHODS - REMOVING ITEMS
// ===========================================

// TODO: Complete this function to remove the last song
function removeLastSong() {
    // Check if array has songs before removing
    if (mySongs.length === 0) {
        showMessage("❌ No songs to remove! Add songs first in Step 1.");
        return;
    }

    // TODO: Use .pop() to remove and get the last song
    // MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
    let removedSong = mySongs.pop();

    // DOM operations handled for you - focus on the array logic above
    updateDisplays();
    showMessage("✅ Removed '" + removedSong + "' from the end using .pop()!");
}

// TODO: Complete this function to remove the first song
function removeFirstSong() {
    // Check if array has songs before removing
    if (mySongs.length === 0) {
        showMessage("❌ No songs to remove! Add songs first in Step 1.");
        return;
    }

    // TODO: Use .shift() to remove and get the first song
    // MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
    let removedSong = mySongs.shift();

    // DOM operations handled for you - focus on the array logic above
    updateDisplays();
    showMessage("✅ Removed '" + removedSong + "' from the beginning using .shift()!");
}

// ===========================================
// STEP 6: ARRAY ITERATION
// ===========================================

// This function has been removed - focusing on array methods only

// TODO: Complete this function to display all songs using forEach
function displayAllSongsForEach() {
    if (mySongs.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add songs to mySongs array first");
        return;
    }

    let songsHTML = "<h3>All Songs (using .forEach):</h3>";

    // TODO: Use .forEach() method to go through all songs
    // MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    // Your code here - use mySongs.forEach(function(song, index) { ... })
    mySongs.forEach(function(song, index) {
        songsHTML += "<div class='song-item'>" + (index + 1) + ". " + song + "</div>";
    })

    // Inside the forEach function, add each song to songsHTML like this:
    // songsHTML += "<div class='song-item'>" + (index + 1) + ". " + song + "</div>";

    // DOM operations handled for you - focus on the array logic above
    document.getElementById('all-songs').innerHTML = songsHTML;

    showMessage("✅ Displayed all songs using .forEach()!");
}

// TODO: Complete this function to create formatted song list using map
function createFormattedSongList() {
    if (mySongs.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add songs to mySongs array first");
        return;
    }

    // TODO: Use .map() method to create an array of formatted strings
    // MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    let formattedSongs = // Your code here - use mySongs.map(function(song, index) { ... })
        mySongs.map(function(song, index) {
            return (index + 1) + ". " + song + " ♫";
        });

    // Inside the map function, return a formatted string like:
    // return (index + 1) + ". " + song + " ♫";

    let songsHTML = "<h3>Formatted Songs (using .map):</h3>";

    // TODO: Use .forEach() to display the formatted songs array
    // Your code here - use formattedSongs.forEach(function(formattedSong) { ... })
    formattedSongs.forEach(function(formattedSong) {
        songsHTML += "<div class='song-item'>" + formattedSong + "</div>";
    })

    // Inside the forEach, add to songsHTML like:
    // songsHTML += "<div class='song-item'>" + formattedSong + "</div>";

    // DOM operations handled for you - focus on the array logic above
    document.getElementById('all-songs').innerHTML = songsHTML;

    showMessage("✅ Created formatted song list using .map() and displayed with .forEach()!");
}

// ===========================================
// STEP 7: ARRAY SEARCHING
// ===========================================

// TODO: Complete this function to search for a song using indexOf
function searchForSong() {
    if (mySongs.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add songs to mySongs array first");
        return;
    }

    // Get the search term from the input field (DOM handled for you)
    let searchTerm = document.getElementById('search-input').value;

    if (!searchTerm.trim()) {
        showMessage("❌ Please enter a song title to search for");
        return;
    }

    // TODO: Use .indexOf() to find the song
    // MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    let position = mySongs.indexOf(searchTerm)

    // TODO: Check if song was found and show appropriate message
    // HINT: indexOf returns -1 if not found, or the index if found
    if (position >= 0) {
        showMessage("✅ Found '" + searchTerm + "' at position " + (position + 1) + " using .indexOf()!");
    } else {
        showMessage("❌ Song '" + searchTerm + "' not found using .indexOf()!");
    }
}

// TODO: Complete this function to check if song exists using includes
function checkIfSongExists() {
    if (mySongs.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add songs to mySongs array first");
        return;
    }

    // Get the search term from the input field (DOM handled for you)
    let searchTerm = document.getElementById('search-input').value;

    if (!searchTerm.trim()) {
        showMessage("❌ Please enter a song title to search for");
        return;
    }

    // TODO: Use .includes() to check if song exists
    // MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    let exists = mySongs.includes(searchTerm)

    // TODO: Show appropriate message
    if (exists) {
        showMessage("✅ Song '" + searchTerm + "' exists in your collection using .includes()!");
    } else {
        showMessage("❌ Song '" + searchTerm + "' does not exist using .includes()!");
    }
}

// ===========================================
// STEP 8: ARRAY DESTRUCTURING
// ===========================================

// TODO: Complete this function to get first three songs using destructuring
function getTopThreeSongs() {
    if (mySongs.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add songs to mySongs array first");
        return;
    }

    // Check if we have at least 3 songs
    if (mySongs.length < 3) {
        showMessage("❌ Need at least 3 songs for this operation!");
        return;
    }

    // TODO: Use destructuring to get first three songs
    // MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring
    // HINT: let [first, second, third] = mySongs;
    let [first, second, third] = mySongs;

    showMessage("✅ Top 3 songs using destructuring: 1) " + first + " 2) " + second + " 3) " + third);
}

// TODO: Complete this function to separate first song from rest
function separateFirstSong() {
    if (mySongs.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add songs to mySongs array first");
        return;
    }

    // TODO: Use destructuring to get first song and rest
    // HINT: let [first, ...others] = mySongs;
    let [first, ...others] = mySongs;

    showMessage("✅ First song: '" + first + "', Other songs: " + others.length + " using destructuring!");
}

// ===========================================
// HELPER FUNCTIONS (PROVIDED FOR YOU)
// ===========================================

// Function to show messages to the user
function showMessage(text) {
    let messagesDiv = document.getElementById('messages');
    let currentTime = new Date().toLocaleTimeString();
    messagesDiv.innerHTML += '<p><strong>' + currentTime + ':</strong> ' + text + '</p>';
    
    // Scroll to show latest message
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Function to clear all messages
function clearMessages() {
    document.getElementById('messages').innerHTML = '<p>Messages cleared!</p>';
}

// Function to update all displays at once
function updateDisplays() {
    displaySelectedSongs();
    showMusicStats();
    // Note: We don't auto-update the full song list because user chooses for loop vs forEach
}

// ===========================================
// TESTING YOUR CODE
// ===========================================
// Uncomment these lines one by one to test your functions:

// Test array creation
console.log("My Songs:", mySongs);
console.log("My Artists:", myArtists);
console.log("Genres:", genres);
console.log("Favorites:", favorites);

// ===========================================
// WHAT TO DO NEXT
// ===========================================
/*
1. Open index.html in your web browser
2. Open the browser console (F12) to see your console.log messages
3. Click the buttons to test each function
4. Complete any TODO items that aren't working
5. Try adding your own favorite songs to the arrays
6. Experiment with the functions to understand how arrays work

REMEMBER:
- Arrays start counting at 0, not 1
- Use .length to get the size of an array
- Check if array is empty before removing items
- .push() adds to end, .unshift() adds to beginning
- .pop() removes from end, .shift() removes from beginning
- .indexOf() returns -1 if item not found
- .includes() returns true/false

BONUS CHALLENGES:
- Add more songs to your collection
- Create a function to remove a specific song by name
- Create a function to sort your songs alphabetically
- Add a way for users to input their own songs
*/
