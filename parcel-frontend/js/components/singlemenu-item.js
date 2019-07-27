export default function singlemenuitem(MenuItem){
    return `
    <div id='name-info'><h3>${MenuItem.FoodorBev}</h3>
    </br>
    <img src='${MenuItem.image}' id='main-image' alt='Menu Item image'></img>
    
    <div id='button-box'>
        <button class='edit-artist'>Edit Menu Item</button>
        <button class='delete-artist'>Delete Menu Item</button>
        <section class='edit-box'>
            <input class='artist_id' type='hidden' value='${MenuItem.MenuItemId}'>
            <input class='edit-menuitem_image' type='hidden' value='${MenuItem.image}'>
            <input class='edit-menuitem_name' type='text' value='${MenuItem.FoodorBev}'>
            <button class='edit-menuitem_submit'>Submit Edit</button>
        </section>
    </div>
    <ul id='FBDetails-list'>
        ${MenuItem.fBDetails.map(fBDetail => {
            return `
                <li>
                    <input class='fbDetail_Id' type= 'hidden' value='${fBDetail.fbDetailsId}'>
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