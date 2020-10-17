using System;
using Microsoft.EntityFrameworkCore;
using SimpleApiPloomes.Entities;

namespace SimpleApiPloomes.Data
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions options) : base(options) { }

    public DbSet<Book> Books { get; set; }

    // protected override void OnModelCreating(ModelBuilder modelBuilder)
    // {
    //   // Conversão de Enum para string
    //   modelBuilder
    //     .Entity<Book>()
    //     .Property(prop => prop.Category)
    //     .HasConversion(
    //       category => category.ToString(),
    //       category => (Categories) Enum.Parse(typeof(Categories), category)
    //     );
    // }
  }
}
