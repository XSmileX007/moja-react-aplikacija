function isNumber(n){
    return Number(n)=== n;
}

export function ConditionalRendering({props}){

    var rezultatUvijeta = "<p>Ima neki text</p>";
    var isVeci = false;
    if (props === undefined) return;
    if (isNumber(props)){
        if (props > 5) { 
            isVeci = true;
        }
    } else {
        return;
    }
    return (
        <div>
            {isVeci && <p>Poslali ste veci broj: {props}</p>}
            {!isVeci && <p>Poslali ste manji broj: {props}</p>}
        </div>
        );
}