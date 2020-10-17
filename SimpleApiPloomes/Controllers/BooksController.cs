using System.Collections.Generic;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using SimpleApiPloomes.Application.Books;
using SimpleApiPloomes.Entities;

namespace SimpleApiPloomes.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class BooksController : ControllerBase
  {
    private readonly IMediator _mediator;
    public BooksController(IMediator mediator)
    {
      _mediator = mediator;
    }

    [HttpGet]
    public async Task<ActionResult<List<Book>>> List()
    {
      return await _mediator.Send(new List.Query());
    }

    [HttpPost]
    public async Task<ActionResult<Unit>> Create([FromBody] Create.Command command)
    {
      return await _mediator.Send(command);
    }
  }
}
