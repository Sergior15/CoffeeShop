export default function singlefbDetail(singleFbDetail){
    return `
    <div id='name-info'><h3>${singleFbDetail.}</h3>
    </br>
    <img src='${flavor.image}' id='main-image' alt='Menu Item image'></img>
    <input class='single-menuitem_id' type='hidden' value="${singleFbDetail.fbDetailsId}"/>
    
    
    <ul id='FBDetails-list'>
        ${singleFbDetail.flavors.map(flavor => {
            return `
                <li>
                    <input class='fbDetail_Id' type= 'hidden' value='${flavor.flavorId}'>
                    <h4 class='edit-fbDetails_description'>${flavor.flavorName}</h4>
                    <h4 class='flavor_price'>$ ${flavor.price}</h4>                    
                    </li>
                    <addmenuitem>             
                            <input class='add-menuitem_Id' type='hidden' value='${flavor.menuItemId}'>
                            <input class="add-fbItem_name" type="text" placeholder="Add a Food/Beverage item.">
                            <input class="add-fbItem_image" type="text" placeholder="Add a Food/Beverage image.">
                            <button class="add-fbItem_submit"> Submit</button>
                    </addmenuitem>
    `;
        })
        .join("")}
    </ul>
    
    `
}