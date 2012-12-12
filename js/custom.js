var l_sZCookie = '';

$('#submit').live('vclick', function(e) {
	
	e.preventDefault();
	var params = {
		bath: 			'rest',
		callback: 		'login_success',
		version: 		'1',
		account_login:	$('#username').val(),
		account_password: $('#password').val()
	}

		$.ajax('https://seanapi-dev.ultra.me/partner.php?format=jsonp&partner=portal&command=portal__Login',{
		dataType:'jsonp',
		data: params
    });

});


function login_success(info) {
	if (info.success) {
		l_sZCookie = info.zsession;
		get_info();
	} else {
		alert('failed login');
	}
}

function get_info() {
		var params = {
			bath: 			'rest',
			callback: 		'say_hi',
			version: 		'1',
			zsession: 		l_sZCookie
			
		}

		$.ajax('https://seanapi-dev.ultra.me/partner.php?format=jsonp&partner=api_public&command=portal__CustomerInfo',{
			dataType:'jsonp',
			data: params
	    });
		

}

function say_hi(info) {
	
	$('#info span').html(info.first_name + ' ' + info.last_name);
	$('#login').fadeOut();
	$('#info').delay(1000).fadeIn();
}