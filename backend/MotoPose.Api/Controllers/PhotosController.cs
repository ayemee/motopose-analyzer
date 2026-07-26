using Microsoft.AspNetCore.Mvc;
using MotoPose.Api.Dtos;
using MotoPose.Api.Services;

namespace MotoPose.Api.Controllers;


[ApiController]
[Route("api/[controller]")]
public class PhotosController : ControllerBase
{
    private readonly IPhotoService _photoService;
    public PhotosController(IPhotoService photoService)
    {
        _photoService = photoService;
    }

    [HttpPost]
    public async Task<IActionResult> Upload([FromForm] UploadPhotoRequest request)
    {
        var response = await _photoService.UploadPhotoAsync(request);
        
        return Ok(response);
    }
}