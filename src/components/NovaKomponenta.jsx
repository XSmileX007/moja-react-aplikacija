import { ConditionalRendering } from "./ConditionalRendering";
export function NovaKomponenta() {

    return (
        <div>Neki text iz nove komponente <ConditionalRendering props={2}/></div>
    );
}