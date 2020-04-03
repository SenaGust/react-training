import Swal from 'sweetalert2';

function showAlert() {
    Swal.fire({
      title: 'Success',
      text: 'You have been alerted!',
      icon: 'success',
      confirmButtonText: 'Cool'
    });
}

export default showAlert;
