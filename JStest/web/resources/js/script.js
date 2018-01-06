function func() {
    if (document.getElementById("chkbx").checked) {
        document.getElementById("t_area").readOnly = true;
    } else {
        document.getElementById("t_area").readOnly = false;
    }
}