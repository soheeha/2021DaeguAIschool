/*
Swal.fire(
  'Good job!',
  'You clicked the button!',
  'success'
)
*/

/*
Swal.fire({
  icon: 'error',
  title: '<strong>Oops...</strong>',
  text: 'Something went wrong!',
  // imageUrl: 'https://placeholder.pics/svg/300x1500',
  // imageHeight: 100,
  // imageAlt: 'Test',

  html: 'You can use <b>bold text</b>', 
  footer: '<a href="">Issue?</a>',

  showCloseButton: true,
  showCancelButton: true,
  showDenyButton: true,

  confirmButtonText: '확인!',
  cancelButtonText: '취소',
  denyButtonText: '노!'
}).then(function(result) {
    if(result.isConfirmed) {
        Swal.fire("확인");
    } else if(result.isDenied) {
        Swal.fire("노");
    } else if(result.isDismissed) {
        Swal.fire("취소");
    }
})
*/

/*
Swal.fire({
  // position: 'top-start',
  title: '위치 변경',
  // showConfirmButton: false,
  // timer: 1500,

  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
})
*/


/*
Swal.mixin({
    customClass: {
        confirmButton: 'btn-success-1',
        cancelButton: 'btn-danger-1'
    },
    buttonsStyling: false
}).fire({

    title: 'Title',
    text: 'Text',
    showCancelButton: true,
})
*/


/*
Swal.fire({
    icon: 'warning',
    title: 'title',
    width: 600,
    padding: '20px',
})
*/

/*
(async function() {
    var result = await Swal.fire({
        title: 'Input email address',
        input: 'email',
        inputLabel: 'Your email address',
        inputPlaceholder: 'Enter your email address'
    })

    if(result.value) {
        Swal.fire(`${result.value}`);
    }
})();
*/


/*
Swal.fire({
    title: 'Input email address',
    input: 'email',
    inputLabel: 'Your email address',
    inputPlaceholder: 'Enter your email address'
}).then(function(result) {
    Swal.fire(`${result.value}`);
})
*/


/*
Swal.fire({
    title: 'Input Password',
    input: 'textarea',
    inputLabel: 'Message',
    inputPlaceholder: 'Message',
}).then(function(result) {
    Swal.fire(`${result.value}`);
})
*/




Swal.fire({
    title: 'Select',
    input: 'select',
    inputOptions: {
        'apple': '사과',
        'banana': '바나나',
        'tomato': '토마토'
    },

    showCancelButton: true,
    reverseButtons: true,
    allowOutsideClick: false

}).then(function(result) {
    Swal.fire(`${result.value}`);
})














