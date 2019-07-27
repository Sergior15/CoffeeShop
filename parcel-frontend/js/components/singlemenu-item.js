export default function singlemenuitem(MenuItem){
    return `
    <div id='name-info'><h3>${MenuItem.FoodorBev}</h3>
    </br>
    <img src='${MenuItem.image}' id='main-image' alt='Menu Item image'></img>
    
    
    <ul id='FBDetails-list'>
        ${MenuItem.fBDetails.map(fBDetail => {
            return `
                <li>
                    <input class='fbDetail_Id' type= 'hidden' value='${fBDetail.fBDetailsId}'>
                    <h4 class='edit-fbDetails_description'>${fBDetail.FBDescription}</h4>
                    <h4 class='fbDetail_price'>${fBDetail.price}</h4>
                    <h4 class='fbDetail_calories'>${fBDetail.calories}</h4>
                    <h4 class='menuitem_Id' type='hidden' value='${fBDetail.MenuItemId}'
                </li>
    `;
        })
        .join("")}
    </ul>
    </div>
    `
}