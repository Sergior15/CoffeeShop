export default function singlemenuitem(singleMenuItem){
    return `
    <div id='name-info'><h3>${singleMenuItem.FoodorBev}</h3>
    </br>
    <img src='${singleMenuItem.image}' id='main-image' alt='Menu Item image'></img>
    <input class='single-menuitem_id' type='hidden' value="${singleMenuItem.menuItemId}"/>
    
    
    <ul id='FBDetails-list'>
        ${singleMenuItem.fbtypes.map(fbtype => {
            return `
                <li>
                    <input class='fbDetail_Id' type= 'hidden' value='${fbtype.fBDetailsId}'>
                    <h4 class='edit-fbDetails_description'>${fbtype.fBDescription}</h4>
                    <h4 class='fbDetail_price'>${fbtype.price}</h4>
                    <h4 class='fbDetail_calories'>${fbtype.calories}</h4>
                    <h4 class='menuitem_Id' type='hidden' value='${fbtype.menuItemId}'
                </li>
    `;
        })
        .join("")}
    </ul>
    </div>
    `
}