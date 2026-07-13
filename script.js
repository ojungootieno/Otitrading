const app_id = "33OpwxLFrlpIGDluvvUiu";

function loginWithDeriv() {
    window.location.href =
"https://oauth.deriv.com/oauth2/authorize?app_id=" + app_id + "&l=EN";
}

// Check if user returned from Deriv
window.onload = function () {
    const url = window.location.href;

    if (url.includes("token=") || url.includes("code=")) {
    localStorage.setItem("deriv_login", "true");
    window.location.href = "dashboard.html";
    }
};
