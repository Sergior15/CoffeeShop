export default function Singlemenuitem(singleMenuItem, menuItemId){
    return `
    <div id='name-info'><h3>${singleMenuItem.foodorBev}</h3>
    </br>
    <img src='${singleMenuItem.image}' id='main-image' alt='Menu Item image'></img>
    
    </div>
    
    <ul id='FBDetails-list'>
        ${singleMenuItem.map(fbtype => {
            return `
                <li>
                    <h4>${fbtype.fbDescription}</h4>
                    <button class='select-fbdetailId__select'><h4>${fbtype.fbDescription}</h4></button>
                    <h4 class='fbDetail_price'>$ ${fbtype.price}</h4>
                    <h4 class='fbDetail_calories'>${fbtype.calories} Calories</h4>
                    <div id = 'fbinput'>  
                    <input class='select-fbdetail__id' type='hidden' value="${fbtype.fBDetailsId}">
                    <input class='delete-fbdetail__id' type='hidden' value="${fbtype.fBDetailsId}">
                    <button class='delete-fbdetailId__delete'>Delete Album</button>
                    </br>    
                    <input class='edit-FBdetailId' type='hidden' value="${fbtype.fBDetailsId}">
                    <input class='edit-fbdetail_MenuItemId' type='hidden' value="${menuItemId}">
                    <input type="text" class="edit-fbdetail_name" placeholder="Edit a food or beverage name.">
                    <input type="text" class="edit-fbcalories" placeholder="Edit calories.">
                    <input type="text" class="edit-fbprice" placeholder="Edit price.">

                    <button class="edit-FBdetails_submit">Edit food or beverage details</button>
                    </div>                          

                </li>
                    `;
        })
        .join("")}
        </ul>
        <addfbitem>                
                             
                <input class='add-FBdet_MenuItemId' type='hidden' value='${menuItemId}'>
                <input class="add-_FBdetailname" type="text" placeholder="Add a Food/Beverage item name.">
                <input class="add-FBdetailprice" type="text" placeholder="Add a Food/Beverage price.">
                <input class="add-FBdetailcalories" type="text" placeholder="Add Food/Beverage calories.">
                <button class="add-FBdetails_submit"> Submit</button>
        </addfbitem>
    
    `
}