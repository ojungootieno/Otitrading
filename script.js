const app_id = "33OpwxLFrlpIGDluvvUiu";

function loginWithDeriv() {
    window.location.href =
        `https://oauth.deriv.com/oauth2/authorize?app_id=${app_id}`;
}

// Check if user has returned from Deriv
window.onload = function () {

    const hash = window.location.hash;

    if (hash.includes("access_token=")) {

        const params = new URLSearchParams(hash.substring(1));

        const token = params.get("access_token");

        if (token) {

            localStorage.setItem("deriv_token", token);

            window.location.href = "dashboard.html";

        }
    }

};
