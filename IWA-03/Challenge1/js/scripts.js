import { company } from './config.js'
import { year } from './config.js'

const message = `© ${company} (${year})` // © ACME Inc. (2022)
document.querySelector('footer').innerText = message