using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using SimpleApiPloomes.Data;
using SimpleApiPloomes.Entities;

namespace SimpleApiPloomes.Application.Books
{
  public class Details
  {
    public class Query : IRequest<Book>
    {
      public Guid Id { get; set; }
    }

    public class Handler : IRequestHandler<Query, Book>
    {
      private readonly DataContext _context;
      public Handler(DataContext context)
      {
        _context = context;
      }

      public async Task<Book> Handle(Query request, CancellationToken cancellationToken)
      {
        Book book = await _context.Books.FindAsync(request.Id);
        if (book == null) throw new Exception("Não foi possível encontrar livro.");
        return book;
      }
    }
  }
}
