export default function FbDetail (fbtypes){
    return `
    <h2>Food and Beverages</h2>
    <fbitems>
        ${fbtypes.map(fbDetails => {
        return `
            <album>
                <p>${fbDetails.fbDescription}</p>
                <arl> $${fbDetails.price}</arl> 
                <p>${fbDetails.calories} calories</p>
                <input class='select-fbDetail__id' type='hidden' value="${fbDetails.albumId}">
                <button class="select-fbDetail_select">View Flavors</button>
            </album>                         
        `;
    })
    .join("")}
    </albums>
`
};