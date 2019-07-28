export default function FbDetail (fbtypes){
    return `
    <h1>Food and Beverages</h1>
    <fbitems>
        ${fbtypes.map(fbtype => {
        return `
            <fbitems>
               
                <h4>${fbtype.fbDescription}</h4>                
                <h4>${fbtype.price}</h4>                
                <h4>${fbtype.calories} Calories</h4>
                <input class='fbdetails__id' type='hidden' value="${fbtype.fBDetailsId}">  
                
                <fbiteminput>
                <input class='delete-fbitem_id' type='hidden' value="${fbtype.fBDetailsId}">
                <button class='delete-fbitemId__delete'>Delete Food or Drink Item</button> 

                
            </fbitems>
        `;

    })
    .join("")}
    </fbitems>    
    `
}