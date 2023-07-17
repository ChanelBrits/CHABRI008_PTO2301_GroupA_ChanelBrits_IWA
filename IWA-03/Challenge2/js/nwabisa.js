export const firstName = "Nwabisa"; // Private
export const surname = "Gabe"; // Private
export const role = "CEO"; // Public

const display = `${firstName} ${surname} (${role})`; // Private
document.querySelector("#nwabisa").innerText = display;