import { 
    html, 
    createOrderHtml, 
    moveToColumn,
    updateDraggingHtml
} from "./view.js";

import {
    createOrderData,
    state,
    updateDragging
} from "./data.js";


/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}

const clearForm = (formElement) => {
    if (formElement) {
        formElement.reset()};
}

const closeOverlay = (overlayElement, formElement) => {
    overlayElement.style.display = 'none'
    clearForm(formElement);
    html.other.add.focus()
}

/**
 * A handler that fires when the user clicks the "Add Order" button. Manages the
 * toggling of the relevant overlay. It then sets up event listeners for the
 * "Add Order" button and the "Cancel" button, responding by displaying the
 * overlay or closing it respectively.
 * 
 * @param {Event} event - The event object that triggers the function.
 */
const handleAddToggle = (event) => {
   const {
    overlay: addOverlay,
    cancel: addCancel,
    form: addForm
   } = html.add

   const addOrderButton = document.querySelector('[ data-add ]');
   
   addOrderButton.addEventListener('click', () => {
    addOverlay.style.display = 'block';
   })
   
   addCancel.addEventListener('click', () => {
    closeOverlay(addOverlay, addForm);
   })
}

/**
 * A handler that fires when the user submits the "Add Order" form by clicking
 * the "Add" button. This function extracts values from the title and table
 * inputs. The extracted data is used to create a new object called
 * "CollectedOrder", which is then added to the state object. The new order is
 * rendered in the HTML display and appended to the "Ordered column". Finally,
 * the overlay is closed.
 *
 * @param {Event} event - The event object that triggers the function.
 */
const handleAddSubmit = (event) => {
    event.preventDefault();
    const {
        title: addTitle,
        table: addTable,
        overlay: addOverlay,
        form: addForm
    } = html.add
    
    const addTitleValue = addTitle.value;
    const addTableValue = addTable.value;

    const collectedOrder = createOrderData({
        title: addTitleValue,
        table: addTableValue,
        column: 'ordered'
    });

    state.orders[collectedOrder.id] = collectedOrder;


    const orderElement = createOrderHtml(collectedOrder);
    orderElement.dataset.id = collectedOrder.id;

    const orderColumn = document.querySelector('[data-column="ordered"]');
    orderColumn.appendChild(orderElement);

    closeOverlay(addOverlay, addForm);
}


let clickedOrderID = null;

/**
 * A handler similar to {@link handleAddToggle}, but it manages the toggling of
 * the overlay on the order block itself. It retrieves the unique order ID from
 * the clicked block, the order ID is stored in the global variable
 * `clickedOrderID` for use in subsequent functions.
 *
 * @param {Event} event 
 */
const handleEditToggle = (event) => {
    const {
        overlay: editOverlay,
        form: editForm,
        cancel: editCancel,
        column: editStatus,
        table: editTable
    } = html.edit
    
    const orderBlock = event.target;
    clickedOrderID = orderBlock.dataset.id;

    const existingOrder = state.orders[clickedOrderID];

    const existingTable = existingOrder.table;
    const existingColumn = existingOrder.column

    editTable.value = existingTable;
    editStatus.value = existingColumn;


    orderBlock.addEventListener('click', () => {
        editOverlay.style.display = 'block';
    })

    editCancel.addEventListener('click', () => {
        closeOverlay(editOverlay, editForm);
    })
}

/**
 * A handler that fires when the user submits the "Edit Order" form by clicking
 * the "Update" button. This function extracts values from the inputs in the
 * edit form. The extracted data is used to update the properties of the
 * existing order object stored in the state object, while keeping the unique ID
 * and creation time. The corresponding order element in the HTML display is
 * replaced with an updated version reflecting the changes. The order is also
 * moved to the selected column, if necessary. Finally, the edit overlay is
 * closed, resetting the form.
 *
 * @param {Event} event - The event object that triggers the function.
 */
