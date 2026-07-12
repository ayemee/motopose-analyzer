using Microsoft.AspNetCore.Mvc;
using MotoPose.Api.Dtos;

namespace MotoPose.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PhotosController : ControllerBase
{
    [HttpPost]
    public IActionResult Upload([FromForm] UploadPhotoRequest request)
    {
        // Implementation for photo upload
        return Ok(new
        {
            fileName = request.File.FileName,
            riderName = request.RiderName,
            notes = request.Notes
        });
    }
}