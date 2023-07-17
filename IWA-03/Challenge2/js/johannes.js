export const firstName = "Johannes"; // Private
export const surname = "Potgieter"; // Private
export const role = "Intern"; // Public

const display = `${firstName} ${surname} (${role})`; // Private
document.querySelector("#johannes").innerText = display;