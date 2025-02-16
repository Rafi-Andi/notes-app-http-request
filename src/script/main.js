import './component/index.js'
import './data/inputData.js'
import './data/data.js'


const toggleForm = document.querySelector('#toggleForm')
const form = document.querySelector('form')
toggleForm.addEventListener('click', () => {
    form.classList.toggle('aktif')
})


