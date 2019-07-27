export default function fbTypes (fbTypes){
    return `
    <h1>Food and Beverages</h1>
    <fbitems>
        ${fbTypes.map(fBDetails => {
        return `
            <fbitems>
               
                <h4>${fBDetails.fbDescription}</h4>
                
                <h4>$ ${fBDetails.price}</h4>
                
                <h4>${fBDetails.calories} calories</h4>
                <input class='select-menuItem__id' type='hidden' value="${fBDetails.fBDetailsId}">     
            </fbitems>
        `;
    })
    .join("")}
        
    `
}