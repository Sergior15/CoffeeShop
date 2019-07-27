export default function fbtype (fbTypes){
    return `
    <h1>Food and Beverages</h1>
    <fbitems>
        ${fbTypes.map(fbDetails => {
        return `
            <fbitems>
               
                <h4>${fbDetails.fbDescription}</h4>
                
                <h4>$ ${fbDetails.price}</h4>
                
                <h4>${fbDetails.calories} calories</h4>
                <input class='select-menuItem__id' type='hidden' value="${fbDetails.fbDetailsId}">     
            </fbitems>
        `;
    })
    .join("")}
        
    `
}