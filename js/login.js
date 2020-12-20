function login() {
    Swal.fire({
        title: 'Login Form',
        html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
            <input type="password" id="password" class="swal2-input" placeholder="Password">`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Đăng nhập',
        denyButtonText: 'Đăng kí',
        focusConfirm: false,
        preConfirm: () => {
            const login = Swal.getPopup().querySelector('#login').value
            const password = Swal.getPopup().querySelector('#password').value
            if (!login || !password) {
                Swal.showValidationMessage(`Vui lòng nhập tên đăng nhập và mật khẩu`)
            }
            return {
                login: login,
                password: password
            }
        }
    }).then((result) => {
        if (result.isDenied) {
            window.location.href = './signup.html';
        }
        Swal.fire(`
                Login: ${result.value.login}
                Password: ${result.value.password}
            `.trim())
    })
}

function Signup() {
    var user = document.getElementById("taikhoan").value;
    var pass1 = document.getElementById("matkhau1").value;
    var pass2 = document.getElementById("matkhau2").value;
    var email = document.getElementById("email").value;
    if (user && pass1 && pass2 && email) {
        if (pass1 !== pass2) {
            Swal.fire({
                text: "Vui lòng nhập mật khẩu trùng nhau!",
                icon: "warning",
                button: "OK!",
            });
        } else {
            if (email.includes("@gmail.com") || email.includes("@outlook.com") || email.includes("@yahoo.com")) {
                Swal.fire({
                    text: "Bạn đã đăng ký thành công!",
                    icon: "success",
                    button: "OK!",
                });
                window.location.replace("signedin.html")
            } else {
                Swal.fire({
                    text: "Vui lòng nhập email đúng định dạng!",
                    icon: "warning",
                    button: "OK!",
                });
            }
        }
    } else {

        Swal.fire({
            text: "Vui lòng nhập đầy đủ thông tin!",
            icon: "warning",
            button: "OK!",
        });
    }
}