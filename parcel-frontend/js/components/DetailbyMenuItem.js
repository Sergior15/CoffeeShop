import FbDetail from "./fb-type";

export default function AlbumsByArtist(detailbyid, menuItemId){
    return `
    
    <fbsbyid>
    ${detailbyid.map(fbDetail => {
        return `
        <fbbyid>
            <p>${fbDetail.fBDescription}</p>
            <p>${fbDetail.price}</p>
            <p>${fbDetail.calories}</p>
            <fbbyidinput>  
            <button class="select-fbDetail_select">View Flavors</button>
            <input class='select-fbDetail__id' type='hidden' value="${fbDetail.fBDetailsId}">
            <input class='delete-fbDetail__id' type='hidden' value="${fbDetail.fBDetailsId}">
            <button class='delete-fbDetailId__delete'>Delete Food/Beverage.</button>
            </br>    
            <input class='edit-fbDetail_fbDetailId' type='hidden' value="${fbDetail.albumId}">
            <input class='edit-fbDetail_menuItemId' type='hidden' value="${menuItemId}">
            <input type="text" class="edit-fbDetail_description" placeholder="Edit Food/Beverage name.">
            <input type="text" class="edit-fbDetail_calories" placeholder="Edit calories.">
            <input type="text" class="edit-fbDetail_price" placeholder="Edit price.">
            <button class="edit-fbDetail_submit">Edit Food/Beverage</button>
            </fbbyidinput>                                  
            </fbbyid>
            `;
    })
    .join("")}
    </fbsbyid>
    <addfb>
        <h2 style="font-size: 30px;"> Add a Food/Beverage </h2> 
        <input class='add-fbDetail_menuItemId' type='hidden' value="${menuItemId}">
        <input type="text" class="add-fbDetail_description" placeholder="Add a Food/Beverage.">
        <input type="text" class="add-fbDetail_calories" placeholder="Add calories.">
        <input type="text" class="add-fbDetail_price" placeholder="Add a price.">
        <button style="padding: 0 2vw;" class="add-fbDetail_submit"> Submit</button>
    </addfb>
    `
};