export default function singlemenuitem(singleMenuItem){
    return `
    <div id='name-info'><h3>${singleMenuItem.foodorBev}</h3>
    </br>
    <img src='${singleMenuItem.image}' id='main-image' alt='Menu Item image'></img>
    <input class='single-menuitem_id' type='hidden' value="${singleMenuItem.menuItemId}"/>
    
    
    <ul id='FBDetails-list'>
        ${singleMenuItem.fbDetails.map(fbtype => {
            return `
                <li>
                    <input class='fbDetail_Id' type= 'hidden' value='${fbtype.fBDetailsId}'>
                    <h4 class='edit-fbDetails_description'>${fbtype.fbDescription}</h4>
                    <h4 class='fbDetail_price'>$ ${fbtype.price}</h4>
                    <h4 class='fbDetail_calories'>${fbtype.calories} Calories</h4>
                    </li>
                    `;
        })
        .join("")}
        </ul>
        <addfbitem>
                
                  <input class='add-_fbdetailsid' type='hidden' value='${singleMenuItem.fBDetailsId}'>             
                <input class='add-menuitem_Id' type='hidden' value='${singleMenuItem.menuItemId}'>
                <input class="add-fbItem_name" type="text" placeholder="Add a Food/Beverage item name.">
                <input class="add-fbItem_price" type="text" placeholder="Add a Food/Beverage price.">
                <input class="add-fbItem_calories" type="text" placeholder="Add Food/Beverage calories.">
                <button class="add-fbItem_submit"> Submit</button>
        </addfbitem>
    
    `
}