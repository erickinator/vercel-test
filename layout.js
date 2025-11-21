document.addEventListener('DOMContentLoaded', () => {
    injectFragment('site-header', 'partials/header.html');
    injectFragment('site-footer', 'partials/footer.html');
});

function injectFragment(targetId, url) {
    const target = document.getElementById(targetId);
    if (!target) {
        return;
    }

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${url}: ${response.status}`);
            }
            return response.text();
        })
        .then((html) => {
            target.innerHTML = html;
        })
        .catch((error) => {
            console.error(error);
        });
}
