const validAge = age => {
    let epoch = Date.now() - age.getTime();
    let epochConverted = new Date(epoch)

    let currentAge = Math.abs(epochConverted.getUTCFullYear() - 1970);

    if (currentAge >= 21) return true;
    if (currentAge < 21) return false;
}

module.exports = validAge