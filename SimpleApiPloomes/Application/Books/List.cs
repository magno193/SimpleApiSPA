using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using SimpleApiPloomes.Data;
using SimpleApiPloomes.Entities;

namespace SimpleApiPloomes.Application.Books
{
  public class List
  {
    public class Query : IRequest<List<Book>> { }

    public class Handler : IRequestHandler<Query, List<Book>>
    {
      public DataContext _context { get; set; }
      public Handler(DataContext context)
      {

        _context = context;
      }

      public async Task<List<Book>> Handle(Query request, CancellationToken cancellationToken)
      {
        var books = await _context.Books.ToListAsync();

        return books;
      }
    }
  }
}