const handleEditSubmit = (event) => {
    event.preventDefault();

    const {
        title: editTitle,
        table: editTable,
        overlay: editOverlay,
        column: editStatus,
        form: editForm
    } = html.edit;

    const existingOrder = state.orders[clickedOrderID];
    const existingOrderElement = document.querySelector(`[data-id="${clickedOrderID}"]`);

    const editTitleValue = editTitle.value;
    const editTableValue = editTable.value;
    const editStatusValue = editStatus.value;

    existingOrder.title = editTitleValue;
    existingOrder.table = editTableValue;
    existingOrder.column = editStatusValue;

    const updatedOrderElement = createOrderHtml(existingOrder);
    existingOrderElement.replaceWith(updatedOrderElement);

    moveToColumn(clickedOrderID, editStatusValue);
    
    closeOverlay(editOverlay, editForm);
}

/**
 * A handler that fires when the user clicks the "Delete" button in the edit
 * overlay. This function retrieves the order ID, and locates the corresponding
 * order element in the HTML display. The order object is then removed from the
 * state object, effectively deleting the order. The HTML element is removed
 * from the display, and the edit overlay is closed, resetting the form.
 *
 * @param {Event} event - The event object that triggers the function.
 */
const handleDelete = (event) => {
    event.preventDefault();

    const {
        overlay: editOverlay,
        form: editForm
    } = html.edit

    const existingOrderElement = document.querySelector(`[data-id="${clickedOrderID}"]`);

    delete state.orders[clickedOrderID];
    existingOrderElement.remove();

    closeOverlay(editOverlay, editForm);
}

/**
 * A handler that fires when the user clicks the "Help" icon. When clicked,
 * the function displays the Help overlay. When the Cancel button in
 * the Help overlay is clicked, it closes the overlay.
 *
 * @param {Event} event - The event object that triggers the function.
 */
const handleHelpToggle = (event) => {
    const {
        overlay: helpOverlay,
        cancel: helpCancel
    } = html.help

    helpButton.addEventListener('click', () => {
        helpOverlay.style.display = 'block';
       })
       
       helpCancel.addEventListener('click', () => {
        closeOverlay(helpOverlay,);
       })
}

/**
 * A handler that fires when an order is dragged. It adds the 'dragging' class
 * to the target element.
 *
 * @param {Event} event - The drag start event object.
 */
const handleDragStart = (event) => {
    const { target } = event;
    target.classList.add('dragging');
}

/**
 * A handler that fires when the user stops dragging an order. It removes the
 * 'dragging' class from the target element and it then moves an order to a
 * different column and updates the html elements.
 *
 * @param {Event} event - The drag end event object.
 */
const handleDragEnd = (event) => {
    const { target } = event;
    target.classList.remove('dragging');

    const orderId = event.target.dataset.id
    const targetColumn = state.dragging.over;

    const targetColumnElement = document.querySelector(`[data-area="${targetColumn}"]`);
    
    if (targetColumnElement) {
        moveToColumn(orderId, targetColumn);
    }

    const editStatus = html.edit.column;
    editStatus.value = targetColumn;

    updateDragging({ over: null });
    updateDraggingHtml({ over: null }); 
}

const addButton = document.querySelector ('.button_primary[type="submit"][form="add-form"]');
addButton.setAttribute('data-add-submit', '')

html.add.cancel.addEventListener('click', handleAddToggle);
addButton.addEventListener('click', handleAddSubmit);

const updateButton = document.querySelector('.button_primary[type="submit"][form="edit-form"]')
updateButton.setAttribute('data-update-submit', '');

html.edit.cancel.addEventListener('click', handleEditToggle);
updateButton.addEventListener('click', handleEditSubmit);
html.edit.delete.addEventListener('click', handleDelete)

html.other.add.addEventListener('click', handleAddToggle)
html.other.help.addEventListener('click', handleHelpToggle)
html.other.grid.addEventListener('click', handleEditToggle)

const helpButton = document.querySelector('[data-help]');
helpButton.addEventListener('click', handleHelpToggle);
html.help.cancel.addEventListener('click', handleHelpToggle);


for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}