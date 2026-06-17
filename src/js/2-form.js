const forM = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

forM.addEventListener('input', event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value.trim();

  formData[fieldName] = fieldValue;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});


const data=localStorage.getItem(STORAGE_KEY);

    if(data){
        const parseData = JSON.parse(data);
        formData.email=parseData.email;
        formData.message=parseData.message;

        forM.elements.email.value=formData.email;
        forM.elements.message.value=formData.message;
    };
   

forM.addEventListener('submit', event => {
    event.preventDefault();
    if(formData.email === '' || formData.message === ''){
        alert('Fill please all fields');
    }
    else{
        console.log(formData);
        localStorage.removeItem(STORAGE_KEY);
        forM.reset();
        formData.email = '';
        formData.message = ''; 
    }
});