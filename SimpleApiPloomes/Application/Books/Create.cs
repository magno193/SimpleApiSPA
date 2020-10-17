using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using SimpleApiPloomes.Data;
using SimpleApiPloomes.Entities;

namespace SimpleApiPloomes.Application.Books
{
  public class Create
  {
    public class Command : IRequest
    {
      public Guid Id { get; set; }

      public string Title { get; set; }

      public string Description { get; set; }

      public string Publisher { get; set; }

      public decimal Price { get; set; }

      public string ImageUrl { get; set; }

      public string Category { get; set; }
    }

    public class Handler : IRequestHandler<Command>
    {
      private readonly DataContext _context;
      public Handler(DataContext context)
      {
        _context = context;
      }

      public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
      {
        Book book = new Book
        {
          Id = Guid.NewGuid(),
          Title = request.Title,
          Description = request.Description,
          Publisher = request.Publisher,
          Price = request.Price,
          ImageUrl = request.ImageUrl,
          Category = request.Category,
          UpdatedAt = DateTime.Now
        };

        _context.Books.Add(book);

        var success = await _context.SaveChangesAsync() > 0;
        if (success) return Unit.Value;
        throw new Exception("Ocorreu um problema ao salvar os dados!");
      }
    }
  }
}
