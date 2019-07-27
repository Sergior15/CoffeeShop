export default function fbTypes (fbTypes){
    return `
    <h1>Food and Beverages</h1>
    <fbitems>
        ${fbTypes.map(fbDetails => {
        return `
            <fbitems>
               
                <h4>${fbDetails.fBDescription}</h4>
                
                <h4>$ ${fbDetails.price}</h4>
                
                <h4>${fbDetails.calories} Calories</h4>
                <input class='fbdetails__id' type='hidden' value="${fbDetails.fBDetailsId}">     
            </fbitems>
        `;
    })
    .join("")}
        
    `
}