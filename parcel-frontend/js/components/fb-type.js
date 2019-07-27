export default function FbDetail (fbtypes){
    return `
    <h1>Food and Beverages</h1>
    <fbitems>
        ${fbtypes.map(fbtype => {
            return `
            <fbitems>
                <h4>${fbtype.fBDescription}</h4>
                
                <h4>${fbtype.price}</h4>
                
                <h4>${fbtype.calories} Calories</h4>
                <input class='fbdetails__id' type='hidden' value="${fbtype.fBDetailsId}">     
            </fbitems>
        `;

    })
    .join("")}
    </fbitems>    
    `
}