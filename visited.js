if(!localStorage.getItem("visited")){
	localStorage.setItem("visited", "yes");
	Swal.fire({
            title: 'Welcome new visitor 😊',
            text: 'Notification hide in 1 sec',
            showConfirmButton: false,
            position: 'top-end',
            timer: 1000
           })
           var func = function() {
              location.reload(true);
              tr.hide();
           };
}