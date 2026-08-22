using MotoPose.Api.Dtos;

namespace MotoPose.Api.Services;

public class PhotoService : IPhotoService
{
   private readonly IWebHostEnvironment _environment;
   private readonly IPhotoRepository _photoRepository;

    public PhotoService(IWebHostEnvironment environment, IPhotoRepository photoRepository)
    {
        _environment = environment;
        _photoRepository = photoRepository;
    }
    public async Task<UploadPhotoResponse> UploadPhotoAsync(UploadPhotoRequest request)
    {
       ValidatePhoto(request.File);

        var fileName = GenerateUniqueFileName(request.File.FileName);

        await SavePhotoAsync(request.File, fileName);

        var photo = new Photo
        {
            OriginalFileName = request.File.FileName,
            FileName = fileName,
            RiderName = request.RiderName,
            DateUploaded = DateTime.UtcNow,
            Notes = request.Notes 
        };

        await _photoRepository.AddPhotoAsync(photo);

        return CreateResponse(
            fileName,
            request.File.FileName,
            request.RiderName,
            request.Notes);
    }

    private void ValidatePhoto(IFormFile? file)
    {
        if (file == null || file.Length == 0)
        {
            throw new InvalidOperationException("No photo provided.");
        }

    }

    private string GenerateUniqueFileName(string originalFileName)
    {
        return $"{Guid.NewGuid()}{Path.GetExtension(originalFileName)}";
    }

    private async Task SavePhotoAsync(IFormFile file, string fileName)
    {
        var uploadFolder = Path.Combine(_environment.WebRootPath, "uploads");
        Directory.CreateDirectory(uploadFolder);

        var filePath = Path.Combine(uploadFolder, fileName);
        await using var stream = new FileStream(filePath, FileMode.Create);

        await file.CopyToAsync(stream);
    }

    private UploadPhotoResponse CreateResponse(string fileName, string originalFileName, string riderName, string? notes)
    {
        return new UploadPhotoResponse
        {
            FileName = fileName,
            OriginalFileName = originalFileName,
            RiderName = riderName,
            Notes = notes,
            FileUrl = $"/uploads/{fileName}"
        };
    }

}