function format(type, string, keyPressed) {
    switch (type) {
        case 'number': {
            if (!keyPressed) return string;

            return string.replace(/([^0-9]|\s)/g, '').match(/.{1,4}/g)?.join(' ') || '';
        }

        case 'holder': {
            return string.replace(/[^A-Za-z\s.-]/g, '').toUpperCase();
        }

        case 'valid': {
            if (!keyPressed) return string;

            if (string.length == 3) {
                if(keyPressed == '/') string = string.substring(0, 2) + '/';
                else string = string.substring(0, 2) + '/' + keyPressed;
            }

            return string.replace(/[^0-9/]/g, '');
        }

        case 'ccv': {
            return string.replace(/[^0-9]/g, '');
        }

        default: {
            return string;
        }
    }
}

export default format;