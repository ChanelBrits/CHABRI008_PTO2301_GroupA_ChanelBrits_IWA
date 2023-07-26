const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 
const bookElements = Array.from(document.getElementsByClassName('status'));

const updateStatus = () => {
    for (const book of bookElements) {
        const bookStatus = book.innerText; 
        const bookDiv = book.parentElement.parentElement;
        const statusMapEntry = STATUS_MAP[bookStatus];
        
        const reserveButton = bookDiv.querySelector('.reserve');
        const checkOutButton = bookDiv.querySelector('.checkout');
        const checkInButton = bookDiv.querySelector('.checkin');

        book.style.color = statusMapEntry.color;
        reserveButton.disabled = !statusMapEntry.canReserve;
        checkOutButton.disabled = !statusMapEntry.canCheckout;
        checkInButton.disabled = !statusMapEntry.canCheckIn;

        if (statusMapEntry.canCheckIn) {
            checkInButton.style.color = 'black';
        } else {
            checkInButton.style.color = 'gray';
        }
    }
}

updateStatus();