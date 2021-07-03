
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

// customer.classList.add('class')

function displayCustomers() {
    for (let customer of customers) {

        //card
        let listElement = document.createElement('li');

        //headshot
        let imageEl = document.createElement('img');
        imageEl.src = customer.picture.large;

        //Name
        let nameBlock = document.createElement('h2');
        nameBlock.innerText = customer.name.first + ' ' + customer.name.last;

        //address
        let addressEl = document.createElement('p');
        addressEl.innerHTML = customer.location.street + '<br>' + customer.location.city + ', ' + getState(customer.location.state) + ' ' + customer.location.postcode;

        //phone numbers
        let homeNumEl = document.createElement('p');
        let cellNumEl = document.createElement('p');
        homeNumEl.innerHTML = 'Home: ' + customer.phone + '<br>' + 'Cell: ' + customer.cell;


        //email
        let emailEl = document.createElement('a');
        emailEl.innerHTML = customer.email;

        //birthdate & registration
        let birthAndRegEl = document.createElement('p');
        let birthDate = moment(customer.dob);
        let regDate = moment(customer.registered);
        birthAndRegEl.innerHTML = 'DOB: ' + birthDate.format('MMM Do, YYYY') + '<br>' + 'Customer since: ' + regDate.format('MMM Do,YYYY');

        //append everything created above
        listElement.appendChild(imageEl);
        listElement.appendChild(nameBlock);
        listElement.appendChild(emailEl);
        listElement.appendChild(homeNumEl);
        listElement.appendChild(cellNumEl);
        // listElement.appendChild(regEl);
        listElement.appendChild(addressEl);
        listElement.appendChild(birthAndRegEl);

        //append the card itself to <ul id='customerCards'></ul>
        customerCards.appendChild(listElement);
    }
}

//call function (totally forgot this for a while, couldn't figure out why nothing was showing up...)
displayCustomers();
