const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => displayBuddies(data));
}
loadBuddies();
const displayBuddies = (data) => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for (const friend of buddies) {

        console.log(friend.name.first, friend.name.last);
        const paragraph = document.createElement('p');
        paragraph.innerText = `
        ${friend.name.title} ${friend.name.first} ${friend.name.last}
        ${friend.email}`;

        buddiesDiv.appendChild(paragraph);


    }

}