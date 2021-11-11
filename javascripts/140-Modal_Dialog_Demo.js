$(document).ready(function () {
    $('#open-modal-button').on('click', function () {
       $('#exampleModal').modal({
          backdrop: false,
          keyboard: false
       });
       return false;
    });
});