import showAlert from './button';
import Swal from 'sweetalert2';
jest.mock('sweetalert2');

describe('function showAlert', () => {
    it('should call sweet alert', () => {
        showAlert();

        expect(Swal.fire).toBeCalledTimes(1);
        expect(Swal.fire).toBeCalledWith({
            title: 'Success',
            text: 'You have been alerted!',
            icon: 'success',
            confirmButtonText: 'Cool'
        });
    });
});