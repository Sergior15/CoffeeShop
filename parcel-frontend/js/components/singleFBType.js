export default function SingleFBType(flavorbyid, fBDetailsId){
    return `
    
    <flavors>
    ${flavorbyid.map(flavor => {
        return `
        <flavor>
        <mai>
            <sst>${flavor.flavorName}</sst>  
            
        </mai>
            <flavorbyidinput>  
            <input class='select-flavor__id' type='hidden' value="${flavor.flavorId}">
            <input class='delete-flavor__id' type='hidden' value="${flavor.flavorId}">
            <button class='delete-flavorId__delete'>Delete Song</button>
            </br>    
            <input class='edit-flavor__flavorId' type='hidden' value="${flavor.flavorId}">
            <input class='edit-flavor_FBdetId' type='hidden' value="${fBDetailsId}">
            <input type="text" class="edit-flavor_name" placeholder="Edit a flavor name.">      
            <button class="edit-flavor_submit">Edit flavor</button>
         </flavorbyidinput>                         
        </flavor>
    `;
    })
    .join("")}
    </flavors>
    <addflavor>
        <h2> Add a Flavor </h2> 
        <input class='add-flavor_fbdetailid' type='hidden' value="${fBDetailsId}">
        <input type="text" class="add-flavor_flavorname" placeholder="Add a flavor.">
        
        <button class="add-flavor_submit"> Submit new flavor</button>
    </addflavor>
    `
}