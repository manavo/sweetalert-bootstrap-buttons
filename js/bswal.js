if (typeof window.swal !== 'undefined') {
	var _swal = window.swal;

	_swal.setDefaults({
		confirmButtonColor: ''
	});

	// Creates the modal, and gets added to the DOM
	// This way we can manipulate it and add classes to buttons
	_swal.enableButtons();

	var confirmButton = $('.sweet-alert button.confirm');
	$('.sweet-alert button').addClass('btn btn-lg');

	$('.sweet-alert button.cancel').addClass('btn-default');

	var bswal = function() {
		confirmButton.removeClass('btn-default btn-primary btn-success btn-danger btn-warning');

		var type = getSwalType(arguments[0], arguments[1], arguments[2]);
		if (type === 'error') {
			type = 'danger';
		}

		confirmButton.addClass('btn-'+type);

		return _swal(arguments[0], arguments[1], arguments[2]);
	};

	bswal.setDefaults = function(userParams) {
		_swal.setDefaults(userParams);
	};

	bswal.close = function() {
		_swal.close();
	};

	bswal.showInputError = function(errorMessage) {
		_swal.showInputError(errorMessage);
	};

	bswal.resetInputError = function(event) {
		_swal.resetInputError(event);
	};

	bswal.disableButtons = function(event) {
		_swal.disableButtons(event);
	};

	bswal.enableButtons = function(event) {
		_swal.enableButtons(event);
	};

	window.sweetAlert = window.swal = bswal;

	function getSwalType() {
		var customizations = arguments[0];

		switch (typeof customizations) {

			// Ex: swal("Hello", "Just testing", "info");
			case 'string':
				return arguments[2] || 'primary';

			// Ex: swal({ title:"Hello", text: "Just testing", type: "info" });
			case 'object':
				return customizations['type'];

		}

		return 'primary';
	}
}
