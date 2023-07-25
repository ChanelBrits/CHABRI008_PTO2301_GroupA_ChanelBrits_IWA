const rootOrder1 = document.querySelector('[data-key="order1"]');
const rootOrder2 = document.querySelector('[data-key="order2"]');
const rootOrder3 = document.querySelector('[data-key="order3"]');
const count = document.getElementsByClassName('count');
const delivery = document.getElementsByClassName('status');
const order1 = {
    biscuits1: rootOrder1.getAttribute('data-biscuits'),
    donuts1: rootOrder1.getAttribute('data-donuts'),
    pancakes1: rootOrder1.getAttribute('data-pancakes'),
    status1: rootOrder1.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending',
}

const order2 = {
    biscuits2: rootOrder2.getAttribute('data-biscuits'),
    donuts2: rootOrder2.getAttribute('data-donuts'),
    pancakes2: rootOrder2.getAttribute('data-pancakes'),
    status2: rootOrder2.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending',
}

const order3 = {
    biscuits3: rootOrder3.getAttribute('data-biscuits'),
    donuts3: rootOrder3.getAttribute('data-donuts'),
    pancakes3: rootOrder3.getAttribute('data-pancakes'),
    status3: rootOrder3.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending',
}
console.log(order1, order2, order3);

count[0].innerHTML = order1.biscuits1;
count[1].innerHTML = order1.donuts1;
count[2].innerHTML = order1.pancakes1;
count[3].innerHTML = order2.biscuits2;
count[4].innerHTML = order2.donuts2;
count[5].innerHTML = order2.pancakes2;
count[6].innerHTML = order3.biscuits3;
count[7].innerHTML = order3.donuts3;
count[8].innerHTML = order3.pancakes3;

delivery[0].innerHTML = order1.status1;
delivery[1].innerHTML = order2.status2;
delivery[2].innerHTML = order3.status3;

