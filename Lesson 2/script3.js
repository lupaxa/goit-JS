// апишите код, который будет запрашивать логин пользователя (prompt).

// Если посетитель вводит 'admin', то спрашивать пароль, если нажал отмена (escape) — 
// выводить 'Canceled', если вводит что-то другое — 'Access denied'.

// Пароль проверять так. Если введён пароль 'passw0rd', то выводить 'Welcome home!', 
// иначе — 'Wrong password', при отмене — 'Canceled'.

 

var login = prompt("введите login");

	if (login !="admin") {

		if (login == null) {
			alert("Canceled");
		} else{
			alert("Access denied");
		};
	} else{
		password = prompt("введите password"); 
		if ( password == "passw0rd") {
			alert("Welcome home!");
		} else{
			alert("Wrong password");
		};
	};





