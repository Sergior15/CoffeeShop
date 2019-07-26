using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CoffeeShop.Migrations
{
    public partial class FirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FBDetails",
                columns: table => new
                {
                    FBDetailsId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Price = table.Column<string>(nullable: true),
                    Calories = table.Column<string>(nullable: true),
                    FBDescription = table.Column<string>(nullable: true),
                    MenuItemId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FBDetails", x => x.FBDetailsId);
                });

            migrationBuilder.CreateTable(
                name: "MenuItems",
                columns: table => new
                {
                    MenuItemId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FoodorBev = table.Column<string>(nullable: true),
                    Image = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MenuItems", x => x.MenuItemId);
                });

            migrationBuilder.CreateTable(
                name: "Flavors",
                columns: table => new
                {
                    FlavorId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FlavorName = table.Column<string>(nullable: true),
                    FBDetailsId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Flavors", x => x.FlavorId);
                    table.ForeignKey(
                        name: "FK_Flavors_FBDetails_FBDetailsId",
                        column: x => x.FBDetailsId,
                        principalTable: "FBDetails",
                        principalColumn: "FBDetailsId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "FBDetails",
                columns: new[] { "FBDetailsId", "Calories", "FBDescription", "MenuItemId", "Price" },
                values: new object[,]
                {
                    { 1, "14", "Cold Brew", 1, "2.15" },
                    { 2, "100", "Mocha", 1, "2.25" },
                    { 3, "0", "Green", 2, "2.05" },
                    { 4, "10", "Black", 2, "2.10" },
                    { 5, "230", "Jumbo", 3, "3.00" },
                    { 6, "150", "Health nut", 3, "4.00" },
                    { 7, "178", "Whole grain", 4, "3.50" },
                    { 8, "290", "Mini", 4, "2.75" }
                });

            migrationBuilder.InsertData(
                table: "MenuItems",
                columns: new[] { "MenuItemId", "FoodorBev", "Image" },
                values: new object[,]
                {
                    { 1, "Coffee", "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1072007868%2F960x0.jpg%3Ffit%3Dscale" },
                    { 2, "Tea", "https://cdn-prod.medicalnewstoday.com/content/images/articles/324/324771/close-up-of-a-cup-of-tea.jpg" },
                    { 3, "Muffin", "https://i2.wp.com/wellplated.com/wp-content/uploads/2017/04/Low-Sugar-Healthy-Blueberry-Muffins.jpg" },
                    { 4, "Bagel", "https://images.squarespace-cdn.com/content/5aa2d63e8f5130d49647afa1/1522333087444-J755FJ540LZ8IWK6W06G/Bagels.jpg?content-type=image%2Fjpeg" }
                });

            migrationBuilder.InsertData(
                table: "Flavors",
                columns: new[] { "FlavorId", "FBDetailsId", "FlavorName" },
                values: new object[,]
                {
                    { 1, 1, "Black" },
                    { 2, 1, "With skim milk" },
                    { 3, 2, "White chocolate" },
                    { 4, 2, "Dark chocolate" },
                    { 5, 3, "Raspberry" },
                    { 6, 3, "Matcha" },
                    { 7, 4, "English Breakfast" },
                    { 8, 4, "Chai" },
                    { 9, 5, "Chocolate chip" },
                    { 10, 5, "Blueberry" },
                    { 11, 6, "Cranberry orange" },
                    { 12, 6, "Bran raisin" },
                    { 13, 7, "Oat" },
                    { 14, 7, "Onion" },
                    { 15, 8, "Cinnamon swirl" },
                    { 16, 8, "Plain" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Flavors_FBDetailsId",
                table: "Flavors",
                column: "FBDetailsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Flavors");

            migrationBuilder.DropTable(
                name: "MenuItems");

            migrationBuilder.DropTable(
                name: "FBDetails");
        }
    }
}
