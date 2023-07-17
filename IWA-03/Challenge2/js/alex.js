export const firstName = "Alex"; // Private
export const surname = "Naidoo"; // Private
export const role = "Head of Marketing"; // Public

const display = `${firstName} ${surname} (${role})`; // Private
document.querySelector("#alex").innerText = display;