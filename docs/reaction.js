function getReactionText(prediction) {
    const morado = prediction[0].probability >= 0.50;
    const verde = prediction[1].probability >= 0.50;
    const rojo = prediction[2].probability >= 0.50;


    if(morado){
        return "Toma un milkshake de mora"
    } else if(verde){
        return "Toma un milkshake verde"
    } else if(rojo){
        return "Toma un milkshake de frutos rojos"
    } else {
        return "hello (˶˃ ᵕ ˂˶) .ᐟ.ᐟ"
    }
}


function reaction2prediction(prediction) {
    const fireElement = document.getElementById("txt-reaction");
    const reactionText = getReactionText(prediction);
    fireElement.textContent = reactionText;

}