export default function Flavors (flavors){
    return `
    <h2> All Flavors </h2>
    </br>
    </br>
    <div id='flavor'>
        ${flavors.map(flavor => {
        return `
            <flavor>
               
            <h3>${flavor.flavorName}</h3>
            <input class='flavor_id' type='hidden' value="${flavor.flavorId}"/>     
            </flavor>
        `;

    })
    .join("")}
    </div>    
    `
}