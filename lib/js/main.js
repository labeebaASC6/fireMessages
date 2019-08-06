const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here
const database = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    //Update database here
    const messageObject = {
        USERNAME: username,
        MESSAGE: message
    }
    database.push(messageObject);
}

// Set database "child_added" event listener here
database.on("child_added", addMessageToBoard);
function addMessageToBoard(rowData)
{
    const row = rowData.val();
    console.log(row);

    var pElement = document.createElement("p");
    pElement.innerHTML = `${row.USERNAME}: ${row.MESSAGE}`;
}