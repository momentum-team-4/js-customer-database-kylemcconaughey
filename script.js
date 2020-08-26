
let customerCards = document.querySelector('#customerCards');
// let customer = customers[0];
// console.log('Card: ' + customer.name)

// let listElement = document.createElement('li');
// let imageEl = document.createElement('img');
// imageEl.src = customer.picture.large;
// console.log(imageEl);
// listElement.appendChild(imageEl);
// customerCards.appendChild(listElement);

function getState(st) {
    let stName = st.toUpperCase();
    for (let state of usStates) {
        if (state.name === stName) {
            return state.abbreviation;
        }
    }
}

console.log(getState(customers[0].location.state))

function displayCustomers() {
    for (let i = 0; i < customers.length; i++) {

        //card
        let listElement = document.createElement('li');

        //headshot
        let imageEl = document.createElement('img');
        imageEl.src = customers[i].picture.large;

        //Name
        let nameBlock = document.createElement('h2');
        nameBlock.innerText = customers[i].name.first + ' ' + customers[i].name.last;

        //address
        let addressEl = document.createElement('p');
        addressEl.innerHTML = customers[i].location.street + ' ' + customers[i].location.city + ', ' + getState(customers[i].location.state) + ' ' + customers[i].location.postcode;

        //phone numbers
        let homeNumEl = document.createElement('p');
        homeNumEl.innerHTML = 'Home: ' + customers[i].phone;
        let cellNumEl = document.createElement('p');
        cellNumEl.innerHTML = 'Cell: ' + customers[i].cell;

        //email
        let emailEl = document.createElement('a');
        emailEl.innerHTML = customers[i].email;

        //birthdate
        let birthEl = document.createElement('p');
        birthEl.innerHTML = 'DOB: ' + customers[i].dob.substring(0, 10);

        //date they became a customer (registered)
        let regEl = document.createElement('p');
        regEl.innerHTML = 'Customer since: ' + customers[i].registered.substring(0, 10);

        //append everything created above
        listElement.appendChild(imageEl);
        listElement.appendChild(nameBlock);
        listElement.appendChild(emailEl);
        listElement.appendChild(homeNumEl);
        listElement.appendChild(cellNumEl);
        listElement.appendChild(birthEl);
        listElement.appendChild(regEl);
        listElement.appendChild(addressEl);

        //append the card itself to <ul id='customerCards'></ul>
        customerCards.appendChild(listElement);
    }
}

//call function (totally forgot this for a while, couldn't figure out why nothing was showing up...)
displayCustomers();
