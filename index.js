const customAlert = document.getElementById('customAlert');
        const alertMessage = document.getElementById('alertMessage');

        function showAlert(message) {
            alertMessage.textContent = message;
            customAlert.classList.add('show');
            setTimeout(() => {
                closeAlert();
            }, 5000); 
        }

        function closeAlert() {
            customAlert.classList.remove('show');
        }

        document.getElementById('feedbackForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            const formObject = {};

            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            
            showAlert(`Thank you, ${formObject.name}!`);

            
            console.log('Form Data:', formObject);

            
            this.reset();
        });