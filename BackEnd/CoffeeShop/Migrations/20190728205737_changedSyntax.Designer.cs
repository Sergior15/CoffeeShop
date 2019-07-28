﻿// <auto-generated />
using CoffeeShop;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CoffeeShop.Migrations
{
    [DbContext(typeof(CoffeeShopContext))]
    [Migration("20190728205737_changedSyntax")]
    partial class changedSyntax
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CoffeeShop.Models.FBDetails", b =>
                {
                    b.Property<int>("FBDetailsId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Calories");

                    b.Property<string>("FBDescription");

                    b.Property<int>("MenuItemId");

                    b.Property<string>("Price");

                    b.HasKey("FBDetailsId");

                    b.HasIndex("MenuItemId");

                    b.ToTable("FBDetails");

                    b.HasData(
                        new { FBDetailsId = 1, Calories = "14", FBDescription = "Cold Brew", MenuItemId = 1, Price = "2.15" },
                        new { FBDetailsId = 2, Calories = "100", FBDescription = "Mocha", MenuItemId = 1, Price = "2.25" },
                        new { FBDetailsId = 3, Calories = "0", FBDescription = "Green", MenuItemId = 2, Price = "2.05" },
                        new { FBDetailsId = 4, Calories = "10", FBDescription = "Black", MenuItemId = 2, Price = "2.10" },
                        new { FBDetailsId = 5, Calories = "230", FBDescription = "Jumbo", MenuItemId = 3, Price = "3.00" },
                        new { FBDetailsId = 6, Calories = "150", FBDescription = "Health nut", MenuItemId = 3, Price = "4.00" },
                        new { FBDetailsId = 7, Calories = "178", FBDescription = "Whole grain", MenuItemId = 4, Price = "3.50" },
                        new { FBDetailsId = 8, Calories = "290", FBDescription = "Mini", MenuItemId = 4, Price = "2.75" }
                    );
                });

            modelBuilder.Entity("CoffeeShop.Models.Flavor", b =>
                {
                    b.Property<int>("FlavorId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("FBDetailsId");

                    b.Property<string>("FlavorName");

                    b.HasKey("FlavorId");

                    b.HasIndex("FBDetailsId");

                    b.ToTable("Flavors");

                    b.HasData(
                        new { FlavorId = 1, FBDetailsId = 1, FlavorName = "Black" },
                        new { FlavorId = 2, FBDetailsId = 1, FlavorName = "With skim milk" },
                        new { FlavorId = 3, FBDetailsId = 2, FlavorName = "White chocolate" },
                        new { FlavorId = 4, FBDetailsId = 2, FlavorName = "Dark chocolate" },
                        new { FlavorId = 5, FBDetailsId = 3, FlavorName = "Raspberry" },
                        new { FlavorId = 6, FBDetailsId = 3, FlavorName = "Matcha" },
                        new { FlavorId = 7, FBDetailsId = 4, FlavorName = "English Breakfast" },
                        new { FlavorId = 8, FBDetailsId = 4, FlavorName = "Chai" },
                        new { FlavorId = 9, FBDetailsId = 5, FlavorName = "Chocolate chip" },
                        new { FlavorId = 10, FBDetailsId = 5, FlavorName = "Blueberry" },
                        new { FlavorId = 11, FBDetailsId = 6, FlavorName = "Cranberry orange" },
                        new { FlavorId = 12, FBDetailsId = 6, FlavorName = "Bran raisin" },
                        new { FlavorId = 13, FBDetailsId = 7, FlavorName = "Oat" },
                        new { FlavorId = 14, FBDetailsId = 7, FlavorName = "Onion" },
                        new { FlavorId = 15, FBDetailsId = 8, FlavorName = "Cinnamon swirl" },
                        new { FlavorId = 16, FBDetailsId = 8, FlavorName = "Plain" }
                    );
                });

            modelBuilder.Entity("CoffeeShop.Models.MenuItem", b =>
                {
                    b.Property<int>("MenuItemId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("FoodorBev");

                    b.Property<string>("Image");

                    b.HasKey("MenuItemId");

                    b.ToTable("MenuItems");

                    b.HasData(
                        new { MenuItemId = 1, FoodorBev = "Coffee", Image = "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1072007868%2F960x0.jpg%3Ffit%3Dscale" },
                        new { MenuItemId = 2, FoodorBev = "Tea", Image = "https://cdn-prod.medicalnewstoday.com/content/images/articles/324/324771/close-up-of-a-cup-of-tea.jpg" },
                        new { MenuItemId = 3, FoodorBev = "Muffin", Image = "https://i2.wp.com/wellplated.com/wp-content/uploads/2017/04/Low-Sugar-Healthy-Blueberry-Muffins.jpg" },
                        new { MenuItemId = 4, FoodorBev = "Bagel", Image = "https://images.squarespace-cdn.com/content/5aa2d63e8f5130d49647afa1/1522333087444-J755FJ540LZ8IWK6W06G/Bagels.jpg?content-type=image%2Fjpeg" }
                    );
                });

            modelBuilder.Entity("CoffeeShop.Models.FBDetails", b =>
                {
                    b.HasOne("CoffeeShop.Models.MenuItem")
                        .WithMany("FBDetails")
                        .HasForeignKey("MenuItemId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("CoffeeShop.Models.Flavor", b =>
                {
                    b.HasOne("CoffeeShop.Models.FBDetails")
                        .WithMany("Flavors")
                        .HasForeignKey("FBDetailsId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
