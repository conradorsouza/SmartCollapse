var storedDefaultText = "";

$.fn.smartHide = function () {
    storedDefaultText = this.text();
    removeChars(this, 30, 1);
};

$.fn.smartShow = function () {
    addChars(this, 30, 1, storedDefaultText);
};


function addChars(targetDiv, numberOfChars, delay, defaultText) {

    var finalText = "";
    finalText = defaultText;

    var initialLength = 0;
    initialLength = targetDiv.text().length !== undefined ? targetDiv.text().length : 0;

    if (initialLength <= finalText.length) {

        setTimeout(function () {
            var tempText = "";

            tempText = finalText.slice(0, targetDiv.text().length + numberOfChars);
            targetDiv.html(tempText);

            addChars(targetDiv, numberOfChars, delay, defaultText);
        }, delay);
    }

}

function removeChars(targetDiv, numberOfChars, delay) {

    if (targetDiv.text().length !== undefined) {
        if (targetDiv.text().length > 0) {

            setTimeout(function () {
                var tempText = "";
                tempText = targetDiv.text();
                tempText = tempText.slice(0, tempText.length - numberOfChars);
                targetDiv.html(tempText);

                removeChars(targetDiv, numberOfChars, delay);

            }, delay);
        }
    }
}