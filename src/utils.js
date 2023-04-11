function render_template(input_data, template_name) {
    return new Promise(async function (resolve, reject) {
        let opts = {
            method: "GET",
            headers: {
                mimeType: "text/plain; charset=x-user-defined",
                dataType: "text",
            },
        };

        fetch(
            "chrome-extension://" +
            chrome.runtime.id +
            "/src/partials/" +
            template_name +
            ".html",
            opts
        )
            .then((response) => response.text())
            .then(function (template) {
                let html = Mustache.render(template, input_data);
                resolve(html);
            }).catch(err => console.log(err));
    });
}