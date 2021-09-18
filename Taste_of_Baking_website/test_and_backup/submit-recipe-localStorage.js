
        //------------------------------- Test Code -----------------------------

       /* const formId = "comments-form"; // ID of the form
        const url = location.href; //  href for the page
        const formIdentifier = `${url} ${formId}`; // Identifier used to identify the form
        
        const submitButton = document.querySelector("#submit-btn"); // select save button
        
        
        
        let form = document.querySelector(`#${formId}`); // select form
        let formElements = form.elements; // get the elements in the form
        
        const getFormData = () => {
        
            let data = { [formIdentifier]: {} }; 
            for (const element of formElements) {
                if (element.name.length > 0) {
                    data[formIdentifier][element.name] = element.value;
                }
            }
            return data;
        };
        
        
        
        submitButton.onclick = event => {
            //event.preventDefault();
            data = getFormData();
            populateForm();
            localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
            
        };
        
        
        
        
        const populateForm = () => {
            if (localStorage.key(formIdentifier)) {
                const savedData = JSON.parse(localStorage.getItem(formIdentifier)); // get and parse the saved data from localStorage
                for (const element of formElements) {
                    if (element.name in savedData) {
                        element.value = savedData[element.name];
                    }
                }
            }
        };*/
        //-------------------------------- Test code -----------------------------