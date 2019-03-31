function Machine() {
    this.translateOrder = function(drink, numberOfSugars) {
        if (numberOfSugars === 0) {
            return drink + '::';
        }
        return drink + ':' + numberOfSugars + ':0';
    }
}

module.exports = Machine;
