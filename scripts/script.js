window.onload = function () {


    let chose = document.getElementById('chose');

    let check = chose.onchange = () => {
        if (chose.checked) {
            return true;
        } else {
            return false;
        }
    };

    let reg1 = /^[A-Za-zА-Яа-яЁё\s]+$/g;
    let reg2 = /^[а-яА-ЯёЁa-zA-Z0-9\-\_]+$/g;
    let reg3 = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/g;
    let reg4 = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g;


    let fullname = document.getElementById('name');
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let p1 = document.getElementById('password');
    let p2 = document.getElementById('repassword');
    let popup = document.getElementById('popup');



    document.getElementById('button').onclick = function () {
        let errorFlag = false;

        fullname.style.borderBottomColor = '#C6C6C4';
        username.style.borderBottomColor = '#C6C6C4';
        email.style.borderBottomColor = '#C6C6C4';
        p1.style.borderBottomColor = '#C6C6C4';
        p2.style.borderBottomColor = '#C6C6C4';
        chose.style.borderBottomColor = '#C6C6C4';


        let errors = document.querySelectorAll('.error');


        for (let i = 0; i < errors.length; i++) {
            errors[i].remove();
        }

        if (!fullname.value) {

            let error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'red';
            error.innerHTML = 'Заполните поле Full Name';
            fullname.after(error);
            errorFlag = true;
            fullname.style.borderBottomColor = 'red';

        } else if (!fullname.value.match(reg1)) {

            let error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'red';
            error.innerHTML = 'Содержит буквы и пробел';
            fullname.after(error);
            errorFlag = true;
            fullname.style.borderBottomColor = 'red';

        }
        if (!username.value) {

            let error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'red';
            error.innerHTML = 'Заполните поле Your username';
            username.after(error);
            errorFlag = true;
            username.style.borderBottomColor = 'red';

        } else if (!username.value.match(reg2)) {

            let error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'red';
            error.innerHTML = 'Содержит буквы, цифры, символ подчеркивания и тире';
            username.after(error);
            errorFlag = true;
            username.style.borderBottomColor = 'red';

        }
        if (!email.value) {

            let error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'red';
            error.innerHTML = 'Заполните поле E-mail';
            email.after(error);
            errorFlag = true;
            email.style.borderBottomColor = 'red';

        } else if (!email.value.match(reg3)) {

            let error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'red';
            error.innerHTML = 'Пример заполнения nata@mail.ru';
            email.after(error);
            errorFlag = true;
            email.style.borderBottomColor = 'red';

        }
        if (!p1.value) {

            let error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'red';
            error.innerHTML = 'Заполните поле Password';
            p1.after(error);
            p1.style.borderBottomColor = 'red';
            errorFlag = true;

        } else if (!p1.value.match(reg4)) {

            let error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'red';
            error.innerHTML = 'Обязательно хотя бы одна буква в верхнем регистре, хотя бы одна цифра, хотя бы один спецсимвол, всего не менее 8 символов';
            p1.after(error);
            p1.style.borderBottomColor = 'red';
            errorFlag = true;

        }
        if (!p2.value) {

            let error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'red';
            error.innerHTML = 'Заполните поле Repeat Password';
            p2.after(error);
            p2.style.borderBottomColor = 'red';
            errorFlag = true;

        } else if (!p2.value.match(reg4)) {

            let error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'red';
            error.innerHTML = 'Продублируйте поле password';
            p2.after(error);
            p2.style.borderBottomColor = 'red';
            errorFlag = true;

        } else if (p1.value !== p2.value) {

            let error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'red';
            error.innerHTML = 'Поля password и repeat password должны совпадать';
            p2.after(error);
            p2.style.borderBottomColor = 'red';
            errorFlag = true;

        }
        if (check() !== true) {

            let error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'red';
            error.innerHTML = 'Заполните соглашение';
            chose.parentNode.after(error);
            chose.style.borderBottomColor = 'red';
            errorFlag = true;

        }
        if (!errorFlag) {

            popup.style.display = "flex";
        }

    };


    document.getElementById('btn').onclick = function () {
        popup.style.display = "none";

        let userObj = {
            fullname: fullname.value,
            username: username.value,
            email: email.value,
            p1: p1.value,
            p2: p2.value,
            chose: chose.value,
        };

        let clientsArray = JSON.parse(localStorage.getItem('clientsArray')) || [];
        clientsArray.push(userObj);
        localStorage.setItem('clientsArray', JSON.stringify(clientsArray));

        fullname.value = '';
        username.value = '';
        email.value = '';
        p1.value = '';
        p2.value = '';
        chose.checked = false;
        inaccount();

    };


    let account = document.getElementById('link');
    let button2 = document.getElementById('button');


    account.onclick = inaccount;

    function inaccount() {

        document.getElementsByClassName('title')[0].innerText = "Log in to the system";
        document.getElementsByClassName('fullname')[0].remove();
        document.getElementsByClassName('email')[0].remove();
        document.getElementsByClassName('repassword')[0].remove();
        document.getElementsByClassName('checkbox')[0].remove();
        button2.innerText = "Sign In";



        account.textContent = 'Registration';

        account.onclick = function () {
            location.reload();
        };


        button2.onclick = function () {

            let errors = document.querySelectorAll('.error');

            for (let i = 0; i < errors.length; i++) {
                errors[i].remove();
            }

            if (!username.value) {
                let error = document.createElement('div');
                error.className = 'error';
                error.style.color = 'red';
                error.innerHTML = 'Заполните поле Your username';
                username.after(error);

            } else if (!p1.value) {
                let error = document.createElement('div');
                error.className = 'error';
                error.style.color = 'red';
                error.innerHTML = 'Заполните поле Password';
                p1.after(error);

            } else {


                let getClientsArray = localStorage.getItem('clientsArray') || [];
                if (getClientsArray !== []) {

                    getClientsArray = JSON.parse(getClientsArray);
                    console.log(getClientsArray);
                }
                let user = null;

                for (let i = 0; i < getClientsArray.length; i++) {


                    if (getClientsArray[i].username === username.value) {
                        user = getClientsArray[i];
                        break;
                    }
                }

                    if (!user) {
                        let error = document.createElement('div');
                        error.className = 'error';
                        error.style.color = 'red';
                        error.innerHTML = 'Такого пользователя нет';
                        username.after(error);
                        return;

                    }
                     if (user.p1 !== p1.value) {
                        let error = document.createElement('div');
                        error.className = 'error';
                        error.style.color = 'red';
                        error.innerHTML = 'Неверный пароль';
                        p1.after(error);
                        return;
                    }

                        document.getElementsByClassName('title')[0].innerText = "Welcome, " + user.fullname + " !";
                        document.getElementsByClassName('username')[0].remove();
                        document.getElementsByClassName('password')[0].remove();
                        document.getElementsByClassName('text')[0].remove();
                        document.getElementsByClassName('title')[0].style.textAlign = "center";
                        account.hidden = true;
                        button2.innerText = "Exit";


                        account.onclick = function () {
                            location.reload()
                        };


                        button2.onclick = function () {
                            location.reload()
                        };
            }
        }

    }
};
