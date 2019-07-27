export default function Flavors (flavors){
    return `
    <h2> All Flavors </h2>
    <div id='flavor'>
        ${flavors.map(flavor => {
        return `
            <flavor>
               
            <h4>${flavor.flavorName}</h4>
            <input class='flavor_id' type='hidden' value="${flavor.flavorId}"/>     
            </flavor>
        `;

    })
    .join("")}
    </div>    
    `
}