export const selectDispensariesByName = (obj, fragment) => {
    const dispensaries = Object.values(obj);
    return dispensaries.filter( ele => ele.dispensaryName.includes(fragment));
}