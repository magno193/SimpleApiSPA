using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SimpleApiPloomes.Entities
{
  public class Book
  {

    [Key]
    public Guid Id { get; set; }

    [StringLength(200)]
    public string Title { get; set; }

    [StringLength(500)]
    public string Description { get; set; }

    [StringLength(100)]
    public string Publisher { get; set; }

    [Column(TypeName = "decimal(9,2)")]
    public decimal Price { get; set; }

    public string ImageUrl { get; set; }

    [StringLength(100)]
    public string Category { get; set; }

    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; }
  }

  // public enum Categories
  // {
  //   Administração,
  //   Artes,
  //   AutoAjuda,
  //   Informática,
  //   AudioLivro,
  //   ComicBook,
  //   Manga,
  //   Medicina,
  //   CiênciasBiológicas,
  //   CiênciasExatas,
  //   CiênciasHumanas,
  //   Economia,
  //   Gastronomia,
  //   Didático,
  //   Dicionário,
  //   EsportesELazer,
  //   LiteraturaInfantoJuvenil,
  //   LiteraturaBrasileira,
  //   LiteraturaEstrangeira,
  //   Idioma,
  //   Direito,
  //   Religião,
  //   Diversos
  // }
}
