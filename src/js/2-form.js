const forM=document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formData={
    email: "",
    message: "" ,

};

forM.addEventListener('input', (el)=>{

localStorage.setItem('formData', JSON.stringify(formData));

});
